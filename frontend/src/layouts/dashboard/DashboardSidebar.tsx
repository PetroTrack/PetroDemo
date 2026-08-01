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

interface DashboardSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function DashboardSidebar({
  open,
}: DashboardSidebarProps) {
  return (
    <aside
      className={`border-r border-slate-200 bg-slate-900 transition-all duration-300 ${
        open ? "w-64" : "w-0 overflow-hidden"
      }`}
    >
      <div className="flex h-16 items-center border-b border-slate-800 px-6">
        <h1 className="whitespace-nowrap text-xl font-bold text-white">
          PetroTrack
        </h1>
      </div>

      <nav className="space-y-1 p-3">

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