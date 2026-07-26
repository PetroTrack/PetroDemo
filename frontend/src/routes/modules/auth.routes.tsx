import type { RouteObject } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";

import LoginPage from "../../pages/auth/login";
import RegisterPage from "../../pages/auth/register";
import ForgotPasswordPage from "../../pages/auth/forgotPassword";
import ResetPasswordPage from "../../pages/auth/resetPassword";

import { PATHS } from "../config/paths";

const authRoutes: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: PATHS.AUTH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PATHS.AUTH.REGISTER,
        element: <RegisterPage />,
      },
      {
        path: PATHS.AUTH.FORGOT_PASSWORD,
        element: <ForgotPasswordPage />,
      },
      {
        path: PATHS.AUTH.RESET_PASSWORD,
        element: <ResetPasswordPage />,
      },
      {
        path: "/",
        element: <LoginPage />,
      },
    ],
  },
];

export default authRoutes;