export interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;

  user: {
    id: string;
    fullName: string;
    email: string;
  };

  roles: string[];

  permissions: string[];
}