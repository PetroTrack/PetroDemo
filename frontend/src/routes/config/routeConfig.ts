import { PATHS } from "./paths";
import type { AppRoute } from "../types/Route";

export const routeConfig: AppRoute[] = [

  {
    id: "login",
    title: "Login",
    path: PATHS.AUTH.LOGIN,
    layout: "auth",
  },

  {
    id: "register",
    title: "Register",
    path: PATHS.AUTH.REGISTER,
    layout: "auth",
  },

  {
    id: "forgot-password",
    title: "Forgot Password",
    path: PATHS.AUTH.FORGOT_PASSWORD,
    layout: "auth",
  },

  {
    id: "dashboard",
    title: "Dashboard",
    path: PATHS.DASHBOARD,
    layout: "dashboard",
    roles: ["Admin", "Manager", "User"],
    permissions: ["dashboard.view"],
    showInNavigation: true,
    breadcrumb: true,
    order: 1,
  },

  {
    id: "fleet",

    title: "Fleet",

    path: PATHS.FLEET.ROOT,

    layout: "dashboard",

    roles: ["Admin", "TransportManager"],

    permissions: ["fleet.view"],

    showInNavigation: true,

    breadcrumb: true,

    order: 2,
  },

  {
    id: "drivers",

    title: "Drivers",

    path: PATHS.DRIVERS.ROOT,

    layout: "dashboard",

    roles: ["Admin", "TransportManager"],

    permissions: ["drivers.view"],

    showInNavigation: true,

    breadcrumb: true,

    order: 3,
  },

  {
    id: "transport",

    title: "Transport",

    path: PATHS.TRANSPORT.ROOT,

    layout: "dashboard",

    permissions: ["transport.view"],

    showInNavigation: true,

    breadcrumb: true,

    order: 4,
  },

  {
    id: "compliance",

    title: "Compliance",

    path: PATHS.COMPLIANCE.ROOT,

    layout: "dashboard",

    permissions: ["compliance.view"],

    showInNavigation: true,

    breadcrumb: true,

    order: 5,
  },

  {
    id: "documents",

    title: "Documents",

    path: PATHS.DOCUMENTS.ROOT,

    layout: "dashboard",

    permissions: ["documents.view"],

    showInNavigation: true,

    breadcrumb: true,

    order: 6,
  },

  {
    id: "reports",

    title: "Reports",

    path: PATHS.REPORTS.ROOT,

    layout: "dashboard",

    permissions: ["reports.view"],

    showInNavigation: true,

    breadcrumb: true,

    order: 7,
  },

  {
    id: "settings",

    title: "Settings",

    path: PATHS.SETTINGS.ROOT,

    layout: "dashboard",

    permissions: ["settings.view"],

    showInNavigation: true,

    breadcrumb: true,

    order: 8,
  },

  {
    id: "administration",

    title: "Administration",

    path: PATHS.ADMINISTRATION.ROOT,

    layout: "dashboard",

    permissions: ["administration.view"],

    roles: ["Admin"],

    showInNavigation: true,

    breadcrumb: true,

    order: 9,
  },

];