import { useMutation } from "@tanstack/react-query";

import AuthService from "../services/auth.service";

import { useAuthStore } from "../../../store/authStore";

export function useLogin() {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: AuthService.login,

    onSuccess: (response) => {
      login(
        response.user,
        response.roles,
        response.permissions
      );

      localStorage.setItem(
        "accessToken",
        response.accessToken
      );

      localStorage.setItem(
        "refreshToken",
        response.refreshToken
      );
    },
  });
}