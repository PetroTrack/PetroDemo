import type { ReactNode } from "react";

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
  return (
    <div className="flex h-screen bg-slate-100">

      <DashboardSidebar />

      <div className="flex flex-1 flex-col overflow-hidden">

        <DashboardHeader title={title} />

        <DashboardContent>
          {children}
        </DashboardContent>

      </div>

    </div>
  );
}