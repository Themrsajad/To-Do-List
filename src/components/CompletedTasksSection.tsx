import { useZState } from "@/states";
import CompletedTask from "./CompletedTask";
import { textsList } from "@/textsList";
import { Texts } from "@/texts";

export default function CompletedTasksSection() {
  const { completedTasks, isEnglish } = useZState();

  return completedTasks.length > 0 ? (
    <div className="flex flex-col my-2 gap-y-4 w-full">
      {completedTasks.map((task, i) => (
        <CompletedTask task={task} key={i} />
      ))}
    </div>
  ) : (
    <div className="text-dLight/50 dark:text-bDark/50 font-semibold rtl:font-medium flex justify-center p-8 sm:p-0 no-select">
      {Texts(textsList.completedPage_paragraph, isEnglish)}
    </div>
  );
}
