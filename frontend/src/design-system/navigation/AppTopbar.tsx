import { Bell, Menu } from "lucide-react";

interface AppTopbarProps {
  title: string;
}

export default function AppTopbar({
  title,
}: AppTopbarProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">

      <div className="flex items-center gap-4">

        <button className="rounded-lg p-2 hover:bg-slate-100">
          <Menu size={20} />
        </button>

        <h1 className="text-2xl font-semibold text-slate-900">
          {title}
        </h1>

      </div>

      <div className="flex items-center gap-6">

        <button className="relative rounded-lg p-2 hover:bg-slate-100">

          <Bell size={20} />

          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />

        </button>

        <div className="flex items-center gap-3">

          <div className="text-right">

            <p className="text-sm font-semibold">
              John Maina
            </p>

            <p className="text-xs text-slate-500">
              Compliance Officer
            </p>

          </div>

          <img
            src="/avatar.png"
            alt=""
            className="h-10 w-10 rounded-full"
          />

        </div>

      </div>

    </header>
  );
}