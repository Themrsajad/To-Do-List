import { useZState } from "@/states";
import { TaskType } from "@/types";
import colors from "../../colors";
import { ArrowForward } from "iconsax-react";
import { Trash2 } from "lucide-react";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import { Button } from "./ui/button";

export default function CompletedTask({ task }: { task: TaskType }) {
  const {
    tasks,
    setTasks,
    setCompletedTasks,
    completedTasks,
    isEnglish,
    isDark,
    isMobile,
  } = useZState();

  function handleRevert(id: string) {
    setCompletedTasks(completedTasks.filter((task) => task.id !== id));
    setTasks([
      ...tasks,
      {
        id: id,
        todo: task.todo,
        priority: task.priority,
        tags: task.tags,
        deadlineDate: task.deadlineDate,
        dateAdded: new Date(),
        isEditing: false,
      },
    ]);
  }

  function handleRemove(id: string) {
    setCompletedTasks(completedTasks.filter((task) => task.id !== id));
  }

  return (
    <div
      dir={isEnglish ? "ltr" : "rtl"}
      className="w-full sm:w-[95vw] sm:mx-auto grid grid-cols-9 lg:grid-cols-22 justify-items-stretch gap-1 sm:gap-2 h-fit font-semibold rtl:font-medium"
    >
      <div className="col-span-5 lg:col-span-18 h-fit flex items-center p-3 sm:p-4 text-base sm:text-lg bg-dLight/10 text-dLight/50 dark:bg-bDark/10 dark:text-bDark/50 ltr:rounded-r-sm ltr:rounded-l-lg rtl:rounded-l-sm rtl:rounded-r-lg text-wrap no-select">
        <span className="fa">{task.todo}</span>
      </div>
      <Button
        onClick={() => handleRemove(task.id)}
        variant={"red"}
        size={"lg"}
        className="rounded-sm col-span-1"
      >
        <Trash2
          size={isMobile ? 18 : 24}
          color={isDark ? colors.bDark : colors.bLight}
        />
      </Button>
      <Button
        onClick={() => handleRevert(task.id)}
        size={"lg"}
        className="text-sm sm:text-lg ltr:rounded-r-lg rtl:rounded-r-sm ltr:rounded-l-sm rtl:rounded-l-lg col-span-3"
      >
        <span>{Texts(textsList.completedPage_revert, isEnglish)}</span>
        <ArrowForward
          size={isMobile ? 16 : 24}
          className="rotate-180 rtl:scale-x-[-1]"
        />
      </Button>
    </div>
  );
}
