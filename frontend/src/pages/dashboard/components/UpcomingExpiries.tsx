import { CalendarClock } from "lucide-react";

import { AppCard } from "../../../design-system/card";
import { StatusChip } from "../../../design-system/chip";

const documents = [
  {
    truck: "KDD 234A",
    document: "Insurance",
    expiry: "03 Aug 2026",
    status: "expiring",
  },
  {
    truck: "KCY 567B",
    document: "Road License",
    expiry: "05 Aug 2026",
    status: "expiring",
  },
  {
    truck: "KDG 890C",
    document: "Inspection",
    expiry: "07 Aug 2026",
    status: "expired",
  },
  {
    truck: "KDL 112D",
    document: "Insurance",
    expiry: "08 Aug 2026",
    status: "expiring",
  },
] as const;

export default function UpcomingExpiries() {
  return (
    <AppCard>
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          Upcoming Expiries
        </h3>

        <CalendarClock
          size={20}
          className="text-slate-500"
        />
      </div>

      <div className="divide-y divide-slate-100">
        {documents.map((item) => (
          <div
            key={`${item.truck}-${item.document}`}
            className="flex items-center justify-between py-4"
          >
            <div>
              <p className="font-medium text-slate-800">
                {item.truck}
              </p>

              <p className="text-sm text-slate-500">
                {item.document}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {item.expiry}
              </p>
            </div>

            <StatusChip status={item.status} />
          </div>
        ))}
      </div>
    </AppCard>
  );
}