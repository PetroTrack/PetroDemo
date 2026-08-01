import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface NavItemProps {
  to: string;
  icon: LucideIcon;
  label: string;
}

export default function NavItem({
  to,
  icon: Icon,
  label,
}: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "flex h-11 items-center gap-3 rounded-lg px-4 text-sm font-medium transition-all",
          isActive
            ? "bg-blue-600 text-white"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        )
      }
    >
      <Icon size={18} />
      <span>{label}</span>
    </NavLink>
  );
}