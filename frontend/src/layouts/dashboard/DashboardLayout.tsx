import { useState, type ReactNode } from "react";

import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";

interface DashboardLayoutProps {
  title: string;
  children: ReactNode;
}

export default function DashboardLayout({
  title,
  children,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-100">

      <DashboardSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">

        <DashboardHeader
          title={title}
          onMenuClick={() => setSidebarOpen((prev) => !prev)}
        />

        <DashboardContent>
          {children}
        </DashboardContent>

      </div>

    </div>
  );
}