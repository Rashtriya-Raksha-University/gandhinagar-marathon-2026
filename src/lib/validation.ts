/* =============================
   Validation Schema & Types
   ============================= */

export interface ValidationResult {
  success: boolean;
  errors: Record<string, string>;
}

interface ValidationRule {
  validate: (value: unknown) => string | null;
}

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

export class ZodLikeObject implements ZLike {
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
   Constants & Types
   ============================= */
export const TSHIRT_SIZES = ["XS", "S", "M", "L", "XL", "2XL"] as const;
export type TShirtSize = (typeof TSHIRT_SIZES)[number];

export const RACE_TYPES = ["Half Marathon", "10km", "5km", "Fun Run"] as const;
export type RaceType = (typeof RACE_TYPES)[number];

export type FormData = {
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

export type AddressKey = keyof FormData["address"];

export type FormErrors = Partial<
  Record<
    keyof FormData | `address.${keyof FormData["address"]}` | "turnstileToken",
    string
  >
>;

/* =============================
   Validation Schema
   ============================= */
export const registrationSchema = object({
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

/* =============================
   Validation Utilities
   ============================= */
export const validatePhoneLength = (phone: string): string | null => {
  const clean = phone.replace(/\D/g, "");
  if (clean.length < 10) return "Phone number is too short";
  if (clean.length > 15) return "Phone number is too long";
  return null;
};

export const validatePostalByCountry = (
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

export const parseValidator = (v: ZLike, value: unknown) => {
  v.parse(value);
};

/* =============================
   Validation Functions
   ============================= */
export const validateField = (
  fieldName: string,
  value: string,
  countryCode: string
): string | null => {
  try {
    if (fieldName.startsWith("address.")) {
      const addressField = fieldName.split(".")[1] as AddressKey;
      const addressSchema = registrationSchema.shape.address as ZodLikeObject;

      parseValidator(addressSchema.shape[addressField], value);

      if (addressField === "zipCode") {
        const pinErr = validatePostalByCountry(countryCode, value);
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
    return null;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    return "Validation error";
  }
};

export const validateForm = (
  formData: FormData,
  turnstileToken: string | null
): ValidationResult => {
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
    (["street", "city", "state", "zipCode", "country"] as AddressKey[]).forEach(
      (field) => {
        try {
          parseValidator(
            addrSchema.shape[field],
            (dataToValidate.address as Record<AddressKey, string>)[field]
          );
        } catch (err) {
          if (err instanceof Error)
            newErrors[`address.${field}` as const] = err.message;
        }
      }
    );

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

    return {
      success: Object.keys(newErrors).length === 0,
      errors: newErrors as Record<string, string>,
    };
  } catch {
    return { success: false, errors: newErrors as Record<string, string> };
  }
};
