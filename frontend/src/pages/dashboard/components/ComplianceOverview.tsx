import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

import { AppCard } from "../../../design-system/card";

const items = [
  {
    title: "Compliant",
    value: 96,
    total: 124,
    color: "bg-green-500",
    icon: CheckCircle2,
  },
  {
    title: "Expiring Soon",
    value: 18,
    total: 124,
    color: "bg-amber-500",
    icon: AlertTriangle,
  },
  {
    title: "Non-Compliant",
    value: 10,
    total: 124,
    color: "bg-red-500",
    icon: XCircle,
  },
];

export default function ComplianceOverview() {
  return (
    <AppCard>
      <h3 className="mb-6 text-lg font-semibold">
        Compliance Overview
      </h3>

      <div className="space-y-6">
        {items.map((item) => {
          const Icon = item.icon;
          const percentage = (item.value / item.total) * 100;

          return (
            <div key={item.title}>
              <div className="mb-2 flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <Icon
                    size={18}
                    className="text-slate-600"
                  />

                  <span className="text-sm font-medium">
                    {item.title}
                  </span>

                </div>

                <span className="text-sm font-semibold">
                  {item.value}
                </span>

              </div>

              <div className="h-2 rounded-full bg-slate-200">

                <div
                  className={`h-2 rounded-full ${item.color}`}
                  style={{
                    width: `${percentage}%`,
                  }}
                />

              </div>
            </div>
          );
        })}
      </div>
    </AppCard>
  );
}