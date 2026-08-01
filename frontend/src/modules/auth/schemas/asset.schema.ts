import { z } from "zod";

// --- Enums (PRD 5.1 Compliance Asset Registry) ---------------------------

export const ASSET_CATEGORIES = [
  "prime_mover",
  "tanker_trailer",
  "petroleum_tanker",
  "support_vehicle",
] as const;

export type AssetCategory = (typeof ASSET_CATEGORIES)[number];

export const ASSET_CATEGORY_LABELS: Record<AssetCategory, string> = {
  prime_mover: "Prime Mover",
  tanker_trailer: "Tanker Trailer",
  petroleum_tanker: "Petroleum Tanker",
  support_vehicle: "Support / Patrol Vehicle",
};

const CAPACITY_REQUIRED_CATEGORIES: AssetCategory[] = [
  "tanker_trailer",
  "petroleum_tanker",
];

export const COMPLIANCE_STATUSES = [
  "compliant",
  "expiring_soon",
  "non_compliant",
  "incomplete",
] as const;

export type ComplianceStatus = (typeof COMPLIANCE_STATUSES)[number];


const currentYear = new Date().getFullYear();

export const assetSchema = z
  .object({
    registrationNumber: z
      .string()
      .trim()
      .min(3, "Enter a valid registration number")
      .max(20, "Registration number looks too long")
      .transform((v) => v.toUpperCase()),

    chassisNumber: z
      .string()
      .trim()
      .min(5, "Enter a valid chassis number")
      .max(50, "Chassis number looks too long"),

    category: z.enum(ASSET_CATEGORIES, {
      errorMap: () => ({ message: "Select an asset category" }),
    }),

    make: z.string().trim().min(1, "Make is required"),

    model: z.string().trim().min(1, "Model is required"),

yearOfManufacture: z
  .number({
    error: "Enter a valid year",
  })
  .int("Enter a valid year")
  .gte(1980, "Year looks too old to be in active service")
  .lte(currentYear + 1, "Year can't be in the future"),
    // Present only when category requires it — enforced in superRefine below.
tankerCapacityLitres: z
  .number({
    error: "Enter capacity in litres",
  })
  .positive("Capacity must be greater than zero")
  .optional(),
  
    company: z.string().trim().min(1, "Assign this asset to a company"),

    branch: z.string().trim().optional(),

    notes: z.string().trim().max(500, "Keep notes under 500 characters").optional(),
  })
  .superRefine((data, ctx) => {
    const needsCapacity = CAPACITY_REQUIRED_CATEGORIES.includes(data.category);

    if (needsCapacity && data.tankerCapacityLitres === undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["tankerCapacityLitres"],
        message: "Tanker capacity is required for this asset category",
      });
    }

    if (!needsCapacity && data.tankerCapacityLitres !== undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["tankerCapacityLitres"],
        message: "Tanker capacity only applies to tanker trailers and petroleum tankers",
      });
    }
  });

export type AssetFormData = z.infer<typeof assetSchema>;

export function categoryRequiresCapacity(category: AssetCategory | undefined) {
  if (!category) return false;
  return CAPACITY_REQUIRED_CATEGORIES.includes(category);
}
