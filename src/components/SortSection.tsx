import { useZState } from "@/states";
import { SortByDropdown } from "./SortByDropdown";
import { ArrowDown } from "iconsax-react";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import { Button } from "./ui/button";

export default function SortSection() {
  const { isAscending, setIsAscending, isEnglish } = useZState();
  return (
    <div className="flex items-center gap-x-2 *:py-2 *:px-3 *:rounded-lg *:shadow-xs *:outline-hidden no-select">
      <span className="shadow-none! p-0! hidden sm:block">
        {Texts(textsList.sort_sortBy, isEnglish)}
      </span>
      <SortByDropdown />
      <Button
        variant={"secondary"}
        className="h-9"
        onClick={() => setIsAscending()}
      >
        {isAscending ? (
          <ArrowDown size={16} className="rotate-180" />
        ) : (
          <ArrowDown size={16} />
        )}
      </Button>
    </div>
  );
}
