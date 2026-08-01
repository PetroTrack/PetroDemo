import {
  FileCheck,
  Truck,
  UserPlus,
} from "lucide-react";

import { AppCard } from "../../../design-system/card";

const activities = [
  {
    icon: Truck,
    title: "Truck KDD 234A added",
    time: "5 min ago",
  },
  {
    icon: FileCheck,
    title: "Insurance renewed",
    time: "20 min ago",
  },
  {
    icon: UserPlus,
    title: "Driver John assigned",
    time: "1 hour ago",
  },
  {
    icon: FileCheck,
    title: "Inspection completed",
    time: "Today",
  },
];

export default function RecentActivities() {
  return (
    <AppCard>

      <h3 className="mb-5 text-lg font-semibold">
        Recent Activities
      </h3>

      <div className="space-y-5">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex items-center gap-4"
            >

              <div className="rounded-lg bg-slate-100 p-2">

                <Icon
                  size={18}
                  className="text-blue-600"
                />

              </div>

              <div className="flex-1">

                <p className="text-sm font-medium">
                  {activity.title}
                </p>

                <p className="text-xs text-slate-500">
                  {activity.time}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </AppCard>
  );
}