import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function DashboardContent({
  children,
}: Props) {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      {children}
    </main>
  );
}