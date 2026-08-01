import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import clsx from "clsx";
import type { ReactNode } from "react";

export interface AppCardProps {
  children: ReactNode;
  className?: string;
}

export default function AppCard({
  children,
  className,
}: AppCardProps) {
  return (
    <Card
      elevation={0}
      className={clsx(
        "rounded-xl border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      <CardContent className="p-5">
        {children}
      </CardContent>
    </Card>
  );
}