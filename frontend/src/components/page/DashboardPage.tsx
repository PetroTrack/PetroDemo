import {
  Truck,
  Users,
  FileText,
  ShieldCheck,
  TriangleAlert,
  CalendarClock,
  FileX,
  FileWarning,
} from "lucide-react";

import PageContainer from "../../components/page/PageContainer";
import PageHeader from "../../components/page/PageHeader";

import StatCard from "../StatCard";

export default function DashboardPage() {
  return (
    <PageContainer>

      <PageHeader
        title="Dashboard"
        subtitle="Welcome back to PetroTrack."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Trucks"
          value="124"
          color="#2563eb"
          icon={<Truck size={28} />}
          linkText="View all"
        />

        <StatCard
          title="Total Drivers"
          value="98"
          color="#0ea5e9"
          icon={<Users size={28} />}
          linkText="View all"
        />

        <StatCard
          title="Total Documents"
          value="1,245"
          color="#06b6d4"
          icon={<FileText size={28} />}
          linkText="View all"
        />

        <StatCard
          title="Compliant Trucks"
          value="86%"
          color="#16a34a"
          icon={<ShieldCheck size={28} />}
          linkText="View all"
        />

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Non-Compliant Trucks"
          value="12"
          color="#dc2626"
          icon={<TriangleAlert size={28} />}
          linkText="View details"
        />

        <StatCard
          title="Documents Expiring Soon"
          value="18"
          color="#f59e0b"
          icon={<CalendarClock size={28} />}
          linkText="View details"
        />

        <StatCard
          title="Expired Documents"
          value="7"
          color="#ef4444"
          icon={<FileX size={28} />}
          linkText="View details"
        />

        <StatCard
          title="Missing Documents"
          value="15"
          color="#64748b"
          icon={<FileWarning size={28} />}
          linkText="View details"
        />

      </div>

      {/* Charts Placeholder */}

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

          <h3 className="mb-6 text-lg font-semibold">
            Compliance Overview
          </h3>

          <div className="flex h-80 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 text-slate-400">
            Compliance Chart
          </div>

        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

          <h3 className="mb-6 text-lg font-semibold">
            Documents Expiring (Next 30 Days)
          </h3>

          <div className="flex h-80 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 text-slate-400">
            Bar Chart
          </div>

        </div>

      </div>

      {/* Recent Uploads */}

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

        <div className="flex items-center justify-between border-b px-6 py-4">

          <h3 className="text-lg font-semibold">
            Recent Document Uploads
          </h3>

          <button className="text-sm font-medium text-blue-600">
            View all
          </button>

        </div>

        <div className="p-20 text-center text-slate-400">
          AG Grid will be added here.
        </div>

      </div>

    </PageContainer>
  );
}