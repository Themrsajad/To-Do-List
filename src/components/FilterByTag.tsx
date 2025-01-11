import { FilterByCategoryDropdown } from "./FilterByCategoryDropdown";

export default function FilterByTag() {
  return (
    <div className="*:bg-a flex items-center gap-x-2 *:py-2 *:px-3 *:rounded-lg *:shadow-sm mb-2 mt-6 hover:*:brightness-95 *:outline-none no-select">
      Filter by Category :
      <FilterByCategoryDropdown />
    </div>
  );
}
