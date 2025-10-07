import { Texts } from "@/texts";
import { FilterByCategoryDropdown } from "./FilterByCategoryDropdown";
import { textsList } from "@/textsList";
import { useZState } from "@/states";

export default function FilterByTag() {
  const { isEnglish } = useZState();

  return (
    <div className="flex items-center gap-x-2 *:py-2 *:px-3 *:rounded-lg *:shadow-xs *:outline-hidden no-select">
      <span className="shadow-none! p-0! hidden sm:block">
        {Texts(textsList.filter_filterByCategory, isEnglish)}
      </span>
      <FilterByCategoryDropdown />
    </div>
  );
}
