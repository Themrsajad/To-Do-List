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

export default function Home() {
  const { tasks, filteredTasks, isEnglish } = useZState();

  function isFilterByTagAvailable() {
    let tagCount = 0;
    tasks.forEach((task) => (task.tags.length > 0 ? tagCount++ : ""));
    return tagCount;
  }

  const isFiltered = filteredTasks.length > 0 ? filteredTasks : tasks;

  return (
    <div className="relative w-[95vw] mx-auto pb-40">
      <Title>{Texts(textsList.heading_mainTitle, isEnglish)}</Title>
      <div className="flex items-center rtl:flex-row-reverse gap-x-2 absolute right-0 top-10">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col gap-y-2">
        <Form />
        <TagSection />
      </div>
      <div className="flex items-center gap-x-10 ltr:float-right rtl:float-left text-dLight dark:text-bDark font-semibold rtl:font-medium text-sm mb-2 mt-8">
        {isFilterByTagAvailable() > 0 && <FilterByTag />}
        {tasks.length > 0 && <SortSection />}
      </div>
      <div className="flex flex-col ltr:clear-right rtl:clear-left">
        {isFiltered.map((task, i) =>
          task.isEditing ? (
            <EditForm key={i} task={task} />
          ) : (
            <Task task={task} key={i} />
          )
        )}
      </div>
      <FloatingButton to="/completed">
        {Texts(textsList.floatedButton_completed, isEnglish)}
      </FloatingButton>
    </div>
  );
}
