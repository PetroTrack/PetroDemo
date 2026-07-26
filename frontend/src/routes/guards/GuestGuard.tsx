import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { PATHS } from "../config/paths";

export default function GuestGuard() {
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();

  if (isAuthenticated) {
    const from =
      (location.state as { from?: { pathname: string } })?.from?.pathname ||
      PATHS.DASHBOARD;

    return <Navigate to={from} replace />;
  }

  return <Outlet />;
}