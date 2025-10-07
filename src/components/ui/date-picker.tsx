import { format } from "date-fns";
import { Calendar as CalendarSax } from "iconsax-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useZState } from "@/states";
import { Button } from "./button";
import colors from "../../../colors";

export function DatePickerDemo() {
  const { deadlineDate, setDeadlineDate, isDark } = useZState();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size={"lg"}
          variant={"mobile"}
          className={`font-[Quicksand] px-4 sm:mr-2 rtl:sm:ml-2 text-sm sm:text-base size-12 sm:h-full sm:w-auto ${
            deadlineDate && "w-[8rem] sm:w-[9.7rem] bg-aLight dark:bg-aDark"
          }`}
        >
          <CalendarSax
            size={24}
            variant="Bold"
            color={
              deadlineDate
                ? isDark
                  ? colors.bDark
                  : colors.bLight
                : isDark
                ? colors.aDark
                : colors.aLight
            }
          />
          {deadlineDate && format(deadlineDate, "P")}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-0">
        <Calendar
          mode="single"
          selected={deadlineDate}
          onSelect={setDeadlineDate}
          initialFocus
          className="bg-cLight dark:bg-aDark text-dLight dark:text-bDark rounded-lg shadow-md"
        />
      </PopoverContent>
    </Popover>
  );
}
