import { useZState } from "@/states";
import { TaskType } from "@/types";
import colors from "../../colors";
import { ArrowForward } from "iconsax-react";
import { Trash2 } from "lucide-react";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

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
    <div className="w-full sm:w-[95vw] sm:mx-auto my-2 sm:my-4 flex items-center gap-x-2 h-10 sm:h-16 font-semibold rtl:font-medium">
      <ScrollArea className="h-full flex-1">
        <div className="h-10 flex items-center px-3 sm:px-4 text-base sm:text-lg bg-dLight/10 text-dLight/50 dark:bg-bDark/10 dark:text-bDark/50 ltr:rounded-r-sm rtl:rounded-l-sm ltr:rounded-l-lg rtl:rounded-r-lg text-nowrap no-select">
          <span className="fa">{task.todo}</span>
        </div>
      </ScrollArea>
      <Button
        onClick={() => handleRemove(task.id)}
        variant={"red"}
        size={"lg"}
        className="px-2 sm:px-4 rounded-sm"
      >
        <Trash2
          size={isMobile ? 18 : 24}
          color={isDark ? colors.bDark : colors.bLight}
        />
      </Button>
      <Button
        onClick={() => handleRevert(task.id)}
        size={"lg"}
        className="px-2 sm:px-4 text-xs sm:text-lg ltr:rounded-r-lg rtl:rounded-r-sm ltr:rounded-l-sm rtl:rounded-l-lg"
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
