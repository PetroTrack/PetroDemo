import { TriangleAlert } from "lucide-react";

import { AppButton } from "../button";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = "Something went wrong",
  description = "An unexpected error occurred while loading this page.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex min-h-[350px] flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50 p-10">

      <div className="rounded-full bg-red-100 p-5">
        <TriangleAlert
          size={46}
          className="text-red-600"
        />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-red-700">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-center text-red-600">
        {description}
      </p>

      {onRetry && (
        <div className="mt-8">
          <AppButton
            variant="danger"
            onClick={onRetry}
          >
            Try Again
          </AppButton>
        </div>
      )}

    </div>
  );
}