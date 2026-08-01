import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  color: string;
  linkText?: string;
  onClick?: () => void;
}

export default function StatCard({
  title,
  value,
  icon,
  color,
  linkText,
  onClick,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h2>

          {linkText && (
            <button
              onClick={onClick}
              className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              {linkText}
            </button>
          )}

        </div>

        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}