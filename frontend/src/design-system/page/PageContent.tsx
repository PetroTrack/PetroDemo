import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageContent({
  children,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      {children}
    </div>
  );
}