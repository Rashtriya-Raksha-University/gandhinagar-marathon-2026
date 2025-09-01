"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Phone,
  MapPin,
  Shield,
  ChevronDown,
  Mail,
  Shirt,
  AlertCircle,
  Flag,
} from "lucide-react";
import { motion, easeOut } from "framer-motion";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";
import { Country, State, City } from "country-state-city";

interface ValidationResult {
  success: boolean;
  errors: Record<string, string>;
}

interface ValidationRule {
  validate: (value: unknown) => string | null;
}

/** Common interface so we can avoid `any` */
interface ZLike {
  parse(value: unknown): unknown;
}

class ZodLikeString implements ZLike {
  private rules: ValidationRule[] = [];

  min(length: number, message?: string): this {
    this.rules.push({
      validate: (value) => {
        if (typeof value !== "string") return "Must be a string";
        if (value.length < length)
          return message || `Must be at least ${length} characters`;
        return null;
      },
    });
    return this;
  }

  max(length: number, message?: string): this {
    this.rules.push({
      validate: (value) => {
        if (typeof value !== "string") return "Must be a string";
        if (value.length > length)
          return message || `Must be less than ${length} characters`;
        return null;
      },
    });
    return this;
  }

  email(message?: string): this {
    this.rules.push({
      validate: (value) => {
        if (typeof value !== "string") return "Must be a string";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return message || "Please enter a valid email address";
        return null;
      },
    });
    return this;
  }

  regex(pattern: RegExp, message: string): this {
    this.rules.push({
      validate: (value) => {
        if (typeof value !== "string") return "Must be a string";
        if (!pattern.test(value)) return message;
        return null;
      },
    });
    return this;
  }

  optional(): this {
    return this;
  }

  parse(value: unknown): string {
    for (const rule of this.rules) {
      const error = rule.validate(value);
      if (error) throw new Error(error);
    }
    return value as string;
  }
}

class ZodLikeEnum implements ZLike {
  constructor(
    private values: readonly string[],
    private errorMessage?: string
  ) {}

  parse(value: unknown): string {
    if (typeof value !== "string" || !this.values.includes(value)) {
      throw new Error(
        this.errorMessage || `Must be one of: ${this.values.join(", ")}`
      );
    }
    return value;
  }
}

class ZodLikeObject implements ZLike {
  constructor(public shape: Record<string, ZLike>) {}

  parse(value: unknown): Record<string, unknown> {
    if (typeof value !== "object" || value === null) {
      throw new Error("Must be an object");
    }
    const result: Record<string, unknown> = {};
    const obj = value as Record<string, unknown>;
    for (const [key, validator] of Object.entries(this.shape)) {
      result[key] = validator.parse(obj[key]);
    }
    return result;
  }
}

const string = () => new ZodLikeString();
const enumType = (values: readonly string[], errorMessage?: string) =>
  new ZodLikeEnum(values, errorMessage);
const object = (shape: Record<string, ZLike>) => new ZodLikeObject(shape);

/* =============================
   Schema & Types
   ============================= */
const TSHIRT_SIZES = ["XS", "S", "M", "L", "XL", "2XL"] as const;
type TShirtSize = (typeof TSHIRT_SIZES)[number];

const RACE_TYPES = ["Half Marathon", "10km", "5km", "Fun Run"] as const;
type RaceType = (typeof RACE_TYPES)[number];

