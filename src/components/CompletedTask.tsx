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
    <div className="w-[95vw] mx-auto my-4 flex items-center gap-x-2 h-16 font-semibold rtl:font-medium">
      <div className="h-full flex items-center flex-1 px-4 text-lg bg-dLight/10 text-dLight/50 dark:bg-bDark/10 dark:text-bDark/50 ltr:rounded-r-sm rtl:rounded-l-sm ltr:rounded-l-lg rtl:rounded-r-lg no-select">
        {task.todo}
      </div>
      <Button
        onClick={() => handleRemove(task.id)}
        variant={"red"}
        size={"lg"}
        className="px-4 rounded-sm"
      >
        <Trash2 color={isDark ? colors.bDark : colors.cLight} />
      </Button>
      <Button
        onClick={() => handleRevert(task.id)}
        size={"lg"}
        className="px-4 ltr:rounded-r-lg rtl:rounded-r-sm ltr:rounded-l-sm rtl:rounded-l-lg"
      >
        {Texts(textsList.completedPage_revert, isEnglish)}
        <ArrowForward size={16} className="rotate-180 rtl:scale-x-[-1]" />
      </Button>
    </div>
  );
}
