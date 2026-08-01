import { ChevronRight } from "lucide-react";

interface AppBreadcrumbProps {
  items: string[];
}

export default function AppBreadcrumb({
  items,
}: AppBreadcrumbProps) {
  return (
    <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">

      {items.map((item, index) => (
        <div
          key={item}
          className="flex items-center gap-2"
        >
          <span>{item}</span>

          {index < items.length - 1 && (
            <ChevronRight size={14} />
          )}
        </div>
      ))}

    </div>
  );
}