const registrationSchema = object({
  firstName: string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "First name can only contain letters, spaces, hyphens, and apostrophes"
    ),

  middleName: string()
    .max(50, "Middle name must be less than 50 characters")
    .regex(
      /^[a-zA-Z\s'-]*$/,
      "Middle name can only contain letters, spaces, hyphens, and apostrophes"
    )
    .optional(),

  lastName: string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Last name can only contain letters, spaces, hyphens, and apostrophes"
    ),

  email: string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),

  phone: string()
    .min(1, "Phone number is required")
    .regex(/^\+?[\d\s()-]+$/, "Phone number contains invalid characters"),

  tshirtSize: enumType(TSHIRT_SIZES, "Please select a valid t-shirt size"),
  raceType: enumType(RACE_TYPES, "Please select a valid race type"),

  address: object({
    street: string()
      .min(1, "Street address is required")
      .max(200, "Street address must be less than 200 characters"),
    city: string()
      .min(1, "City is required")
      .max(100, "City name must be less than 100 characters")
      .regex(
        /^[a-zA-Z\s'-]+$/,
        "City name can only contain letters, spaces, hyphens, and apostrophes"
      ),
    state: string()
      .min(1, "State/Province is required")
      .max(100, "State/Province name must be less than 100 characters"),
    zipCode: string()
      .min(1, "ZIP/Postal code is required")
      .regex(/^[a-zA-Z0-9\s-]+$/, "Invalid ZIP/Postal code format")
      .min(3, "ZIP/Postal code is too short")
      .max(20, "ZIP/Postal code is too long"),
    country: string()
      .min(1, "Country is required")
      .max(100, "Country name must be less than 100 characters"),
  }),

  turnstileToken: string().min(1, "Please complete the security verification"),
});

const validatePhoneLength = (phone: string): string | null => {
  const clean = phone.replace(/\D/g, "");
  if (clean.length < 10) return "Phone number is too short";
  if (clean.length > 15) return "Phone number is too long";
  return null;
};

type FormData = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  tshirtSize: TShirtSize | "";
  raceType: RaceType | "";
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
};

type AddressKey = keyof FormData["address"];

type FormErrors = Partial<
  Record<
    keyof FormData | `address.${keyof FormData["address"]}` | "turnstileToken",
    string
  >
>;

/* =============================
   UI helpers
   ============================= */
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

const UnderlineSelect: React.FC<{
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
}> = ({ name, id, value, onChange, error, children, disabled }) => (
  <div className="relative">
    <select
      id={id}
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
      className={`w-full appearance-none bg-transparent border-b-2 ${
        error
          ? "border-red-500"
          : "border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary"
      } focus:outline-none py-3.5 text-gray-900 dark:text-gray-100 transition-colors duration-200 pr-8 disabled:opacity-50`}
    >
      {children}
    </select>
    <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary pointer-events-none" />
  </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
    <AlertCircle className="w-4 h-4" />
    <span>{message}</span>
  </div>
);

/* =============================
   Turnstile loader
   ============================= */
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

const TURNSTILE_SITE_KEY = "1x00000000000000000000AA";

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

