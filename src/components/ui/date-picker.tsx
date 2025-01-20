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

export function DatePickerDemo() {
  const { deadlineDate, setDeadlineDate } = useZState();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size={"lg"}
          variant={"secondary"}
          className={`font-[Quicksand] px-4 mr-2 rtl:ml-2 text-base ${
            deadlineDate && "w-[9.7rem]"
          }`}
        >
          <CalendarSax />
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
