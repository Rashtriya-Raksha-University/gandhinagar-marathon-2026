"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Phone,
  MapPin,
  Shield,
  ChevronDown,
  Mail,
  Shirt,
  Trophy,
  Home,
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";

import PhoneInput, {
  isValidPhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import Link from "next/link";
import "react-phone-number-input/style.css";
import { motion, easeOut } from "framer-motion";

type RaceType = "Half Marathon" | "10 Km" | "5 KM" | "Fun Run";

type FieldError =
  | "firstName"
  | "middleName"
  | "lastName"
  | "email"
  | "phoneNumber"
  | "tshirtSize"
  | "raceType"
  | "turnstile"
  | "address.street"
  | "address.city"
  | "address.state"
  | "address.zipCode"
  | "address.country";

type Errors = Partial<Record<FieldError, string>>;

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  tshirtSize: string;
  raceType: RaceType | "";
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

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
    className={`block text-sm font-medium text-gray-700 mb-2 ${className}`}
    {...props}
  >
    {children}
  </label>
);

const Input = (
  props: React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean }
) => {
  const { className = "", error, ...rest } = props;
  return (
    <input
      {...rest}
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${
        error
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
      } ${className}`}
    />
  );
};

const Select: React.FC<{
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
      className={`w-full px-4 py-3 border rounded-lg appearance-none focus:outline-none focus:ring-2 transition-colors duration-200 pr-10 ${
        error
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
      }`}
    >
      {children}
    </select>
    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
  </div>
);

const tshirtSizes = ["XS", "S", "M", "L", "XL", "2XL"] as const;
const raceTypes: RaceType[] = [
  "Half Marathon",
  "10 Km",
  "5 KM",
  "Fun Run",
] as const;

const steps = [
  { id: 1, name: "Your Profile", icon: "👤" },
  { id: 2, name: "Race Information", icon: "🏃" },
  { id: 3, name: "Address Details", icon: "📍" },
  { id: 4, name: "Security", icon: "🔒" },
];

export default function SignUpForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    tshirtSize: "",
    raceType: "",
    address: { street: "", city: "", state: "", zipCode: "", country: "" },
  });

  const [errors, setErrors] = useState<Errors>({});
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const turnstileRef = useRef<HTMLDivElement | null>(null);

  // Get Turnstile site key from environment variables
  const TURNSTILE_SITE_KEY =
    process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY || "0x4AAAAAABwXAJXgNrXvAXSy";

  useEffect(() => {
    if (currentStep === 4) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (window.turnstile && turnstileRef.current) {
          window.turnstile.render(turnstileRef.current, {
            sitekey: TURNSTILE_SITE_KEY,
            callback: (token: string) => setTurnstileToken(token),
            "expired-callback": () => setTurnstileToken(null),
            "error-callback": () => setTurnstileToken(null),
          });
        }
      };

      return () => {
        if (document.head.contains(script)) document.head.removeChild(script);
      };
    }
  }, [currentStep, TURNSTILE_SITE_KEY]);

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
      setFormData((prev) => ({
        ...prev,
        [name]: name === "raceType" ? (value as RaceType | "") : value,
      }));
    }
    if (errors[name as FieldError]) {
      setErrors((prev) => ({ ...prev, [name as FieldError]: undefined }));
    }
  };

  const validateCurrentStep = (): boolean => {
    const next: Errors = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim()) next.firstName = "First name is required";
      if (!formData.lastName.trim()) next.lastName = "Last name is required";
      if (!formData.email.trim()) next.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        next.email = "Please enter a valid email address";

      if (!formData.phone) {
        next.phoneNumber = "Phone number is required";
      } else if (!isValidPhoneNumber(formData.phone)) {
        next.phoneNumber = "Please enter a valid phone number";
      }
    }

    if (currentStep === 2) {
      if (!formData.raceType) next.raceType = "Race type is required";
      if (!formData.tshirtSize) next.tshirtSize = "T-shirt size is required";
    }

    if (currentStep === 3) {
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
    }

    if (currentStep === 4) {
      if (!turnstileToken)
        next.turnstile = "Please complete the security verification";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (!validateCurrentStep()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", { ...formData, turnstileToken });
      alert("Registration completed successfully!");
      setIsSubmitting(false);
    }, 1000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Your Profile
              </h2>
              <p className="text-gray-600">
                Enter your basic information to get started
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  error={!!errors.firstName}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  name="middleName"
                  placeholder="Enter your middle name"
                  value={formData.middleName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Label htmlFor="lastName">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  error={!!errors.lastName}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <div
                  className={`border rounded-lg ${
                    errors.phoneNumber
                      ? "border-red-500"
                      : "border-gray-300 focus-within:border-blue-500"
                  }`}
                >
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="IN"
                    id="phone"
                    value={formData.phone}
                    onChange={(value) => {
                      setFormData((prev) => ({ ...prev, phone: value || "" }));
                      if (errors.phoneNumber) {
                        setErrors((prev) => ({
                          ...prev,
                          phoneNumber: undefined,
                        }));
                      }
                    }}
                    className="px-4 py-3"
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Race Information
              </h2>
              <p className="text-gray-600">
                Choose your race type and t-shirt size
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-lg mx-auto">
              <div>
                <Label htmlFor="raceType" className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Race Type <span className="text-red-500">*</span>
                </Label>
                <Select
                  id="raceType"
                  name="raceType"
                  value={formData.raceType}
                  onChange={handleInputChange}
                  error={!!errors.raceType}
                >
                  <option value="">Select race type</option>
                  {raceTypes.map((race) => (
                    <option key={race} value={race}>
                      {race}
                    </option>
                  ))}
                </Select>
                {errors.raceType && (
                  <p className="text-red-500 text-sm mt-1">{errors.raceType}</p>
                )}
              </div>

              <div>
                <Label htmlFor="tshirtSize" className="flex items-center gap-2">
                  <Shirt className="w-4 h-4" />
                  T-shirt Size <span className="text-red-500">*</span>
                </Label>
                <Select
                  id="tshirtSize"
                  name="tshirtSize"
                  value={formData.tshirtSize}
                  onChange={handleInputChange}
                  error={!!errors.tshirtSize}
                >
                  <option value="">Select size</option>
                  {tshirtSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </Select>
                {errors.tshirtSize && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.tshirtSize}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Address Details
              </h2>
              <p className="text-gray-600">Enter your address information</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="address.street">
                  Street Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="address.street"
                  name="address.street"
                  placeholder="Enter your street address"
                  value={formData.address.street}
                  onChange={handleInputChange}
                  error={!!errors["address.street"]}
                />
                {errors["address.street"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["address.street"]}
                  </p>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="address.city">
                    City <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address.city"
                    name="address.city"
                    placeholder="Enter your city"
                    value={formData.address.city}
                    onChange={handleInputChange}
                    error={!!errors["address.city"]}
                  />
                  {errors["address.city"] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors["address.city"]}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="address.state">
                    State/Province <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address.state"
                    name="address.state"
                    placeholder="Enter your state"
                    value={formData.address.state}
                    onChange={handleInputChange}
                    error={!!errors["address.state"]}
                  />
                  {errors["address.state"] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors["address.state"]}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="address.zipCode">
                    ZIP/Postal Code <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address.zipCode"
                    name="address.zipCode"
                    placeholder="Enter your ZIP code"
                    value={formData.address.zipCode}
                    onChange={handleInputChange}
                    error={!!errors["address.zipCode"]}
                  />
                  {errors["address.zipCode"] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors["address.zipCode"]}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="address.country">
                    Country <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address.country"
                    name="address.country"
                    placeholder="Enter your country"
                    value={formData.address.country}
                    onChange={handleInputChange}
                    error={!!errors["address.country"]}
                  />
                  {errors["address.country"] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors["address.country"]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Security Verification
              </h2>
              <p className="text-gray-600">
                Complete the security check to finish registration
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div ref={turnstileRef} className="cf-turnstile" />
              {errors.turnstile && (
                <p className="text-red-500 text-sm">{errors.turnstile}</p>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br slate-500 via-blue-400 to-slate-500from- flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>

      <div className="w-full max-w-2xl">
        {/* Back to Home Button */}
        <Link
          href="/"
          className="mb-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200"
        >
          <Home className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </Link>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-green-400 px-8 py-6 text-white">
            <h1 className="text-2xl font-bold text-center">
              Create New Account
            </h1>
          </div>

          {/* Step Indicator */}
          <div className="px-8 py-6 border-b bg-gray-50">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium ${
                      step.id < currentStep
                        ? "bg-green-500 text-white"
                        : step.id === currentStep
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.id < currentStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span>{step.icon}</span>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-12 h-1 mx-2 ${
                        step.id < currentStep ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-3">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="text-xs text-center text-gray-600 max-w-[100px]"
                >
                  {step.name}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="px-8 py-8">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderStepContent()}
            </motion.div>
          </div>

          {/* Footer with Navigation */}
          <div className="px-8 py-6 bg-gray-50 border-t">
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <div className="text-sm text-gray-500">
                Step {currentStep} of {steps.length}
              </div>

              {currentStep < steps.length ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 transition-colors duration-200"
                >
                  {isSubmitting ? "Submitting..." : "Complete Registration"}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
