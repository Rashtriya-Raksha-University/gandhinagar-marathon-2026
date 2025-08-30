"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Phone,
  MapPin,
  Shield,
  Home,
  ChevronDown,
  Mail,
  Shirt,
} from "lucide-react";

import PhoneInput, {
  isValidPhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import { useRouter } from "next/navigation";
import "react-phone-number-input/style.css";
import { motion } from "framer-motion";

type FieldError =
  | "firstName"
  | "middleName"
  | "lastName"
  | "email"
  | "phoneNumber"
  | "tshirtSize"
  | "turnstile"
  | "address.street"
  | "address.city"
  | "address.state"
  | "address.zipCode"
  | "address.country";

type Errors = Partial<Record<FieldError, string>>;

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
        }
      ) => void;
    };
  }
}

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

const UnderlineInput = (
  props: React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean }
) => {
  const { className = "", error, ...rest } = props;
  return (
    <input
      {...rest}
      className={`w-full border-b-2 bg-transparent ${
        error
          ? "border-red-500"
          : "border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
      } focus:outline-none py-3.5 text-gray-900 dark:text-gray-100 transition-colors duration-200 ${className}`}
    />
  );
};

const UnderlineSelect: React.FC<{
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: boolean;
  children: React.ReactNode;
}> = ({ name, id, value, onChange, error, children }) => (
  <div className="relative">
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full appearance-none bg-transparent border-b-2 ${
        error
          ? "border-red-500"
          : "border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
      } focus:outline-none py-3.5 text-gray-900 dark:text-gray-100 transition-colors duration-200 pr-8`}
    >
      {children}
    </select>
    <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400 pointer-events-none" />
  </div>
);

const tshirtSizes = ["XS", "S", "M", "L", "XL", "2XL"] as const;

export default function SignUpForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    tshirtSize: "",
    address: { street: "", city: "", state: "", zipCode: "", country: "" },
  });

  const [errors, setErrors] = useState<Errors>({});
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const turnstileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: "0x4AAAAAAABkMYinukE_MYnj",
          callback: (token: string) => setTurnstileToken(token),
          "expired-callback": () => setTurnstileToken(null),
          "error-callback": () => setTurnstileToken(null),
        });
      }
    };

    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const key = name.split(".")[1] as keyof typeof formData.address;
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name as FieldError]) {
      setErrors((prev) => ({ ...prev, [name as FieldError]: undefined }));
    }
  };

  const validateForm = () => {
    const next: Errors = {};

    if (!formData.firstName.trim()) next.firstName = "First name is required";
    if (!formData.lastName.trim()) next.lastName = "Last name is required";

    if (!formData.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = "Please enter a valid email address";

    if (!formData.phone) {
      next.phoneNumber = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phone)) {
      next.phoneNumber = "Please enter a valid phone number";
    } else {
      const phoneNumber = parsePhoneNumber(formData.phone);
      if (phoneNumber && phoneNumber.nationalNumber.length !== 10) {
        next.phoneNumber = "Phone number must be exactly 10 digits";
      }
    }

    if (!formData.tshirtSize) next.tshirtSize = "T-shirt size is required";

    if (!formData.address.street.trim())
      next["address.street"] = "Street address is required";
    if (!formData.address.city.trim())
      next["address.city"] = "City is required";
    if (!formData.address.state.trim())
      next["address.state"] = "State/Province is required";
    if (!formData.address.zipCode.trim())
      next["address.zipCode"] = "ZIP/Postal code is required";
    if (!formData.address.country.trim())
      next["address.country"] = "Country is required";

    if (!turnstileToken)
      next.turnstile = "Please complete the security verification";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", { ...formData, turnstileToken });
      alert("Form submitted successfully!");
      setIsSubmitting(false);
    }, 600);
  };

  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <section className="min-h-screen py-8 md:py-16 bg-gradient-to-br from-primary to-indigo-200">
      {/* Home Button */}
      <div className="fixed top-6 left-6 z-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/")}
          className="flex items-center justify-center w-12 h-12   rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 group"
        >
          <Home className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex justify-center"
        >
          <div className="w-full max-w-3xl">
            {/* Header */}
            <motion.div variants={item} className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Create your account
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Join our community with just a few simple steps
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12"
            >
              <div className="space-y-8">
                {/* Name row */}
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
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="middleName">Middle Name</Label>
                    <UnderlineInput
                      id="middleName"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleInputChange}
                    />
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
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact row */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <UnderlineInput
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={!!errors.email}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <div
                      className={`PhoneInput w-full border-b-2 ${
                        errors.phoneNumber
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600 focus-within:border-blue-500 dark:focus-within:border-blue-400"
                      } focus-within:outline-none transition-colors duration-200`}
                    >
                      <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry="IN"
                        id="phone"
                        value={formData.phone}
                        onChange={(value) => {
                          if (!value) {
                            setFormData((prev) => ({ ...prev, phone: "" }));
                          } else {
                            const currentDigits = value.replace(/\D/g, "");

                            try {
                              const parsed = parsePhoneNumber(value);
                              if (parsed && parsed.nationalNumber) {
                                if (parsed.nationalNumber.length <= 10) {
                                  setFormData((prev) => ({
                                    ...prev,
                                    phone: value,
                                  }));
                                }
                              } else {
                                let nationalDigitCount = 0;

                                const countryCodes = {
                                  "1": 1,
                                  "7": 1,
                                  "91": 2,
                                  "44": 2,
                                  "33": 2,
                                  "49": 2,
                                  "81": 2,
                                  "86": 2,
                                  "61": 2,
                                  "39": 2,
                                  "34": 2,
                                  "55": 2,
                                  "52": 2,
                                  "82": 2,
                                  "65": 2,
                                  "60": 2,
                                  "62": 2,
                                  "66": 2,
                                  "84": 2,
                                  "63": 2,
                                };

                                let countryCodeLength = 0;
                                for (const [code, length] of Object.entries(
                                  countryCodes
                                )) {
                                  if (currentDigits.startsWith(code)) {
                                    countryCodeLength = length;
                                    break;
                                  }
                                }

                                nationalDigitCount =
                                  currentDigits.length - countryCodeLength;

                                if (nationalDigitCount <= 10) {
                                  setFormData((prev) => ({
                                    ...prev,
                                    phone: value,
                                  }));
                                }
                              }
                            } catch {
                              const nationalCount = Math.max(
                                0,
                                currentDigits.length - 2
                              );
                              if (nationalCount <= 10) {
                                setFormData((prev) => ({
                                  ...prev,
                                  phone: value,
                                }));
                              }
                            }
                          }

                          if (errors.phoneNumber) {
                            setErrors((prev) => ({
                              ...prev,
                              phoneNumber: undefined,
                            }));
                          }
                        }}
                        className="flex items-center gap-2 py-3.5"
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* T-shirt size */}
                <div>
                  <Label
                    htmlFor="tshirtSize"
                    className="flex items-center gap-2"
                  >
                    <Shirt className="w-4 h-4" />
                    T-shirt Size <span className="text-red-500">*</span>
                  </Label>
                  <UnderlineSelect
                    id="tshirtSize"
                    name="tshirtSize"
                    value={formData.tshirtSize}
                    onChange={handleInputChange}
                    error={!!errors.tshirtSize}
                  >
                    <option value="">Select size</option>
                    {tshirtSizes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </UnderlineSelect>
                  {errors.tshirtSize && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.tshirtSize}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      Address Information
                    </span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="address.street">
                        Address Line 1 <span className="text-red-500">*</span>
                      </Label>
                      <UnderlineInput
                        id="address.street"
                        name="address.street"
                        value={formData.address.street}
                        onChange={handleInputChange}
                        error={!!errors["address.street"]}
                      />
                      {errors["address.street"] && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors["address.street"]}
                        </p>
                      )}
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      <div>
                        <Label htmlFor="address.city">
                          City <span className="text-red-500">*</span>
                        </Label>
                        <UnderlineInput
                          id="address.city"
                          name="address.city"
                          value={formData.address.city}
                          onChange={handleInputChange}
                          error={!!errors["address.city"]}
                        />
                        {errors["address.city"] && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors["address.city"]}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="address.state">
                          State/Province <span className="text-red-500">*</span>
                        </Label>
                        <UnderlineInput
                          id="address.state"
                          name="address.state"
                          value={formData.address.state}
                          onChange={handleInputChange}
                          error={!!errors["address.state"]}
                        />
                        {errors["address.state"] && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors["address.state"]}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="address.zipCode">
                          ZIP/Postal Code{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <UnderlineInput
                          id="address.zipCode"
                          name="address.zipCode"
                          value={formData.address.zipCode}
                          onChange={handleInputChange}
                          error={!!errors["address.zipCode"]}
                        />
                        {errors["address.zipCode"] && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors["address.zipCode"]}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="address.country">
                          Country <span className="text-red-500">*</span>
                        </Label>
                        <UnderlineInput
                          id="address.country"
                          name="address.country"
                          value={formData.address.country}
                          onChange={handleInputChange}
                          error={!!errors["address.country"]}
                        />
                        {errors["address.country"] && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors["address.country"]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Verification */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      Security Verification{" "}
                      <span className="text-red-500">*</span>
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div ref={turnstileRef} className="cf-turnstile" />
                    {errors.turnstile && (
                      <p className="text-red-500 text-sm">{errors.turnstile}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <motion.button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary  text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    <span className="text-lg">
                      {isSubmitting ? "Submitting..." : "Create Account"}
                    </span>
                    {!isSubmitting && (
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.div>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
