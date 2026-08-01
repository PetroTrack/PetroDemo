import {
  Bell,
  PanelLeft,
  Search,
} from "lucide-react";

interface Props {
  title: string;
  onMenuClick: () => void;
}

export default function DashboardHeader({
  title,
  onMenuClick,
}: Props) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">

      <div className="flex items-center gap-4">

        <button
          onClick={onMenuClick}
          className="rounded-lg border border-slate-200 p-2 transition-all hover:bg-slate-100"
        >
          <PanelLeft size={22} />
        </button>

        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            {title}
          </h1>
        </div>

      </div>

      <div className="flex items-center gap-4">

        <div className="relative hidden lg:block">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Search..."
            className="h-10 w-72 rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-4 text-sm outline-none focus:border-blue-600"
          />

        </div>

        <button className="relative rounded-lg p-2 hover:bg-slate-100">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

        </button>

        <button className="flex items-center gap-3 rounded-lg px-2 py-1 hover:bg-slate-100">

          <img
            src="/avatar.png"
            alt="User"
            className="h-10 w-10 rounded-full border border-slate-300 object-cover"
          />

          <div className="hidden text-left xl:block">

            <p className="text-sm font-semibold text-slate-800">
              Dennis
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>

          </div>

        </button>

      </div>

    </header>
  );
}