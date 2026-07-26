import { Navigate, Outlet, useLocation } from "react-router-dom";
import { PATHS } from "../config/paths";
import { useAuthStore } from "../../store/authStore";

export default function AuthGuard() {
    const location = useLocation();

    const isAuthenticated = useAuthStore(
        (state) => state.isAuthenticated
    );

    if (!isAuthenticated) {
        return (
            <Navigate
                to={PATHS.AUTH.LOGIN}
                replace
                state={{ from: location }}
            />
        );
    }

    return <Outlet />;
}