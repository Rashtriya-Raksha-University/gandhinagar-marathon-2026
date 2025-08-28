import React, { useState, useEffect, useRef } from "react";
import {
  User,
  MapPin,
  Shirt,
  Mail,
  ArrowRight,
  Shield,
} from "lucide-react";

const Button = React.forwardRef(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-blue-600 text-white shadow hover:bg-blue-700",
      ghost: "hover:bg-gray-100 text-gray-600",
      outline: "border border-gray-300 bg-white shadow-sm hover:bg-gray-50",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      lg: "h-11 px-8 py-2",
    };

    return (
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

const Card = ({ className = "", children, ...props }) => (
  <div
    className={`rounded-xl border border-gray-200 bg-white shadow-lg ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ className = "", children, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ className = "", children, ...props }) => (
  <h2
    className={`text-2xl font-semibold leading-none tracking-tight text-gray-900 ${className}`}
    {...props}
  >
    {children}
  </h2>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const Input = React.forwardRef(({ className = "", ...props }, ref) => (
  <input
    className={`flex h-11 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    ref={ref}
    {...props}
  />
));

const Label = ({ className = "", children, ...props }) => (
  <label
    className={`text-sm font-medium leading-none text-gray-700 ${className}`}
    {...props}
  >
    {children}
  </label>
);

const Select = ({ className = "", children, ...props }) => (
  <select
    className={`flex h-11 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  >
    {children}
  </select>
);
const PhoneInput = ({ value, onChange, className, error, ...props }) => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = countryCodes.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.includes(searchQuery) ||
      country.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatPhoneNumber = (number, countryCode) => {
    const cleaned = number.replace(/\D/g, "");

    // Different formatting based on country
    if (countryCode === "+1") {
      // US/CA format
      if (cleaned.length <= 3) return cleaned;
      if (cleaned.length <= 6)
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
        6,
        10
      )}`;
    } else if (countryCode === "+44") {
      // UK format
      if (cleaned.length <= 4) return cleaned;
      if (cleaned.length <= 7)
        return `${cleaned.slice(0, 4)} ${cleaned.slice(4)}`;
      return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(
        7,
        11
      )}`;
    } else {
      // Generic international format
      if (cleaned.length <= 3) return cleaned;
      if (cleaned.length <= 6)
        return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
      if (cleaned.length <= 9)
        return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(
          6
        )}`;
      return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(
        6,
        9
      )} ${cleaned.slice(9)}`;
    }
  };

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    const cleaned = inputValue.replace(/\D/g, "");

    // Limit length based on country
    const maxLength = selectedCountry.code === "+1" ? 10 : 15;
    if (cleaned.length <= maxLength) {
      setPhoneNumber(cleaned);
      if (onChange) {
        onChange({
          countryCode: selectedCountry.code,
          number: cleaned,
          formatted: formatPhoneNumber(cleaned, selectedCountry.code),
          full: `${selectedCountry.code}${cleaned}`,
        });
      }
    }
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery("");
    if (onChange) {
      onChange({
        countryCode: country.code,
        number: phoneNumber,
        formatted: formatPhoneNumber(phoneNumber, country.code),
        full: `${country.code}${phoneNumber}`,
      });
    }
  };

  return (
    <div className="relative">
      <div className="flex">
        {/* Country Selector */}
        <div className="relative">
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 rounded-r-none border-r-0 px-3 h-11 ${
              error ? "border-red-500" : ""
            }`}
          >
            <span className="text-lg">{selectedCountry.flag}</span>
            <span className="text-sm font-mono">{selectedCountry.code}</span>
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute top-full left-0 z-50 w-80 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
              {/* Search Input */}
              <div className="p-3 border-b border-gray-100">
                <Input
                  placeholder="Search countries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-9"
                  autoFocus
                />
              </div>

              {/* Country List */}
              <div className="max-h-60 overflow-y-auto">
                {filteredCountries.length === 0 ? (
                  <div className="p-3 text-sm text-gray-500 text-center">
                    No countries found
                  </div>
                ) : (
                  filteredCountries.map((country, index) => (
                    <button
                      key={`${country.country}-${index}`}
                      type="button"
                      onClick={() => handleCountrySelect(country)}
                      className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg">{country.flag}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">
                          {country.name}
                        </div>
                      </div>
                      <span className="text-sm font-mono text-gray-500">
                        {country.code}
                      </span>
                      {selectedCountry.country === country.country && (
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Phone Number Input */}
        <Input
          type="tel"
          value={formatPhoneNumber(phoneNumber, selectedCountry.code)}
          onChange={handlePhoneChange}
          placeholder="Phone number"
          className={`rounded-l-none flex-1 ${error ? "border-red-500" : ""} ${
            className || ""
          }`}
          {...props}
        />
      </div>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsOpen(false);
            setSearchQuery("");
          }}
        />
      )}
    </div>
  );
};

