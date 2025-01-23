import { Flag, RecordCircle } from "iconsax-react";
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
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function PriorityDropdown() {
  const { priority, setPriority, isEnglish, isDark, isMobile } = useZState();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {isMobile ? (
          <Button
            size={"lg"}
            variant={"mobile"}
            className={cn(
              "font-[Quicksand] px-4 sm:mr-2 rtl:ml-2 text-base size-12 sm:h-full sm:w-auto",
              priority > 0 && "bg-bLight dark:bg-aDark"
            )}
          >
            <div
              className={cn(
                priority > 0 &&
                  "bg-cLight dark:bg-bDark p-[0.2rem] rounded-lg"
              )}
            >
              <Flag
                size={24}
                variant="Bold"
                color={
                  priority == 1
                    ? "#2196f3"
                    : priority == 2
                    ? "#ff9800"
                    : priority == 3
                    ? colors.red
                    : isDark
                    ? colors.aDark
                    : colors.aLight
                }
              />
            </div>
          </Button>
        ) : (
          <Button
            type="button"
            variant={"secondary"}
            className="absolute z-30 ltr:right-[0.7rem] rtl:left-[0.7rem]"
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
                  : isDark
                  ? colors.bDark
                  : colors.cLight
              }
            />
            <span>
              {priority == 0
                ? Texts(textsList.form_priorityTitle, isEnglish)
                : priorityNumToStr(priority, isEnglish)}
            </span>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-cLight dark:bg-aDark text-dLight dark:text-bDark font-semibold rtl:font-medium border-0 text-sm">
        <DropdownMenuGroup className="hover:*:cursor-pointer *:p-1.5 *:m-1">
          <DropdownMenuItem onClick={() => setPriority(1)}>
            <RecordCircle variant="Bold" color="#2196f3" size={16} />
            <span className="fa">
              {Texts(textsList.form_priorityLow, isEnglish)}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPriority(2)}>
            <RecordCircle variant="Bold" color="#ff9800" size={16} />
            <span className="fa">
              {Texts(textsList.form_priorityMedium, isEnglish)}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPriority(3)}>
            <RecordCircle variant="Bold" color={colors.red} size={16} />
            <span className="fa">
              {Texts(textsList.form_priorityHigh, isEnglish)}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="bg-aLight/15 dark:bg-bDark/10 flex justify-center"
            onClick={() => setPriority(0)}
          >
            <span className="fa">
              {Texts(textsList.form_priorityCancel, isEnglish)}
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
