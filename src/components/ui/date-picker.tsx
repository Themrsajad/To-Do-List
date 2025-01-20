import { format } from "date-fns";
import { Calendar as CalendarSax } from "iconsax-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useZState } from "@/states";

export function DatePickerDemo() {
  const { deadlineDate, setDeadlineDate } = useZState();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={`flex items-center gap-x-2 font-[Quicksand] font-semibold rtl:font-medium bg-aLight dark:bg-aDark h-full px-4 rounded-lg shadow-sm hover:brightness-95 mr-2 rtl:ml-2 transition duration-100 outline-hidden ${
            deadlineDate && "w-[9.7rem]"
          }`}
        >
          <CalendarSax />
          {deadlineDate && format(deadlineDate, "P")}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-0">
        <Calendar
          mode="single"
          selected={deadlineDate}
          onSelect={setDeadlineDate}
          initialFocus
          className="bg-cLight dark:bg-aDark30 text-dLight dark:text-bDark rounded-lg"
        />
      </PopoverContent>
    </Popover>
  );
}
