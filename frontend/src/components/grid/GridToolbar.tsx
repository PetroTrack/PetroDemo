import { Search } from "lucide-react";

interface Props {
    value: string;
    onChange: (value: string) => void;
    children?: React.ReactNode;
}

export default function GridToolbar({
    value,
    onChange,
    children,
}: Props) {

    return (

        <div className="mb-5 flex items-center justify-between">

            <div className="relative w-80">

                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search..."
                    className="w-full rounded-lg border border-slate-300 py-2 pl-10 pr-4 outline-none focus:border-blue-600"
                />

            </div>

            {children}

        </div>

    );

}