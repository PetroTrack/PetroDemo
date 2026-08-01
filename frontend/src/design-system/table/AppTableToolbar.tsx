import { Search } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  search?: string;
  onSearch?: (value: string) => void;
}

export default function AppTableToolbar({
  children,
  search = "",
  onSearch,
}: Props) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">

      <div className="relative w-80">

        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          value={search}
          onChange={(e) => onSearch?.(e.target.value)}
          placeholder="Search..."
          className="h-10 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 text-sm outline-none focus:border-blue-600"
        />

      </div>

      <div className="flex items-center gap-2">

        {children}

      </div>

    </div>
  );
}