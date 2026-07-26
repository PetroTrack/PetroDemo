import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { PATHS } from "../config/paths";

interface RoleGuardProps {
  roles: string[];
}

export default function RoleGuard({ roles }: RoleGuardProps) {
  const { roles: userRoles } = useAuthStore();

  const hasRole = roles.some((role) => userRoles.includes(role));

  if (!hasRole) {
    return <Navigate to={PATHS.FORBIDDEN} replace />;
  }

  return <Outlet />;
}