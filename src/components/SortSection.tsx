import { useZState } from "@/states";
import { SortByDropdown } from "./SortByDropdown";
import { ArrowDown } from "iconsax-react";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";

export default function SortSection() {
  const { isAscending, setIsAscending,isEnglish } = useZState();
  return (
    <div className="*:bg-a flex items-center gap-x-2 *:py-2 *:px-3 *:rounded-lg *:shadow-xs *:hover:brightness-95 *:outline-hidden no-select">
      {Texts(textsList.sort_sortBy, isEnglish)}
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
