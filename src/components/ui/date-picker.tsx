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
  const { date, setDate } = useZState();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={`flex items-center gap-x-2 font-semibold bg-a text-d h-full px-4 rounded-lg shadow-sm hover:bg-d hover:text-a mr-2 transition duration-100 ${
            date && "w-[9.7rem]"
          }`}
        >
          <CalendarSax />
          {date && format(date, "P")}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="bg-a rounded-lg text-d"
        />
      </PopoverContent>
    </Popover>
  );
}
