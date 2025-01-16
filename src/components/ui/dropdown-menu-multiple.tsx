import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useZState } from "@/states";
import { ArrowDown } from "iconsax-react";
import colors from "../../../colors";

export function DropdownMenuCheckboxes() {
  const { tagsList, checkedTags, setCheckedTags } = useZState();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none bg-a rounded-lg h-9 shadow-sm py-2 px-3">
          <ArrowDown size={16} color={colors.d} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-c outline-none border-0 text-d font-semibold">
        {tagsList.map((tag) => (
          <DropdownMenuCheckboxItem
            key={tag.id}
            checked={checkedTags.some((checkedTag) => checkedTag.id === tag.id)}
            onCheckedChange={(isChecked) => {
              if (isChecked) {
                setCheckedTags([...checkedTags, tag]);
              } else {
                setCheckedTags(
                  checkedTags.filter((checkedTag) => checkedTag.id !== tag.id)
                );
              }
            }}
          >
            {tag.tag}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
