import CircularProgress from "@mui/material/CircularProgress";

interface LoadingProps {
  title?: string;
  description?: string;
}

export default function Loading({
  title = "Loading...",
  description = "Please wait while we fetch your data.",
}: LoadingProps) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-10">

      <CircularProgress size={40} />

      <h3 className="mt-6 text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-center text-sm text-slate-500">
        {description}
      </p>

    </div>
  );
}