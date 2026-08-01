import {
  Truck,
  Users,
  FileText,
  ShieldCheck,
} from "lucide-react";

import { DashboardLayout } from "../../layouts/dashboard";

import {
  StatCard,
} from "../../design-system/card";

export default function DashboardPage() {
  return (
    <DashboardLayout title="Dashboard">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Trucks"
          value={124}
          icon={Truck}
          footer="View All"
        />

        <StatCard
          title="Total Drivers"
          value={98}
          icon={Users}
          footer="View All"
        />

        <StatCard
          title="Total Documents"
          value="1,245"
          icon={FileText}
          footer="View All"
        />

        <StatCard
          title="Compliant Trucks"
          value="86%"
          icon={ShieldCheck}
          footer="View All"
        />

      </div>

    </DashboardLayout>
  );
}