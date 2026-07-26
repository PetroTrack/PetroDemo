import { useMutation } from "@tanstack/react-query";

import AuthService from "../services/auth.service";

import { useAuthStore } from "../../../store/authStore";

export function useLogout() {
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: AuthService.logout,

    onSuccess: () => {
      logout();

      localStorage.removeItem("accessToken");

      localStorage.removeItem("refreshToken");
    },
  });
}