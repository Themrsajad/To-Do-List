import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useZState } from "@/states";
import { ArrowDown } from "iconsax-react";
import colors from "../../../colors";
import { Button } from "./button";

export function DropdownMenuCheckboxes() {
  const { tagsList, checkedTags, setCheckedTags, isDark } = useZState();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"secondary"} className="h-9">
          <ArrowDown size={16} color={isDark ? colors.bDark : colors.cLight} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-cLight dark:bg-aDark text-dLight dark:text-bDark outline-hidden border-0 font-semibold rtl:font-medium">
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
