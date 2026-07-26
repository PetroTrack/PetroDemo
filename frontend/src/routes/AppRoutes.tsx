import { useRoutes } from "react-router-dom";

import authRoutes from "./modules/auth.routes";

export default function AppRoutes() {
  return useRoutes([
    ...authRoutes,
  ]);
}