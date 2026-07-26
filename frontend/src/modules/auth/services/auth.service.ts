import axios from "axios";

import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
} from "../types/auth.types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

class AuthService {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>(
      "/auth/login",
      data
    );

    return response.data;
  }

  async register(data: RegisterRequest): Promise<void> {
    await api.post("/auth/register", data);
  }

  async forgotPassword(
    data: ForgotPasswordRequest
  ): Promise<void> {
    await api.post("/auth/forgot-password", data);
  }

  async resetPassword(
    data: ResetPasswordRequest
  ): Promise<void> {
    await api.post("/auth/reset-password", data);
  }

  async logout(): Promise<void> {
    await api.post("/auth/logout");
  }

  async refreshToken(): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>(
      "/auth/refresh-token"
    );

    return response.data;
  }
}

export default new AuthService();