import { useMutation } from "@tanstack/react-query";
import authService from "../services/auth.service";
import type { ResetPasswordRequest } from "../types/auth.types";

export function useResetPassword() {
  return useMutation({
    mutationFn: (data: ResetPasswordRequest) =>
      authService.resetPassword(data),
  });
}