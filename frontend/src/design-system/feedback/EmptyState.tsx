import type { ReactNode } from "react";

import { Inbox } from "lucide-react";

import { AppButton } from "../button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title = "No records found",
  description = "There is currently no data available.",
  icon,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[350px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white p-10">

      <div className="rounded-full bg-slate-100 p-5">
        {icon ?? <Inbox size={48} className="text-slate-400" />}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-center text-slate-500">
        {description}
      </p>

      {actionLabel && (
        <div className="mt-8">
          <AppButton onClick={onAction}>
            {actionLabel}
          </AppButton>
        </div>
      )}

    </div>
  );
}