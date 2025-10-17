"use client";

import React, { useState } from "react";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Shirt, Trophy, ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  parsePhoneNumberFromString,
  CountryCode,
  isValidPhoneNumber,
} from "libphonenumber-js";

// Zod Schema Definitions
const addressSchema = z.object({
  street: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State/Province is required"),
  zipCode: z.string().min(1, "ZIP/Postal code is required"),
  country: z.string().min(1, "Country is required"),
});

export const formDataSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional().default(""),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(5, "Phone number is required")
    .superRefine((val, ctx) => {
      if (!val) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Phone number is required",
        });
        return;
      }

      // Remove all non-digit characters except the leading '+'
      const cleanedPhone = "+" + val.replace(/\D/g, "");

      if (!isValidPhoneNumber(cleanedPhone)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid phone number",
        });
      }
    }),
  countryCode: z.string().optional(),
  tshirtSize: z.string().min(1, "T-shirt size is required"),
  raceType: z.enum(["Half Marathon", "10 Km", "5 KM", "3KM"], {
    message: "Race type is required",
  }),
  category: z.string().min(1, "Category is required"),
  isInService: z.boolean().default(false),
  address: addressSchema,
  transactionId: z
    .string()
    .min(10, "Transaction ID must be at least 10 characters")
    .max(50, "Transaction ID must not exceed 50 characters")
    .regex(
      /^[a-zA-Z0-9\-_]+$/,
      "Transaction ID can only contain letters, numbers, hyphens, and underscores"
    ),
});

type FormDataType = z.infer<typeof formDataSchema>;
type AddressType = z.infer<typeof addressSchema>;
type RaceType = "Half Marathon" | "10 Km" | "5 KM" | "3KM";
type StepNumber = 1 | 2 | 3 | 4;

interface StepConfig {
  id: StepNumber;
  name: string;
  icon: string;
}

interface CategoryOption {
  label: string;
  value: string;
}

const initialFormData: FormDataType = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phone: "",
  countryCode: "IN",
  tshirtSize: "",
  raceType: "" as RaceType,
  category: "",
  isInService: false,
  address: {
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  },
  transactionId: "",
};

// Constants
const TSHIRT_SIZES = ["XS", "S", "M", "L", "XL", "2XL"] as const;
const RACE_TYPES: RaceType[] = ["Half Marathon", "10 Km", "5 KM", "3KM"];

const STEPS: StepConfig[] = [
  { id: 1, name: "Your Profile", icon: "👤" },
  { id: 2, name: "Race Information", icon: "🏃" },
  { id: 3, name: "Address Details", icon: "📍" },
  { id: 4, name: "Payment", icon: "💳" },
];

// Get categories based on race type and personnel status
const getCategoriesForRace = (
  raceType: RaceType | string,
  isInService: boolean
): CategoryOption[] => {
  if (!raceType) return [];

  if (isInService) {
    return [
      { label: "Men", value: "Men" },
      { label: "Women", value: "Women" },
    ];
  }

  switch (raceType) {
    case "Half Marathon":
    case "10 Km":
    case "5 KM":
      return [
        { label: "Men/Boys Under 30", value: "Men/Boys Under 30" },
        { label: "Men/Boys Above 30", value: "Men/Boys Above 30" },
        { label: "Women/Girls Under 30", value: "Women/Girls Under 30" },
        { label: "Women/Girls Above 30", value: "Women/Girls Above 30" },
      ];
    case "3KM":
      return [
        { label: "Men/Boys Under 16", value: "Men/Boys Under 16" },
        { label: "Men/Boys 16-30", value: "Men/Boys 16-30" },
        { label: "Men/Boys Above 30", value: "Men/Boys Above 30" },
        { label: "Women/Girls Under 16", value: "Women/Girls Under 16" },
        { label: "Women/Girls 16-30", value: "Women/Girls 16-30" },
        { label: "Women/Girls Above 30", value: "Women/Girls Above 30" },
      ];
    default:
      return [];
  }
};

// Component Types
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

interface SelectProps {
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: boolean;
  children: React.ReactNode;
}

// Label Component
const Label: React.FC<LabelProps> = ({
  className = "",
  children,
  ...props
}) => (
  <label
    className={`block text-sm font-medium text-gray-700 mb-2 ${className}`}
    {...props}
  >
    {children}
  </label>
);

