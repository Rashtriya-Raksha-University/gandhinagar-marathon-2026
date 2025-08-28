"use client";

import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface PhoneInputFieldProps {
  id?: string;
  name?: string;
  value: Value;
  onChange: (value: Value) => void;
  placeholder?: string;
  error?: string;
}

const PhoneInputField = ({
  id = "phone",
  name = "phone",
  value,
  onChange,
  placeholder = "Enter phone number",
  error,
}: PhoneInputFieldProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        Phone Number <span className="text-red-500">*</span>
      </label>

      <PhoneInput
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-primary transition-colors
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default PhoneInputField;
