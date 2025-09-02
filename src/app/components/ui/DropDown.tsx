"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownSelectProps {
  value: string;
  options: { value: string; label: string }[];
  error?: boolean;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function DropdownSelect({
  value,
  options,
  onChange,
  error,
  placeholder,
  disabled,
}: DropdownSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSelect = (val: string) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className={`w-full flex justify-between items-center border-b-2 py-3.5 px-2 bg-transparent text-left ${
          error
            ? "border-red-500"
            : "border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary"
        } focus:outline-none`}
      >
        {value ? options.find((o) => o.value === value)?.label : placeholder}
        <ChevronDown className="w-5 h-5 text-primary pointer-events-none" />
      </button>

      {open && (
        <ul className="absolute left-0 mt-1 w-full bg-white dark:bg-gray-800 shadow-lg rounded-md z-50 max-h-56 overflow-y-auto">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`px-4 py-2 cursor-pointer transition-colors duration-150 
    hover:bg-primary/10 hover:text-primary 
    dark:hover:bg-primary/20
    ${value === opt.value ? "font-bold text-primary" : ""}`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
