import { Texts } from "@/texts";
import { FilterByCategoryDropdown } from "./FilterByCategoryDropdown";
import { textsList } from "@/textsList";
import { useZState } from "@/states";

export default function FilterByTag() {
  const { isEnglish } = useZState();

  return (
    <div className="*:bg-a flex items-center gap-x-2 *:py-2 *:px-3 *:rounded-lg *:shadow-sm hover:*:brightness-95 *:outline-none no-select">
      {Texts(textsList.filter_filterByCategory, isEnglish)}
      <FilterByCategoryDropdown />
    </div>
  );
}
