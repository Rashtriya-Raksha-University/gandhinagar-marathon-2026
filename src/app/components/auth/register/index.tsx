"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Phone,
  MapPin,
  Shield,
  Mail,
  Shirt,
  AlertCircle,
  Flag,
} from "lucide-react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";
import { Country, State, City } from "country-state-city";
import DropdownSelect from "@/app/components/ui/DropDown";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import { RACE_PRICES } from "@/lib/constants";

import {
  containerVariants,
  itemVariants,
  buttonVariants,
  arrowAnimation,
} from "@/lib/animation";

import {
  TSHIRT_SIZES,
  RACE_TYPES,
  FormData,
  FormErrors,
  AddressKey,
  validateForm,
} from "@/lib/validation";

const Label: React.FC<
  React.PropsWithChildren<React.LabelHTMLAttributes<HTMLLabelElement>>
> = ({ className = "", children, ...props }) => (
  <label
    className={`text-base font-medium text-gray-700 dark:text-gray-300 ${className}`}
    {...props}
  >
    {children}
  </label>
);

const UnderlineInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean }
>(({ className = "", error, ...props }, ref) => (
  <input
    ref={ref}
    {...props}
    className={`w-full border-b-2 bg-transparent ${
      error
        ? "border-red-500"
        : "border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary"
    } focus:outline-none py-3.5 text-gray-900 dark:text-gray-100 transition-colors duration-200 ${className}`}
  />
));
UnderlineInput.displayName = "UnderlineInput";

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
    <AlertCircle className="w-4 h-4" />
    <span>{message}</span>
  </div>
);

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY!;