// Enhanced country codes for phone input with more comprehensive data
const countryCodes = [
  { code: "+1", country: "US", flag: "🇺🇸", name: "United States", priority: 1 },
  { code: "+1", country: "CA", flag: "🇨🇦", name: "Canada", priority: 2 },
  {
    code: "+44",
    country: "GB",
    flag: "🇬🇧",
    name: "United Kingdom",
    priority: 3,
  },
  { code: "+91", country: "IN", flag: "🇮🇳", name: "India", priority: 4 },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "France", priority: 5 },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany", priority: 6 },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "China", priority: 7 },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan", priority: 8 },
  { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia", priority: 9 },
  { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil", priority: 10 },
  { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia", priority: 11 },
  { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy", priority: 12 },
  { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain", priority: 13 },
  { code: "+31", country: "NL", flag: "🇳🇱", name: "Netherlands", priority: 14 },
  { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea", priority: 15 },
  { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico", priority: 16 },
  {
    code: "+27",
    country: "ZA",
    flag: "🇿🇦",
    name: "South Africa",
    priority: 17,
  },
  { code: "+62", country: "ID", flag: "🇮🇩", name: "Indonesia", priority: 18 },
  { code: "+90", country: "TR", flag: "🇹🇷", name: "Turkey", priority: 19 },
  { code: "+46", country: "SE", flag: "🇸🇪", name: "Sweden", priority: 20 },
  { code: "+47", country: "NO", flag: "🇳🇴", name: "Norway", priority: 21 },
  { code: "+45", country: "DK", flag: "🇩🇰", name: "Denmark", priority: 22 },
  { code: "+358", country: "FI", flag: "🇫🇮", name: "Finland", priority: 23 },
  { code: "+41", country: "CH", flag: "🇨🇭", name: "Switzerland", priority: 24 },
  { code: "+43", country: "AT", flag: "🇦🇹", name: "Austria", priority: 25 },
  { code: "+32", country: "BE", flag: "🇧🇪", name: "Belgium", priority: 26 },
  { code: "+351", country: "PT", flag: "🇵🇹", name: "Portugal", priority: 27 },
  { code: "+48", country: "PL", flag: "🇵🇱", name: "Poland", priority: 28 },
  {
    code: "+420",
    country: "CZ",
    flag: "🇨🇿",
    name: "Czech Republic",
    priority: 29,
  },
  { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore", priority: 30 },
].sort((a, b) => a.priority - b.priority);

// T-shirt sizes
const tshirtSizes = ["XS", "S", "M", "L", "XL", "2XL"];

export default function UserDetailsForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneData: {
      countryCode: "+1",
      number: "",
      formatted: "",
      full: "",
    },
    tshirtSize: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });

  const [errors, setErrors] = useState({});
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const turnstileRef = useRef(null);

  // Initialize Cloudflare Turnstile
  useEffect(() => {
    // Load Cloudflare Turnstile script
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize turnstile widget
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: "0x4AAAAAAABkMYinukE_MYnj", // Demo site key - replace with your actual site key
          callback: (token) => {
            setTurnstileToken(token);
          },
          "expired-callback": () => {
            setTurnstileToken(null);
          },
          "error-callback": () => {
            setTurnstileToken(null);
          },
        });
      }
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePhoneChange = (phoneData) => {
    setFormData((prev) => ({ ...prev, phoneData }));
    if (errors.phoneNumber) {
      setErrors((prev) => ({ ...prev, phoneNumber: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phoneData.number.trim())
      newErrors.phoneNumber = "Phone number is required";
    else if (formData.phoneData.number.length < 7) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (!formData.tshirtSize) newErrors.tshirtSize = "T-shirt size is required";

    // Address validation
    if (!formData.address.street.trim())
      newErrors["address.street"] = "Street address is required";
    if (!formData.address.city.trim())
      newErrors["address.city"] = "City is required";
    if (!formData.address.state.trim())
      newErrors["address.state"] = "State/Province is required";
    if (!formData.address.zipCode.trim())
      newErrors["address.zipCode"] = "ZIP/Postal code is required";
    if (!formData.address.country.trim())
      newErrors["address.country"] = "Country is required";

    // Turnstile validation
    if (!turnstileToken) {
      newErrors.turnstile = "Please complete the security verification";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        console.log("Form submitted successfully:", {
          ...formData,
          turnstileToken,
        });
        alert("Form submitted successfully!");
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Personal Information
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please provide your details for our records
          </p>
        </div>

        {/* Form Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">User Details Form</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Name Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Full Name
                </h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="middleName">Middle Name</Label>
                    <Input
                      id="middleName"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleInputChange}
                      placeholder="Michael (optional)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">{errors.lastName}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Information
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@example.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <PhoneInput
                      value={formData.phoneData}
                      onChange={handlePhoneChange}
                      error={errors.phoneNumber}
                      placeholder="Enter phone number"
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* T-shirt Size */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Shirt className="w-5 h-5" />
                  T-shirt Size
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="tshirtSize">
                    Size <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    id="tshirtSize"
                    name="tshirtSize"
                    value={formData.tshirtSize}
                    onChange={handleInputChange}
                    className={`max-w-xs ${
                      errors.tshirtSize ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Select size</option>
                    {tshirtSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </Select>
                  {errors.tshirtSize && (
                    <p className="text-red-500 text-sm">{errors.tshirtSize}</p>
                  )}
                </div>
              </div>

              {/* Address Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Address
                </h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="address.street">
                      Street Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="address.street"
                      name="address.street"
                      value={formData.address.street}
                      onChange={handleInputChange}
                      placeholder="123 Main Street, Apt 4B"
                      className={
                        errors["address.street"] ? "border-red-500" : ""
                      }
                    />
                    {errors["address.street"] && (
                      <p className="text-red-500 text-sm">
                        {errors["address.street"]}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-2">
                      <Label htmlFor="address.city">
                        City <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="address.city"
                        name="address.city"
                        value={formData.address.city}
                        onChange={handleInputChange}
                        placeholder="New York"
                        className={
                          errors["address.city"] ? "border-red-500" : ""
                        }
                      />
                      {errors["address.city"] && (
                        <p className="text-red-500 text-sm">
                          {errors["address.city"]}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address.state">
                        State/Province <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="address.state"
                        name="address.state"
                        value={formData.address.state}
                        onChange={handleInputChange}
                        placeholder="NY"
                        className={
                          errors["address.state"] ? "border-red-500" : ""
                        }
                      />
                      {errors["address.state"] && (
                        <p className="text-red-500 text-sm">
                          {errors["address.state"]}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address.zipCode">
                        ZIP/Postal Code <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="address.zipCode"
                        name="address.zipCode"
                        value={formData.address.zipCode}
                        onChange={handleInputChange}
                        placeholder="10001"
                        className={
                          errors["address.zipCode"] ? "border-red-500" : ""
                        }
                      />
                      {errors["address.zipCode"] && (
                        <p className="text-red-500 text-sm">
                          {errors["address.zipCode"]}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address.country">
                        Country <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="address.country"
                        name="address.country"
                        value={formData.address.country}
                        onChange={handleInputChange}
                        placeholder="United States"
                        className={
                          errors["address.country"] ? "border-red-500" : ""
                        }
                      />
                      {errors["address.country"] && (
                        <p className="text-red-500 text-sm">
                          {errors["address.country"]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Verification */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Security Verification
                </h3>
                <div className="flex flex-col items-start space-y-2">
                  <div ref={turnstileRef} className="cf-turnstile"></div>
                  {errors.turnstile && (
                    <p className="text-red-500 text-sm">{errors.turnstile}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-6">
                <Button
                  onClick={handleSubmit}
                  size="lg"
                  className="px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Form"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            🔒 Your information is secure and encrypted • Protected by
            Cloudflare
          </p>
        </div>
      </div>
    </div>
  );
}
