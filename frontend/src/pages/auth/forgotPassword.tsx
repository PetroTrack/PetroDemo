import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
  useForgotPassword,
} from "../../modules/auth";

import { PATHS } from "../../routes/config/paths";

export default function ForgotPasswordPage() {
  const forgotPassword = useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    forgotPassword.mutate(data);
  };

  return (
    <div className="w-full">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Forgot Password
        </h1>

        <p className="mt-2 text-gray-500">
          Enter your email address and we'll send you password reset instructions.
        </p>

      </div>

      {forgotPassword.isSuccess && (
        <div className="mb-6 rounded-lg border border-green-300 bg-green-50 p-4 text-green-700">
          Password reset instructions have been sent to your email.
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >

        <div>

          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            {...register("email")}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}

        </div>

        <button
          type="submit"
          disabled={forgotPassword.isPending}
          className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50"
        >
          {forgotPassword.isPending
            ? "Sending..."
            : "Send Reset Link"}
        </button>

        <div className="text-center">

          <Link
            to={PATHS.AUTH.LOGIN}
            className="text-blue-600 hover:underline"
          >
            Back to Login
          </Link>

        </div>

      </form>

    </div>
  );
}