// Input Component
const Input: React.FC<InputProps> = ({ className = "", error, ...rest }) => (
  <input
    {...rest}
    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${
      error
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
    } ${className}`}
  />
);

// Select Component
const Select: React.FC<SelectProps> = ({
  name,
  id,
  value,
  onChange,
  error,
  children,
}) => (
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
  </div>
);

// Error Type
type FormErrors = Partial<
  Record<keyof FormDataType | `address.${keyof AddressType}`, string>
>;

export default function SignUpForm(): React.ReactElement {
  const [currentStep, setCurrentStep] = useState<StepNumber>(1);
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Validate current step
  const validateCurrentStep = (): boolean => {
    const newErrors: FormErrors = {};

    try {
      if (currentStep === 1) {
        formDataSchema
          .pick({
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
          })
          .parse({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
          });
      } else if (currentStep === 2) {
        formDataSchema
          .pick({
            raceType: true,
            category: true,
            tshirtSize: true,
          })
          .parse({
            raceType: formData.raceType,
            category: formData.category,
            tshirtSize: formData.tshirtSize,
          });
      } else if (currentStep === 3) {
        addressSchema.parse(formData.address);
      } else if (currentStep === 4) {
        formDataSchema
          .pick({
            transactionId: true,
          })
          .parse({
            transactionId: formData.transactionId,
          });
      }

      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.issues.forEach((err) => {
          const path = err.path.join(".");
          newErrors[path as keyof FormErrors] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value, type } = e.target;

    if (name === "isInService") {
      const isChecked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        isInService: isChecked,
        category: "",
      }));
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.category;
        return newErrors;
      });
    } else if (name.startsWith("address.")) {
      const key = name.split(".")[1] as keyof AddressType;
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [key]: value,
        },
      }));
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[`address.${key}`];
        return newErrors;
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormDataType];
        return newErrors;
      });
    }
  };

  // Handle phone change with country code
  const handlePhoneChange = (value: string, data: any): void => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
      countryCode: data.countryCode?.toUpperCase(),
    }));
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors.phone;
      return newErrors;
    });
  };

  // Handle next step
  const handleNext = (): void => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => (prev < 4 ? ((prev + 1) as StepNumber) : prev));
    }
  };

  // Handle previous step
  const handlePrev = (): void => {
    setCurrentStep((prev) => (prev > 1 ? ((prev - 1) as StepNumber) : prev));
  };

  // Handle submit
  const handleSubmit = (): void => {
    if (!validateCurrentStep()) return;

    try {
      formDataSchema.parse(formData);
      setIsSubmitting(true);

      setTimeout(() => {
        console.log("Form submitted:", formData);
        alert("Registration completed successfully!");
        setIsSubmitting(false);
        setFormData(initialFormData);
        setCurrentStep(1);
      }, 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.issues.forEach((err) => {
          const path = err.path.join(".");
          newErrors[path as keyof FormErrors] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  const categories = getCategoriesForRace(
    formData.raceType,
    formData.isInService
  );

  const renderStepContent = (): React.ReactNode => {
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
                <PhoneInput
                  country={formData.countryCode?.toLowerCase() || "in"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: "phone",
                    id: "phone",
                    required: true,
                  }}
                  preferredCountries={["in", "us", "gb"]}
                  countryCodeEditable={false}
                  enableSearch={true}
                  searchPlaceholder="Search country..."
                  disableCountryCode={false}
                  disableDropdown={false}
                  containerClass="phone-input-container"
                  inputClass="phone-input"
                  buttonClass="phone-button"
                  dropdownClass="phone-dropdown"
                  searchClass="phone-search"
                  placeholder="Enter phone number"
                  inputStyle={{}}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span className="inline-block w-4 h-4 text-center">⚠</span>
                    {errors.phone}
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
                Choose your race type, category, and t-shirt size
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="isInService"
                  checked={formData.isInService}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  I am In-Service Personnel
                </span>
              </label>
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
                  {RACE_TYPES.map((race) => (
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
                <Label htmlFor="category">
                  Category <span className="text-red-500">*</span>
                </Label>
                <Select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  error={!!errors.category}
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </Select>
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">{errors.category}</p>
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
                  {Array.from(TSHIRT_SIZES).map((size) => (
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
                Complete Payment
              </h2>
              <p className="text-gray-600">
                Make payment to confirm your registration
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-sm text-blue-800">
                  <p className="font-semibold mb-2">Payment Instructions:</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Scan the QR code or click on the payment link below</li>
                    <li>Complete the payment using your preferred method</li>
                    <li>
                      Copy the Transaction ID from the payment confirmation
                    </li>
                    <li>Enter the Transaction ID in the field below</li>
                    <li>Click "Complete Registration" to finish</li>
                  </ol>
                  <p className="mt-3 font-medium text-blue-900">
                    ⚠️ Your registration will only be confirmed after entering a
                    valid Transaction ID
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex flex-col items-center">
                {/* <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
                    Scan QR Code to Pay
                  </h3>
                  <div className="bg-white p-4 rounded-lg border-4 border-blue-500 shadow-lg">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=example@upi&pn=GandhinagarMarathon&am=500&cu=INR"
                      alt="Payment QR Code"
                      className="w-48 h-48"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Registration Fee: ₹500
                  </p>
                </div> */}

                <div className="w-full max-w-md">
                  {/* <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">OR</span>
                    </div>
                  </div> */}

                  <div className="text-center mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">
                      Pay via Link
                    </h4>
                    <a
                      href="https://your-payment-link.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Click Here to Pay
                    </a>
                  </div>

                  <div className="mt-8">
                    <Label htmlFor="transactionId">
                      Transaction ID <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="transactionId"
                      name="transactionId"
                      type="text"
                      placeholder="Enter your transaction ID"
                      value={formData.transactionId}
                      onChange={handleInputChange}
                      error={!!errors.transactionId}
                      className="font-mono"
                    />
                    {errors.transactionId && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.transactionId}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-2">
                      Enter the transaction ID exactly as shown in your payment
                      confirmation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    // <>
    //   <style>{`
    //     .phone-input-container {
    //       width: 100%;
    //     }

    //     .phone-input {
    //       width: 100% !important;
    //       padding: 12px 14px 12px 52px !important;
    //       border: 1px solid #d1d5db !important;
    //       border-radius: 0.5rem !important;
    //       font-size: 0.95rem !important;
    //       transition: all 0.2s ease !important;
    //     }

    //     .phone-input:focus {
    //       outline: none !important;
    //       border-color: #3b82f6 !important;
    //       box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
    //     }

    //     .phone-input:hover:not(:focus) {
    //       border-color: #9ca3af !important;
    //     }

    //     .phone-button {
    //       background-color: #f9fafb !important;
    //       border: 1px solid #d1d5db !important;
    //       border-right: none !important;
    //       border-radius: 0.5rem 0 0 0.5rem !important;
    //       padding: 0 8px !important;
    //       transition: background-color 0.2s ease !important;
    //     }

    //     .phone-button:hover {
    //       background-color: #f3f4f6 !important;
    //     }

    //     .phone-dropdown {
    //       width: 280px !important;
    //       border-radius: 0.5rem !important;
    //       box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
    //       border: 1px solid #e5e7eb !important;
    //       margin-top: 4px !important;
    //     }

    //     .phone-search {
    //       padding: 10px 12px !important;
    //       border-radius: 0.375rem !important;
    //       border: 1px solid #d1d5db !important;
    //       margin: 8px !important;
    //       width: calc(100% - 16px) !important;
    //     }

    //     .phone-search:focus {
    //       outline: none !important;
    //       border-color: #3b82f6 !important;
    //     }

    //     .country-list {
    //       max-height: 200px !important;
    //     }

    //     .country-list .country:hover {
    //       background-color: #f3f4f6 !important;
    //     }

    //     .country-list .country.highlight {
    //       background-color: #eff6ff !important;
    //     }

    //     .selected-flag {
    //       padding: 0 0 0 12px !important;
    //     }

    //     .flag-dropdown.open .selected-flag {
    //       background-color: #f3f4f6 !important;
    //     }
    //   `}</style>
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-gradient-to-br from-blue-400 via-teal-300 to-indigo-400">
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl"></div>

      <div className="relative w-full max-w-2xl z-10">
        <div className="mb-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200">
          <span className="text-sm">Gandhinagar Marathon Registration</span>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-teal-400 px-8 py-6 text-white">
            <h1 className="text-2xl font-bold text-center">
              Gandhinagar Marathon Registration
            </h1>
          </div>

          <div className="px-8 py-6 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center justify-between">
              {STEPS.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium ${
                      step.id < currentStep
                        ? "bg-green-500 text-white"
                        : step.id === currentStep
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step.id < currentStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span>{step.icon}</span>
                    )}
                  </div>
                  {index < STEPS.length - 1 && (
                    <div
                      className={`w-12 h-1 mx-2 ${
                        step.id < currentStep ? "bg-green-500" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-3">
              {STEPS.map((step) => (
                <div
                  key={step.id}
                  className="text-xs text-center text-gray-500 max-w-[100px]"
                >
                  {step.name}
                </div>
              ))}
            </div>
          </div>

          <div className="px-8 py-8 text-gray-800 bg-white">
            {renderStepContent()}
          </div>

          <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <div className="text-sm text-gray-600">
              Step {currentStep} of {STEPS.length}
            </div>

            {currentStep < STEPS.length ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md disabled:opacity-50 transition"
              >
                {isSubmitting ? "Submitting..." : "Complete Registration"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    // </>
  );
}
