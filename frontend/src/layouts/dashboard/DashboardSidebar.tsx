import {
  LayoutDashboard,
  Truck,
  Users,
  FileText,
  ShieldCheck,
  BarChart3,
  Settings,
} from "lucide-react";

import NavItem from "../../design-system/navigation/NavItem";

export default function DashboardSidebar() {
  return (
    <aside className="flex w-64 flex-col bg-slate-900">

      <div className="flex h-16 items-center border-b border-slate-800 px-6">

        <h1 className="text-xl font-bold text-white">
          PetroTrack
        </h1>

      </div>

      <nav className="flex-1 space-y-1 p-3">

        <NavItem
          to="/dashboard"
          icon={LayoutDashboard}
          label="Dashboard"
        />

        <NavItem
          to="/fleet"
          icon={Truck}
          label="Fleet"
        />

        <NavItem
          to="/drivers"
          icon={Users}
          label="Drivers"
        />

        <NavItem
          to="/documents"
          icon={FileText}
          label="Documents"
        />

        <NavItem
          to="/compliance"
          icon={ShieldCheck}
          label="Compliance"
        />

        <NavItem
          to="/reports"
          icon={BarChart3}
          label="Reports"
        />

        <NavItem
          to="/settings"
          icon={Settings}
          label="Settings"
        />

      </nav>

    </aside>
  );
}