/* =============================
   Component
   ============================= */
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
      } catch (err) {
        console.error("Failed to render Turnstile:", err);
        setErrors((prev) => ({
          ...prev,
          turnstileToken: "Security verification unavailable",
        }));
      }
    }
  }, [turnstileLoaded, turnstileWidgetId]);

  /* ========= Country/State/City derived lists & handlers (top-level) ======== */
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

  /* =============================
     Handlers
     ============================= */
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

  const handlePhoneChangeWithLimit = (value?: string) => {
    const phoneValue = value || "";

    const digits = phoneValue.replace(/\D/g, "");

    const limited = digits.slice(0, 10);

    const formatted = "+91" + limited;

    setFormData((prev) => ({ ...prev, phone: formatted }));

    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const validatePostalByCountry = (
    countryISO: string,
    code: string
  ): string | null => {
    if (!code.trim()) return "ZIP/Postal code is required";

    if (countryISO === "IN") {
      if (!/^\d{6}$/.test(code)) return "PIN code must be exactly 6 digits";
      return null;
    }

    return null;
  };

  const parseValidator = (v: ZLike, value: unknown) => {
    v.parse(value);
  };

  const validateField = useCallback(
    (fieldName: string, value: string) => {
      try {
        if (fieldName.startsWith("address.")) {
          const addressField = fieldName.split(".")[1] as AddressKey;
          const addressSchema = registrationSchema.shape
            .address as ZodLikeObject;

          parseValidator(addressSchema.shape[addressField], value);

          if (addressField === "zipCode") {
            const pinErr = validatePostalByCountry(
              formData.address.country,
              value
            );
            if (pinErr) throw new Error(pinErr);
          }
        } else if (fieldName === "phone") {
          parseValidator(registrationSchema.shape.phone, value);
          const phoneError = validatePhoneLength(value);
          if (phoneError) throw new Error(phoneError);
        } else {
          const schema =
            registrationSchema.shape[
              fieldName as keyof typeof registrationSchema.shape
            ];
          if (schema) parseValidator(schema, value);
        }
        setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
      } catch (error) {
        if (error instanceof Error) {
          setErrors((prev) => ({ ...prev, [fieldName]: error.message }));
        }
      }
    },
    [formData.address.country]
  );

  const handleInputChangeWithValidation = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      handleInputChange(e);

      setTimeout(() => {
        const key = name as keyof FormErrors;
        if (value.trim() || errors[key]) {
          validateField(name, value);
        }
      }, 300);
    },
    [handleInputChange, validateField, errors]
  );

  const handlePhoneChangeWithValidation = useCallback(
    (value?: string) => {
      handlePhoneChangeWithValidation(value);
      const v = value || "";
      setTimeout(() => {
        if (v.trim() || errors.phone) {
          validateField("phone", v);
        }
      }, 300);
    },
    [validateField, errors.phone]
  );

  const validateForm = useCallback((): ValidationResult => {
    const newErrors: FormErrors = {};
    try {
      const dataToValidate = {
        ...formData,
        turnstileToken: turnstileToken || "",
      };

      const { shape } = registrationSchema;

      const tryParse = (
        validator: ZLike,
        value: unknown,
        mapKey: keyof FormErrors
      ) => {
        try {
          parseValidator(validator, value);
        } catch (err) {
          if (err instanceof Error) newErrors[mapKey] = err.message;
        }
      };

      tryParse(shape.firstName, dataToValidate.firstName, "firstName");
      if (dataToValidate.middleName) {
        tryParse(shape.middleName, dataToValidate.middleName, "middleName");
      }
      tryParse(shape.lastName, dataToValidate.lastName, "lastName");
      tryParse(shape.email, dataToValidate.email, "email");

      tryParse(shape.phone, dataToValidate.phone, "phone");
      const phoneLenError = validatePhoneLength(dataToValidate.phone);
      if (phoneLenError) newErrors.phone = phoneLenError;

      tryParse(shape.tshirtSize, dataToValidate.tshirtSize, "tshirtSize");
      tryParse(shape.raceType, dataToValidate.raceType, "raceType");

      const addrSchema = shape.address as ZodLikeObject;
      (
        ["street", "city", "state", "zipCode", "country"] as AddressKey[]
      ).forEach((field) => {
        try {
          parseValidator(
            addrSchema.shape[field],
            (dataToValidate.address as Record<AddressKey, string>)[field]
          );
        } catch (err) {
          if (err instanceof Error)
            newErrors[`address.${field}` as const] = err.message;
        }
      });

      {
        const pinErr = validatePostalByCountry(
          (dataToValidate.address as Record<AddressKey, string>).country,
          (dataToValidate.address as Record<AddressKey, string>).zipCode
        );
        if (pinErr) newErrors["address.zipCode"] = pinErr;
      }

      tryParse(
        shape.turnstileToken,
        dataToValidate.turnstileToken,
        "turnstileToken"
      );

      setErrors(newErrors);
      return {
        success: Object.keys(newErrors).length === 0,
        errors: newErrors as Record<string, string>,
      };
    } catch (e) {
      console.error("Validation error:", e);
      return { success: false, errors: newErrors as Record<string, string> };
    }
  }, [formData, turnstileToken]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const validation = validateForm();
      if (!validation.success) {
        const firstErrorField = Object.keys(validation.errors)[0];
        const element = document.getElementById(
          firstErrorField.replace(".", "\\.")
        );
        element?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      setIsSubmitting(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const submissionData = { ...formData, turnstileToken };
        console.log("Registration data:", submissionData);
        alert("Registration successful! Welcome to our community!");

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
      } catch (err) {
        console.error("Registration failed:", err);
        alert("Registration failed. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, turnstileToken, validateForm, turnstileWidgetId]
  );

  /* =============================
     Animations
     ============================= */
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.4,
        ease: easeOut,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  } as const;

  return (
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
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Register Today
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Complete your registration in just a few simple steps
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <div className="space-y-10">
                {/* Personal Information */}
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
                        onChange={handleInputChangeWithValidation}
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
                        onChange={handleInputChangeWithValidation}
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
                        onChange={handleInputChangeWithValidation}
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
                        onChange={handleInputChangeWithValidation}
                        error={!!errors.email}
                        placeholder="your.email@example.com"
                        autoComplete="email"
                      />
                      {errors.email && <ErrorMessage message={errors.email} />}
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
                          onChange={handlePhoneChangeWithLimit}
                          inputstyle={{
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "none",
                            color: "inherit",
                            padding: "0.875rem 0",
                          }}
                          containerstyle={{
                            borderBottom: errors.phone
                              ? "2px solid red"
                              : "2px solid #D1D5DB",
                          }}
                          countrystyle={{ border: "none" }}
                        />
                      </div>
                      {errors.phone && <ErrorMessage message={errors.phone} />}
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
                    <UnderlineSelect
                      id="tshirtSize"
                      name="tshirtSize"
                      value={formData.tshirtSize}
                      onChange={handleInputChangeWithValidation}
                      error={!!errors.tshirtSize}
                    >
                      <option value="">Select your size</option>
                      {TSHIRT_SIZES.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </UnderlineSelect>
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
                    <UnderlineSelect
                      id="raceType"
                      name="raceType"
                      value={formData.raceType}
                      onChange={handleInputChangeWithValidation}
                      error={!!errors.raceType}
                    >
                      <option value="">Select race type</option>
                      {RACE_TYPES.map((race) => (
                        <option key={race} value={race}>
                          {race}
                        </option>
                      ))}
                    </UnderlineSelect>
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
                        onChange={handleInputChangeWithValidation}
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
                        <UnderlineSelect
                          id="address.country"
                          name="address.country"
                          value={formData.address.country}
                          onChange={handleCountrySelect}
                          error={!!errors["address.country"]}
                        >
                          <option value="">Select country</option>
                          {countries.map((c) => (
                            <option key={c.isoCode} value={c.isoCode}>
                              {c.name}
                            </option>
                          ))}
                        </UnderlineSelect>
                        {errors["address.country"] && (
                          <ErrorMessage message={errors["address.country"]} />
                        )}
                      </div>

                      {/* State/Province (select) */}
                      <div>
                        <Label htmlFor="address.state">
                          State/Province <span className="text-red-500">*</span>
                        </Label>
                        <UnderlineSelect
                          id="address.state"
                          name="address.state"
                          value={formData.address.state}
                          onChange={handleStateSelect}
                          error={!!errors["address.state"]}
                          disabled={!formData.address.country}
                        >
                          <option value="">Select state</option>
                          {states.map((s) => (
                            <option key={s.isoCode} value={s.isoCode}>
                              {s.name}
                            </option>
                          ))}
                        </UnderlineSelect>
                        {errors["address.state"] && (
                          <ErrorMessage message={errors["address.state"]} />
                        )}
                      </div>

                      {/* City (select) */}
                      <div>
                        <Label htmlFor="address.city">
                          City <span className="text-red-500">*</span>
                        </Label>
                        <UnderlineSelect
                          id="address.city"
                          name="address.city"
                          value={formData.address.city}
                          onChange={handleCitySelect}
                          error={!!errors["address.city"]}
                          disabled={!formData.address.state}
                        >
                          <option value="">Select city</option>
                          {cities.map((ct) => (
                            <option
                              key={`${ct.name}-${ct.latitude}-${ct.longitude}`}
                              value={ct.name}
                            >
                              {ct.name}
                            </option>
                          ))}
                        </UnderlineSelect>
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
                          onChange={handleInputChangeWithValidation}
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

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
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
                      <div className="flex justify-center">
                        <div ref={turnstileRef} />
                      </div>
                    )}
                    {errors.turnstileToken && (
                      <ErrorMessage message={errors.turnstileToken} />
                    )}
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-8">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting || !turnstileLoaded}
                    className="w-full inline-flex items-center justify-center gap-3 rounded-xl border border-primary bg-transparent text-primary font-semibold py-4 px-8 shadow-sm transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="text-lg">
                      {isSubmitting
                        ? "Creating Account..."
                        : "Complete Registration"}
                    </span>
                    {!isSubmitting && (
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8 }}
                        className="text-xl"
                      >
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
  );
}
