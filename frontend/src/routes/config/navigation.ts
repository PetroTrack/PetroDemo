import {
  LayoutDashboard,
  Truck,
  Users,
  Route,
  ShieldCheck,
  FolderOpen,
  BarChart3,
  Settings,
  Building2,
} from "lucide-react";

import { PATHS } from "./paths";

export const navigation = [

  {
    id: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboard,
    path: PATHS.DASHBOARD,
  },

  {
    id: "fleet",
    title: "Fleet",
    icon: Truck,
    path: PATHS.FLEET.ROOT,
  },

  {
    id: "drivers",
    title: "Drivers",
    icon: Users,
    path: PATHS.DRIVERS.ROOT,
  },

  {
    id: "transport",
    title: "Transport",
    icon: Route,
    path: PATHS.TRANSPORT.ROOT,
  },

  {
    id: "compliance",
    title: "Compliance",
    icon: ShieldCheck,
    path: PATHS.COMPLIANCE.ROOT,
  },

  {
    id: "documents",
    title: "Documents",
    icon: FolderOpen,
    path: PATHS.DOCUMENTS.ROOT,
  },

  {
    id: "reports",
    title: "Reports",
    icon: BarChart3,
    path: PATHS.REPORTS.ROOT,
  },

  {
    id: "settings",
    title: "Settings",
    icon: Settings,
    path: PATHS.SETTINGS.ROOT,
  },

  {
    id: "administration",
    title: "Administration",
    icon: Building2,
    path: PATHS.ADMINISTRATION.ROOT,
  },

];