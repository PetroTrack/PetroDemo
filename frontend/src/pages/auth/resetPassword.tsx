import { useState } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { Eye, EyeOff } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  resetPasswordSchema,
  type ResetPasswordFormData,
  useResetPassword,
} from "../../modules/auth";

import { PATHS } from "../../routes/config/paths";

export default function ResetPasswordPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token") ?? "";

  const resetPassword = useResetPassword();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),

    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ResetPasswordFormData) => {
    resetPassword.mutate(
      {
        ...data,
        token,
      },
      {
        onSuccess: () => {
          navigate(PATHS.AUTH.LOGIN);
        },
      }
    );
  };

  return (
    <div className="w-full">

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-900">
          Reset Password
        </h1>

        <p className="mt-2 text-slate-500">
          Create a new password for your account.
        </p>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >

        {/* Password */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            New Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
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

        {/* Confirm Password */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Confirm Password
          </label>

          <div className="relative">

            <input
              type={showConfirm ? "text" : "password"}
              {...register("confirmPassword")}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() => setShowConfirm((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirm ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}

        </div>

        <button
          type="submit"
          disabled={resetPassword.isPending}
          className="flex h-12 w-full items-center justify-center rounded-lg bg-blue-700 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {resetPassword.isPending
            ? "Resetting Password..."
            : "Reset Password"}
        </button>

        <div className="text-center">

          <Link
            to={PATHS.AUTH.LOGIN}
            className="font-medium text-blue-600 hover:underline"
          >
            Back to Login
          </Link>

        </div>

      </form>

    </div>
  );
}