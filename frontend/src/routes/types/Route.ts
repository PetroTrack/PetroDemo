import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type LayoutType =
  | "dashboard"
  | "auth"
  | "blank"
  | "error";

export interface AppRoute {
  id: string;

  path: string;

  title: string;

  element?: ReactNode;

  icon?: LucideIcon;

  layout: LayoutType;

  children?: AppRoute[];

  roles?: string[];

  permissions?: string[];

  showInNavigation?: boolean;

  breadcrumb?: boolean;

  order?: number;
}