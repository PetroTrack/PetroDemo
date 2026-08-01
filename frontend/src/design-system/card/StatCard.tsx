import type { LucideIcon } from "lucide-react";

import AppCard from "./AppCard";

interface Props {
  title: string;
  value: string | number;
  icon: LucideIcon;
  footer?: string;
  iconColor?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  footer,
  iconColor = "text-blue-600",
}: Props) {
  return (
    <AppCard className="h-full">
      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h3>

          {footer && (
            <p className="mt-4 text-xs text-blue-600">
              {footer}
            </p>
          )}

        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 ${iconColor}`}
        >
          <Icon size={24} />
        </div>

      </div>
    </AppCard>
  );
}