import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Eye, EyeOff } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema,
  type LoginFormData,
  useLogin,
} from "../../modules/auth";

import { PATHS } from "../../routes/config/paths";

export default function LoginPage() {
  const navigate = useNavigate();

  const loginMutation = useLogin();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data, {
      onSuccess: () => navigate(PATHS.DASHBOARD),
    });
  };

  return (
    <div className="w-full">

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-900">
          Welcome Back
        </h1>

        <p className="mt-2 text-slate-500">
          Sign in to continue to PetroTrack.
        </p>

      </div>

      {loginMutation.isError && (
        <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-600">
          Invalid email or password.
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Email */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            autoComplete="email"
            {...register("email")}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}

        </div>

        {/* Password */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              {...register("password")}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}

        </div>

        {/* Remember */}

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2">

            <input
              type="checkbox"
              {...register("rememberMe")}
            />

            <span className="text-sm">
              Remember Me
            </span>

          </label>

          <Link
            to={PATHS.AUTH.FORGOT_PASSWORD}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login */}

        <button
          type="submit"
          disabled={loginMutation.isPending}
          className="flex h-12 w-full items-center justify-center rounded-lg bg-blue-700 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loginMutation.isPending ? (
            <svg
              className="h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="white"
                strokeWidth="4"
                opacity=".3"
              />

              <path
                d="M22 12a10 10 0 00-10-10"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          ) : (
            "Sign In"
          )}
        </button>

        {/* Register */}

        <p className="text-center text-sm text-gray-600">

          Don't have an account?{" "}

          <Link
            to={PATHS.AUTH.REGISTER}
            className="font-semibold text-blue-600 hover:underline"
          >
            Create Account
          </Link>

        </p>

      </form>

    </div>
  );
}