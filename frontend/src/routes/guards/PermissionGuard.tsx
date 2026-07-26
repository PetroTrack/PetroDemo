import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { PATHS } from "../config/paths";

interface PermissionGuardProps {
  permissions: string[];
  requireAll?: boolean;
}

export default function PermissionGuard({
  permissions,
  requireAll = false,
}: PermissionGuardProps) {
  const { permissions: userPermissions } = useAuthStore();

  const allowed = requireAll
    ? permissions.every((permission) =>
        userPermissions.includes(permission)
      )
    : permissions.some((permission) =>
        userPermissions.includes(permission)
      );

  if (!allowed) {
    return <Navigate to={PATHS.FORBIDDEN} replace />;
  }

  return <Outlet />;
}