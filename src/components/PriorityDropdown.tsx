import { RecordCircle } from "iconsax-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useZState } from "@/states";
import { priorityNumToStr } from "@/types";
import colors from "../../colors";
import { Texts, textsList } from "@/texts";

export default function PriorityDropdown() {
  const { priority, setPriority } = useZState();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="FLAG flex justify-center items-center absolute z-30 right-[0.7rem] h-3/5 px-2 gap-2 rounded-md hover:brightness-95 bg-a text-d text-sm outline-none"
        >
          <RecordCircle
            variant="Bold"
            size={16}
            color={
              priority == 1
                ? "#2196f3"
                : priority == 2
                ? "#ff9800"
                : priority == 3
                ? colors.red
                : colors.d
            }
          />
          {priority == 0
            ? Texts(textsList.form_priorityTitle)
            : priorityNumToStr(priority)}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-c text-d font-semibold border-0">
        <DropdownMenuGroup className="*:hover:cursor-pointer *:p-1.5 *:m-1">
          <DropdownMenuItem onClick={() => setPriority(1)}>
            <RecordCircle variant="Bold" color="#2196f3" size={16} />
            <span>{Texts(textsList.form_priorityLow)}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPriority(2)}>
            <RecordCircle variant="Bold" color="#ff9800" size={16} />
            <span>{Texts(textsList.form_priorityMedium)}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPriority(3)}>
            <RecordCircle variant="Bold" color={colors.red} size={16} />
            <span>{Texts(textsList.form_priorityHigh)}</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="bg-d/10 hover:!bg-d/15 flex justify-center"
            onClick={() => setPriority(0)}
          >
            <span>{Texts(textsList.form_priorityCancel)}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
