import { useZState } from "@/states.ts";
import Form from "../Form.tsx";
import TagSection from "../TagSection.tsx";
import FilterByTag from "../FilterByTag.tsx";
import SortSection from "../SortSection.tsx";
import EditForm from "../EditForm.tsx";
import Task from "../Task.tsx";
import FloatingButton from "../FloatingButton.tsx";
import Title from "../Title.tsx";
import ThemeSwitcher from "../ThemeSwitcher.tsx";
import { Texts } from "@/texts.ts";
import LanguageSwitcher from "../LanguageSwitcher.tsx";
import { textsList } from "@/textsList.ts";
import { DatePickerDemo as Reminder } from "../ui/date-picker.tsx";
import { Button } from "../ui/button.tsx";
import { TickSquare } from "iconsax-react";
import { Link } from "react-router-dom";
import MobileCategoryDrawer from "../MobileCategoryDrawer.tsx";
import PriorityDropdown from "../PriorityDropdown.tsx";
import colors from "../../../colors";

export default function Home() {
  const { tasks, filteredTasks, isEnglish, isMobile, isDark } = useZState();

  function isFilterByTagAvailable() {
    let tagCount = 0;
    tasks.forEach((task) => (task.tags.length > 0 ? tagCount++ : ""));
    return tagCount;
  }

  const isFiltered = filteredTasks.length > 0 ? filteredTasks : tasks;

  return (
    <div className="relative w-[90vw] sm:w-[95vw] mx-auto pb-40">
      <Title>{Texts(textsList.heading_mainTitle, isEnglish)}</Title>
      <div className="flex items-center rtl:flex-row-reverse gap-x-2 absolute right-0 top-6 sm:top-10">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col gap-y-2">
        <Form />
        {!isMobile && <TagSection />}
        {isMobile && (
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
            <Link to="/completed" className="flex flex-col items-center gap-1">
              <Button
                size={"lg"}
                variant={"mobile"}
                className="font-[Quicksand] px-4 sm:mr-2 rtl:ml-2 text-base size-12 sm:h-full sm:w-auto"
              >
                <TickSquare
                  size={24}
                  variant="Bold"
                  color={isDark ? colors.aDark : colors.aLight}
                />
              </Button>
              <span className="text-xs font-medium text-dLight dark:text-bDark">
                {Texts(textsList.form_completed, isEnglish)}
              </span>
            </Link>
          </div>
        )}
      </div>
      {!isMobile && (
        <div className="flex items-center gap-x-10 ltr:float-right rtl:float-left text-dLight dark:text-bDark font-semibold rtl:font-medium text-sm mb-2 mt-8">
          {isFilterByTagAvailable() > 0 && <FilterByTag />}
          {tasks.length > 0 && <SortSection />}
        </div>
      )}
      <div className="flex flex-col ltr:clear-right rtl:clear-left">
        {isFiltered.map((task, i) =>
          task.isEditing ? (
            <EditForm key={i} task={task} />
          ) : (
            <Task task={task} key={i} />
          )
        )}
      </div>
      {!isMobile && (
        <FloatingButton to="/completed">
          {Texts(textsList.floatedButton_completed, isEnglish)}
        </FloatingButton>
      )}
    </div>
  );
}
