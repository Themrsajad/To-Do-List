import { Texts } from "@/texts";
import { DropdownMenuCheckboxes } from "./ui/dropdown-menu-multiple";
import { textsList } from "@/textsList";
import { useZState } from "@/states";

export default function SelectCategories() {
  const { isEnglish } = useZState();
  return (
    <div className="pl-2 flex items-center gap-x-2">
      <span className="text-d font font-semibold rtl:font-medium text-sm ">
        {Texts(textsList.form_categorySelect, isEnglish)}
      </span>
      <DropdownMenuCheckboxes />
    </div>
  );
}