const useTurnstile = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTurnstile = () => {
      if (document.getElementById("turnstile-script")) {
        setIsLoaded(true);
        return;
      }
      const script = document.createElement("script");
      script.id = "turnstile-script";
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.onload = () => setIsLoaded(true);
      script.onerror = () => setError("Failed to load Turnstile");
      document.head.appendChild(script);
    };
    loadTurnstile();
  }, []);

  return { isLoaded, error };
};

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    tshirtSize: "",
    raceType: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "IN",
    },
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileWidgetId, setTurnstileWidgetId] = useState<string | null>(
    null
  );

  const turnstileRef = useRef<HTMLDivElement>(null);
  const { isLoaded: turnstileLoaded, error: turnstileError } = useTurnstile();

  useEffect(() => {
    if (
      turnstileLoaded &&
      window.turnstile &&
      turnstileRef.current &&
      !turnstileWidgetId
    ) {
      try {
        const widgetId = window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: "light",
          callback: (token: string) => {
            setTurnstileToken(token);
            setErrors((prev) => ({ ...prev, turnstileToken: undefined }));
          },
          "expired-callback": () => setTurnstileToken(null),
          "error-callback": () => {
            setTurnstileToken(null);
            setErrors((prev) => ({
              ...prev,
              turnstileToken: "Security verification failed",
            }));
          },
        });
        setTurnstileWidgetId(widgetId);
      } catch {
        setErrors((prev) => ({
          ...prev,
          turnstileToken: "Security verification unavailable",
        }));
      }
    }
  }, [turnstileLoaded, turnstileWidgetId]);

  const countries = React.useMemo(() => Country.getAllCountries(), []);
  const states = React.useMemo(
    () =>
      formData.address.country
        ? State.getStatesOfCountry(formData.address.country)
        : [],
    [formData.address.country]
  );
  const cities = React.useMemo(
    () =>
      formData.address.country && formData.address.state
        ? City.getCitiesOfState(
            formData.address.country,
            formData.address.state
          )
        : [],
    [formData.address.country, formData.address.state]
  );

  const handleCountrySelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const iso2 = e.target.value;
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, country: iso2, state: "", city: "" },
      }));
      setErrors((prev) => ({
        ...prev,
        ["address.country"]: undefined,
        ["address.state"]: undefined,
        ["address.city"]: undefined,
      }));
    },
    []
  );

  const handleStateSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const stateIso = e.target.value;
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, state: stateIso, city: "" },
      }));
      setErrors((prev) => ({
        ...prev,
        ["address.state"]: undefined,
        ["address.city"]: undefined,
      }));
    },
    []
  );

  const handleCitySelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const cityName = e.target.value;
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, city: cityName },
      }));
      setErrors((prev) => ({ ...prev, ["address.city"]: undefined }));
    },
    []
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;

      setFormData((prev) => {
        if (name.startsWith("address.")) {
          const addressKey = name.split(".")[1] as AddressKey;
          return {
            ...prev,
            address: { ...prev.address, [addressKey]: value },
          };
        }
        return { ...prev, [name]: value } as FormData;
      });

      const key = name as keyof FormErrors;
      if (key in errors) {
        setErrors((prev) => ({
          ...prev,
          [key]: undefined,
        }));
      }
    },
    [errors]
  );

  const handlePhoneChange = (value?: string) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));

    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const validation = validateForm(formData, turnstileToken);
      if (!validation.success) {
        setErrors(validation.errors as FormErrors);
        toast.error("Please correct the highlighted fields.");
        return;
      }

      setIsSubmitting(true);

      try {
        const raceKey = formData.raceType.toUpperCase();
        const amount = RACE_PRICES[raceKey] || 0;

        const submissionData = {
          ...formData,
          street: formData.address.street,
          city: formData.address.city,
          state: formData.address.state,
          zipCode: formData.address.zipCode,
          country: formData.address.country,
          amount,
          raceName: raceKey,
          turnstileToken,
        };

        const res = await fetch("/api/registrations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        });

        if (!res.ok) {
          const err = await res.json();
          if (err.error === "EMAIL_ALREADY_REGISTERED") {
            setErrors((prev) => ({
              ...prev,
              email: "Email already registered",
            }));
            toast.error("This email is already registered!");
          } else if (err.error === "PHONE_ALREADY_REGISTERED") {
            setErrors((prev) => ({
              ...prev,
              phone: "Phone already registered",
            }));
            toast.error("This phone number is already registered!");
          } else {
            toast.error(err.message || "Registration failed.");
          }
          return;
        }

        toast.success(`Registration successful! Amount: ₹${amount}`);

        setFormData({
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          phone: "",
          tshirtSize: "",
          raceType: "",
          address: {
            street: "",
            city: "",
            state: "",
            zipCode: "",
            country: "IN",
          },
        });
        setTurnstileToken(null);
        setErrors({});
        if (window.turnstile && turnstileWidgetId) {
          window.turnstile.reset(turnstileWidgetId);
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, turnstileToken, turnstileWidgetId]
  );

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <section
        className="min-h-screen pb-8 md:pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
        style={{ paddingTop: "calc(var(--nav-h, 80px) + 2.5rem)" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex justify-center"
          >
            <div className="w-full max-w-4xl">
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Register Today
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Complete your registration in just a few simple steps
                </p>
              </motion.div>

              <motion.form
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12"
              >
                <div className="space-y-10">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                      Personal Information
                    </h2>

                    <div className="grid gap-6 md:grid-cols-3">
                      <div>
                        <Label htmlFor="firstName">
                          First Name <span className="text-red-500">*</span>
                        </Label>
                        <UnderlineInput
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          error={!!errors.firstName}
                          placeholder="Enter your first name"
                          autoComplete="given-name"
                        />
                        {errors.firstName && (
                          <ErrorMessage message={errors.firstName} />
                        )}
                      </div>

                      <div>
                        <Label htmlFor="middleName">Middle Name</Label>
                        <UnderlineInput
                          id="middleName"
                          name="middleName"
                          value={formData.middleName}
                          onChange={handleInputChange}
                          error={!!errors.middleName}
                          placeholder="Middle name (optional)"
                          autoComplete="additional-name"
                        />
                        {errors.middleName && (
                          <ErrorMessage message={errors.middleName} />
                        )}
                      </div>

                      <div>
                        <Label htmlFor="lastName">
                          Last Name <span className="text-red-500">*</span>
                        </Label>
                        <UnderlineInput
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          error={!!errors.lastName}
                          placeholder="Enter your last name"
                          autoComplete="family-name"
                        />
                        {errors.lastName && (
                          <ErrorMessage message={errors.lastName} />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                      Contact Information
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <Label
                          htmlFor="email"
                          className="flex items-center gap-2"
                        >
                          <Mail className="w-4 h-4 text-primary" />
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <UnderlineInput
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          error={!!errors.email}
                          placeholder="your.email@example.com"
                          autoComplete="email"
                        />
                        {errors.email && (
                          <ErrorMessage message={errors.email} />
                        )}
                      </div>

                      <div>
                        <Label className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <div
                          className={`border-b-2 ${
                            errors.phone
                              ? "border-red-500"
                              : "border-gray-300 dark:border-gray-600 focus-within:border-primary"
                          } transition-colors duration-200 py-3.5`}
                        >
                          <PhoneInput
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="IN"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                          />
                        </div>
                        {errors.phone && (
                          <ErrorMessage message={errors.phone} />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Size & Race (side-by-side) */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label
                        htmlFor="tshirtSize"
                        className="flex items-center gap-2"
                      >
                        <Shirt className="w-4 h-4 text-primary" />
                        T-shirt Size <span className="text-red-500">*</span>
                      </Label>
                      <DropdownSelect
                        value={formData.tshirtSize}
                        onChange={(val) =>
                          handleInputChange({
                            target: { name: "tshirtSize", value: val },
                          } as never)
                        }
                        options={TSHIRT_SIZES.map((size) => ({
                          value: size,
                          label: size,
                        }))}
                        error={!!errors.tshirtSize}
                        placeholder="Select size"
                      />
                      {errors.tshirtSize && (
                        <ErrorMessage message={errors.tshirtSize} />
                      )}
                    </div>

                    <div>
                      <Label
                        htmlFor="raceType"
                        className="flex items-center gap-2"
                      >
                        <Flag className="w-4 h-4 text-primary" />
                        Race Type <span className="text-red-500">*</span>
                      </Label>
                      <DropdownSelect
                        value={formData.raceType}
                        onChange={(val) =>
                          handleInputChange({
                            target: { name: "raceType", value: val },
                          } as never)
                        }
                        options={RACE_TYPES.map((race) => ({
                          value: race,
                          label: race,
                        }))}
                        error={!!errors.raceType}
                        placeholder="Select race type"
                      />

                      {errors.raceType && (
                        <ErrorMessage message={errors.raceType} />
                      )}
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Address Information
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="address.street">
                          Street Address <span className="text-red-500">*</span>
                        </Label>
                        <UnderlineInput
                          id="address.street"
                          name="address.street"
                          value={formData.address.street}
                          onChange={handleInputChange}
                          error={!!errors["address.street"]}
                          placeholder="123 Main Street, Apartment 4B"
                          autoComplete="street-address"
                        />
                        {errors["address.street"] && (
                          <ErrorMessage message={errors["address.street"]} />
                        )}
                      </div>

                      {/* Reordered: Country → State → City → PIN */}
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {/* Country (select) */}
                        <div>
                          <Label htmlFor="address.country">
                            Country <span className="text-red-500">*</span>
                          </Label>
                          <DropdownSelect
                            value={formData.address.country}
                            onChange={(val) =>
                              handleCountrySelect({
                                target: { value: val },
                              } as never)
                            }
                            options={countries.map((c) => ({
                              value: c.isoCode,
                              label: c.name,
                            }))}
                            error={!!errors["address.country"]}
                            placeholder="Select country"
                          />

                          {errors["address.country"] && (
                            <ErrorMessage message={errors["address.country"]} />
                          )}
                        </div>

                        {/* State/Province (select) */}
                        <div>
                          <Label htmlFor="address.state">
                            State/Province{" "}
                            <span className="text-red-500">*</span>
                          </Label>
                          <DropdownSelect
                            value={formData.address.state}
                            onChange={(val) =>
                              handleStateSelect({
                                target: { value: val },
                              } as never)
                            }
                            options={states.map((s) => ({
                              value: s.isoCode,
                              label: s.name,
                            }))}
                            error={!!errors["address.state"]}
                            placeholder="Select state"
                            disabled={!formData.address.country}
                          />

                          {errors["address.state"] && (
                            <ErrorMessage message={errors["address.state"]} />
                          )}
                        </div>

                        {/* City (select) */}
                        <div>
                          <Label htmlFor="address.city">
                            City <span className="text-red-500">*</span>
                          </Label>
                          <DropdownSelect
                            value={formData.address.city}
                            onChange={(val) =>
                              handleCitySelect({
                                target: { value: val },
                              } as never)
                            }
                            options={cities.map((c) => ({
                              value: c.name,
                              label: c.name,
                            }))}
                            error={!!errors["address.city"]}
                            placeholder="Select city"
                            disabled={!formData.address.state}
                          />

                          {errors["address.city"] && (
                            <ErrorMessage message={errors["address.city"]} />
                          )}
                        </div>

                        {/* PIN/ZIP */}
                        <div>
                          <Label htmlFor="address.zipCode">
                            PIN/ZIP Code <span className="text-red-500">*</span>
                          </Label>
                          <UnderlineInput
                            id="address.zipCode"
                            name="address.zipCode"
                            value={formData.address.zipCode}
                            onChange={handleInputChange}
                            error={!!errors["address.zipCode"]}
                            placeholder={
                              formData.address.country === "IN"
                                ? "400001"
                                : "Postal Code"
                            }
                            autoComplete="postal-code"
                          />
                          {errors["address.zipCode"] && (
                            <ErrorMessage message={errors["address.zipCode"]} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security Verification */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="w-5 h-5 text-primary" />
                      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Security Verification{" "}
                        <span className="text-red-500">*</span>
                      </h2>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                      {turnstileError ? (
                        <div className="text-center py-4">
                          <ErrorMessage message="Security verification temporarily unavailable" />
                        </div>
                      ) : !turnstileLoaded ? (
                        <div className="text-center py-4">
                          <div className="animate-pulse">
                            <div className="h-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">
                            Loading security verification...
                          </p>
                        </div>
                      ) : (
                        <div className="w-full">
                          <div ref={turnstileRef} className="w-full" />
                        </div>
                      )}
                      {errors.turnstileToken && (
                        <ErrorMessage message={errors.turnstileToken} />
                      )}
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      {...buttonVariants}
                      disabled={isSubmitting || !turnstileLoaded}
                      className="w-full inline-flex items-center justify-center gap-5 rounded-xl border border-black bg-black text-white font-semibold py-4 px-8 shadow-sm transition-all duration-300 hover:bg-primary hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="text-lg">
                        {isSubmitting
                          ? "Registering..."
                          : "Complete Registration"}
                      </span>
                      {!isSubmitting && (
                        <motion.div {...arrowAnimation} className="text-xl">
                          →
                        </motion.div>
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
