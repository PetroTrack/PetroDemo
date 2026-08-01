import {
  forwardRef,
  type ReactNode,
} from "react";

import Button, { type ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import clsx from "clsx";

export interface AppButtonProps extends Omit<ButtonProps, "variant"> {
  children: ReactNode;

  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "ghost"
    | "text";

  loading?: boolean;
}

const variantClasses: Record<
  NonNullable<AppButtonProps["variant"]>,
  string
> = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white border border-blue-600",

  secondary:
    "bg-slate-700 hover:bg-slate-800 text-white border border-slate-700",

  success:
    "bg-green-600 hover:bg-green-700 text-white border border-green-600",

  danger:
    "bg-red-600 hover:bg-red-700 text-white border border-red-600",

  warning:
    "bg-amber-500 hover:bg-amber-600 text-white border border-amber-500",

  ghost:
    "bg-transparent hover:bg-slate-100 text-slate-700 border border-slate-300",

  text:
    "bg-transparent text-blue-600 shadow-none hover:bg-blue-50",
};

const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  (
    {
      children,
      variant = "primary",
      loading = false,
      disabled,
      className,
      startIcon,
      endIcon,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        type={type}
        disableElevation
        disabled={disabled || loading}
        startIcon={!loading ? startIcon : undefined}
        endIcon={!loading ? endIcon : undefined}
        className={clsx(
          "rounded-lg px-5 py-2.5 font-semibold normal-case transition-all duration-200",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {loading ? (
          <CircularProgress
            size={20}
            color="inherit"
          />
        ) : (
          children
        )}
      </Button>
    );
  }
);

AppButton.displayName = "AppButton";

export default AppButton;