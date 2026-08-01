import {
  Truck,
  Users,
  FileText,
  ShieldCheck,
} from "lucide-react";

import { StatCard } from "../../../design-system/card";

const cards = [
  {
    title: "Total Trucks",
    value: 124,
    icon: Truck,
    footer: "+6 this month",
  },
  {
    title: "Drivers",
    value: 89,
    icon: Users,
    footer: "4 inactive",
  },
  {
    title: "Documents",
    value: 742,
    icon: FileText,
    footer: "18 expiring",
  },
  {
    title: "Compliance",
    value: "96%",
    icon: ShieldCheck,
    footer: "Excellent",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatCard
          key={card.title}
          {...card}
        />
      ))}
    </div>
  );
}