import type { RouteObject } from "react-router-dom";

import DashboardPage from "../../pages/dashboard/DashboardPage";

import { PATHS } from "../config/paths";

const dashboardRoutes: RouteObject[] = [
  {
    path: PATHS.DASHBOARD,  
    element: <DashboardPage />,    
  },
];

export default dashboardRoutes;