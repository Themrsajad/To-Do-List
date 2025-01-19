import { Texts, textsList } from "@/texts";
import { DropdownMenuCheckboxes } from "./ui/dropdown-menu-multiple";

export default function SelectCategories() {
  return (
    <div className="pl-2 flex items-center gap-x-2">
      <span className="text-d font font-semibold rtl:font-medium text-sm ">
        {Texts(textsList.form_categorySelect)}
      </span>
      <DropdownMenuCheckboxes />
    </div>
  );
}