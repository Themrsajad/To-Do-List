import { DatePickerDemo as Reminder } from "./ui/date-picker.tsx";
import MobileCategoryDrawer from "./MobileCategoryDrawer.tsx";
import PriorityDropdown from "./PriorityDropdown.tsx";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import { useZState } from "@/states.ts";

export default function MobileOptionsBar() {
  const { isEnglish } = useZState();
  return (
    <div className="w-full flex items-center justify-around py-6">
      <div className="flex flex-col items-center gap-1">
        <Reminder />
        <span className="text-xs font-medium text-dLight dark:text-bDark">
          {Texts(textsList.form_reminder, isEnglish)}
        </span>
      </div>
      <MobileCategoryDrawer />
      <div className="flex flex-col items-center gap-1">
        <PriorityDropdown />
        <span className="text-xs font-medium text-dLight dark:text-bDark">
          {Texts(textsList.form_priority, isEnglish)}
        </span>
      </div>
    </div>
  );
}
