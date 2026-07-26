export const PATHS = {

  ROOT: "/",

  AUTH: {

    LOGIN: "/",

    REGISTER: "/register",

    FORGOT_PASSWORD: "/forgot-password",

    RESET_PASSWORD: "/reset-password",

  },

  DASHBOARD: "/dashboard",

  FLEET: {

    ROOT: "/fleet",

    LIST: "/fleet",

    CREATE: "/fleet/new",

    DETAILS: "/fleet/:id",

    EDIT: "/fleet/:id/edit",

  },

  DRIVERS: {

    ROOT: "/drivers",

    LIST: "/drivers",

    CREATE: "/drivers/new",

    DETAILS: "/drivers/:id",

    EDIT: "/drivers/:id/edit",

  },

  TRANSPORT: {

    ROOT: "/transport",

  },

  COMPLIANCE: {

    ROOT: "/compliance",

  },

  DOCUMENTS: {

    ROOT: "/documents",

  },

  REPORTS: {

    ROOT: "/reports",

  },

  SETTINGS: {

    ROOT: "/settings",

  },

  ADMINISTRATION: {

    ROOT: "/administration",

  },

  PROFILE: "/profile",

  UNAUTHORIZED: "/403",

  SERVER_ERROR: "/500",

  FORBIDDEN: "/403",

  NOT_FOUND: "*",

} as const;