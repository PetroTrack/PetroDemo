import { Database } from "lucide-react";

interface Props {
  title?: string;
}

export default function AppTableEmpty({
  title = "No records found",
}: Props) {
  return (
    <div className="flex h-80 flex-col items-center justify-center">

      <Database
        size={50}
        className="text-slate-400"
      />

      <p className="mt-4 text-slate-500">

        {title}

      </p>

    </div>
  );
}