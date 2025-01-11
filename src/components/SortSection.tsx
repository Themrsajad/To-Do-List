import { useZState } from "@/states";
import { SortByDropdown } from "./SortByDropdown";
import { ArrowDown } from "iconsax-react";

export default function SortSection() {
  const { isAscending, setIsAscending } = useZState();
  return (
    <div className="*:bg-a flex items-center gap-x-2 *:py-2 *:px-3 *:rounded-lg *:shadow-sm mb-2 mt-6 hover:*:brightness-95 *:outline-none no-select">
      Sort by :
      <SortByDropdown />
      <button className="h-9" onClick={() => setIsAscending()}>
        {isAscending ? (
          <ArrowDown size={16} className="rotate-180" />
        ) : (
          <ArrowDown size={16} />
        )}
      </button>
    </div>
  );
}
