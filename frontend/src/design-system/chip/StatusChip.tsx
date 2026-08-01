import Chip from "@mui/material/Chip";
import clsx from "clsx";

export type StatusType =
  | "compliant"
  | "non-compliant"
  | "expiring"
  | "expired"
  | "pending"
  | "active"
  | "inactive";

interface StatusChipProps {
  status: StatusType;
}

const chipStyles: Record<StatusType, string> = {
  compliant:
    "bg-green-100 text-green-700 border border-green-200",

  "non-compliant":
    "bg-red-100 text-red-700 border border-red-200",

  expiring:
    "bg-amber-100 text-amber-700 border border-amber-200",

  expired:
    "bg-red-100 text-red-700 border border-red-200",

  pending:
    "bg-blue-100 text-blue-700 border border-blue-200",

  active:
    "bg-green-100 text-green-700 border border-green-200",

  inactive:
    "bg-slate-100 text-slate-600 border border-slate-200",
};

const labels: Record<StatusType, string> = {
  compliant: "Compliant",
  "non-compliant": "Non-Compliant",
  expiring: "Expiring Soon",
  expired: "Expired",
  pending: "Pending",
  active: "Active",
  inactive: "Inactive",
};

export default function StatusChip({
  status,
}: StatusChipProps) {
  return (
    <Chip
      label={labels[status]}
      size="small"
      className={clsx(
        "rounded-md px-1 text-xs font-medium",
        chipStyles[status]
      )}
    />
  );
}