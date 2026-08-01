import {
  Bell,
  Search,
} from "lucide-react";

interface Props {
  title: string;
}

export default function DashboardHeader({
  title,
}: Props) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">

      <div>

        <h1 className="text-2xl font-semibold text-slate-900">
          {title}
        </h1>

      </div>

      <div className="flex items-center gap-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Search..."
            className="h-10 w-72 rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-4 text-sm outline-none focus:border-blue-600"
          />

        </div>

        <button className="rounded-lg p-2 hover:bg-slate-100">
          <Bell size={20} />
        </button>

        <img
          src="/avatar.png"
          alt=""
          className="h-10 w-10 rounded-full"
        />

      </div>

    </header>
  );
}