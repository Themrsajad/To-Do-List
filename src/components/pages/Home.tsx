import { useZState } from "@/states.ts";
import Form from "../Form.tsx";
import TagSection from "../TagSection.tsx";
import FilterByTag from "../FilterByTag.tsx";
import SortSection from "../SortSection.tsx";
import FloatingButton from "../FloatingButton.tsx";
import Title from "../Title.tsx";
import ThemeSwitcher from "../ThemeSwitcher.tsx";
import { Texts } from "@/texts.ts";
import LanguageSwitcher from "../LanguageSwitcher.tsx";
import { textsList } from "@/textsList.ts";
import TasksSection from "../TasksSection.tsx";
import MobileOptionsBar from "../MobileOptionsBar.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CompletedTasksSection from "../CompletedTasksSection.tsx";
import { cn } from "@/lib/utils.ts";

export default function Home() {
  const { tasks, isEnglish, isMobile, completedTasks } = useZState();

  function isFilterByTagAvailable() {
    let tagCount = 0;
    tasks.forEach((task) => (task.tags.length > 0 ? tagCount++ : ""));
    return tagCount;
  }

  return (
    <div className="relative w-[90vw] sm:w-[95vw] mx-auto pb-40">
      <Title>{Texts(textsList.heading_mainTitle, isEnglish)}</Title>
      <div
        className={cn(
          "flex items-center sm:rtl:flex-row-reverse gap-x-2 absolute ltr:right-0 top-6 sm:top-10",
          isMobile && "rtl:left-0"
        )}
      >
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col gap-y-2">
        <Form />
        {!isMobile && <TagSection />}
        {isMobile && <MobileOptionsBar />}
      </div>
      {!isMobile && (
        <div className="flex items-center gap-x-10 ltr:float-right rtl:float-left text-dLight dark:text-bDark font-semibold rtl:font-medium text-sm mb-2 mt-8">
          {isFilterByTagAvailable() > 0 && <FilterByTag />}
          {tasks.length > 0 && <SortSection />}
        </div>
      )}
      {(tasks.length > 0 || completedTasks.length > 0) && isMobile && (
        <Tabs defaultValue="tasks" className="w-full *:w-full">
          <TabsList className="w-full *:w-1/2 ">
            <TabsTrigger value="tasks">
              {Texts(textsList.task_tasks, isEnglish)}
            </TabsTrigger>
            <TabsTrigger value="completed">
              {Texts(textsList.form_completed, isEnglish)}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tasks">
            <div className="flex items-center gap-x-2 gap-y-2 py-2 flex-wrap">
              <FilterByTag />
              <SortSection />
            </div>
            <TasksSection />
          </TabsContent>
          <TabsContent value="completed">
            <CompletedTasksSection />
          </TabsContent>
        </Tabs>
      )}
      {!isMobile && <TasksSection />}
      {!isMobile && (
        <FloatingButton to="/completed">
          {Texts(textsList.floatedButton_completed, isEnglish)}
        </FloatingButton>
      )}
    </div>
  );
}
