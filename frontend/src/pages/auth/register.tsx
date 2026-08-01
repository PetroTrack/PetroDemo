import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  type RegisterFormData,
} from "../../modules/auth";

import { useRegister } from "../../modules/auth";

import { PATHS } from "../../routes/config/paths";

export default function RegisterPage() {
  const navigate = useNavigate();

  const registerMutation = useRegister();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",    
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    registerMutation.mutate(data, {
      onSuccess: () => navigate(PATHS.AUTH.LOGIN),
    });
  };

  return (
    <div className="w-full">

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-900">
          Create Account
        </h1>

        <p className="mt-2 text-slate-500">
          Create your PetroTrack account.
        </p>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        <div className="grid grid-cols-2 gap-4">

          <div>

            <label className="mb-2 block text-sm font-medium">
              First Name
            </label>

            <input
              {...register("fullName")}
              className="w-full rounded-lg border border-gray-300 px-4 py-3"
            />

            <p className="mt-1 text-sm text-red-600">
              {errors.fullName?.message}
            </p>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Last Name
            </label>

            <input
              {...register("lastName")}
              className="w-full rounded-lg border border-gray-300 px-4 py-3"
            />

            <p className="mt-1 text-sm text-red-600">
              {errors.lastName?.message}
            </p>

          </div>

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            {...register("email")}
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />

          <p className="mt-1 text-sm text-red-600">
            {errors.email?.message}
          </p>

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          <p className="mt-1 text-sm text-red-600">
            {errors.password?.message}
          </p>

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Confirm Password
          </label>

          <div className="relative">

            <input
              type={showConfirm ? "text" : "password"}
              {...register("confirmPassword")}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showConfirm ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          <p className="mt-1 text-sm text-red-600">
            {errors.confirmPassword?.message}
          </p>

        </div>

        <button
          type="submit"
          disabled={registerMutation.isPending}
          className="flex h-12 w-full items-center justify-center rounded-lg bg-blue-700 font-semibold text-white hover:bg-blue-800 disabled:opacity-50"
        >
          {registerMutation.isPending ? "Creating..." : "Create Account"}
        </button>
<p className="mt-2 text-center text-lg font-bold text-slate-500">
  Secure. Compliant. Always Ready.
</p>

        <p className="text-center text-sm text-gray-600">

          Already have an account?{" "}

          <Link
            to={PATHS.AUTH.LOGIN}
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign In
          </Link>

        </p>

      </form>

    </div>
  );
}