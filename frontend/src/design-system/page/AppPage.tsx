import type { ReactNode } from "react";

interface AppPageProps {
  children: ReactNode;
}

export default function AppPage({
  children,
}: AppPageProps) {
  return (
    <div className="space-y-6">
      {children}
    </div>
  );
}