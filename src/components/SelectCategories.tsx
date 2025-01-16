import { DropdownMenuCheckboxes } from "./ui/dropdown-menu-multiple";

export default function SelectCategories() {
  return (
    <div className="pl-2 flex items-center gap-x-2">
      <span className="text-d font font-semibold text-sm ">Select : </span>
      <DropdownMenuCheckboxes />
    </div>
  );
}
