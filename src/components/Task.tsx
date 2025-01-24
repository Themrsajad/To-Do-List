import CheckIcon from "@mui/icons-material/Check";
import { useZState } from "../states";
import { Edit, Hashtag, RecordCircle } from "iconsax-react";
import { priorityNumToStr, TaskType } from "@/types";
import { differenceInDays, format } from "date-fns";
import { cn } from "@/lib/utils";
import colors from "../../colors";
import { useEffect } from "react";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

export default function Task({ task }: { task: TaskType }) {
  const {
    tasks,
    setTasks,
    setCompletedTasks,
    completedTasks,
    setTagsList,
    tagsList,
    isEnglish,
    isDark,
    isMobile,
  } = useZState();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleDone(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
    setCompletedTasks([
      ...completedTasks,
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
    setTagsList(
      tagsList.filter((tag) =>
        tasks.some(
          (task) => task.id !== id && task.tags.some((t) => t.tag === tag.tag)
        )
      )
    );
  }

  function handleEditInTask(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  }

  const today = new Date();
  const DaysLeft = differenceInDays(task.deadlineDate || today, today);
  const haveTags = task.tags.length > 0;

  return (
    <div className="my-2 sm:my-4 w-full">
      <div
        className={cn(
          "EACHTASK flex items-center h-10 sm:h-16 w-full gap-x-2",
          haveTags && "h-18 sm:h-24"
        )}
      >
        <div className="flex flex-col h-full flex-1 rounded-lg min-w-0">
          <div
            className={`TEXTPART h-11 sm:h-16 flex items-center justify-between px-2 sm:px-3 bg-cLight dark:bg-aDark/30 text-dLight dark:text-bDark text-base sm:text-lg font-medium indent-1 rounded-tr-sm rounded-tl-lg shadow-sm no-select ${
              !haveTags && "rounded-bl-lg rounded-br-sm"
            } ${haveTags && "rounded-b-none"}`}
          >
            <ScrollArea>
              <div className="fa flex items-center gap-x-2 sm:gap-x-4 font-semibold rtl:font-medium text-nowrap">
                {task.todo}
                {task.priority > 0 && (
                  <span className="flex justify-center items-center text-xs sm:text-sm px-1 sm:px-2 py-1 text-dLight dark:text-bDark bg-bLight dark:bg-cDark rounded-lg">
                    <RecordCircle
                      variant="Bold"
                      size={16}
                      color={
                        task.priority == 1
                          ? "#2196f3"
                          : task.priority == 2
                          ? "#ff9800"
                          : task.priority == 3
                          ? colors.red
                          : isDark
                          ? colors.bDark
                          : colors.cLight
                      }
                    />
                    <span className="fa hidden min-[367px]:block">
                      {priorityNumToStr(task.priority, isEnglish)}
                    </span>
                  </span>
                )}
              </div>
            </ScrollArea>
            {task.deadlineDate && (
              <span className="bg-bLight dark:bg-cDark text-red rounded-md py-1 text-xs sm:text-sm px-0.5 sm:px-2 ltr:font-semibold rtl:font-medium text-nowrap">
                {DaysLeft == 0 &&
                format(task.deadlineDate, "P") != format(today, "P")
                  ? Texts(textsList.task_tomorrow, isEnglish)
                  : format(task.deadlineDate, "P") == format(today, "P")
                  ? Texts(textsList.task_today, isEnglish)
                  : DaysLeft == 1
                  ? DaysLeft + Texts(textsList.task_dayleft, isEnglish)
                  : DaysLeft < 0
                  ? Texts(textsList.task_past, isEnglish)
                  : DaysLeft + Texts(textsList.task_daysleft, isEnglish)}
              </span>
            )}
          </div>
          <ScrollArea>
            {haveTags && (
              <div className="flex items-center bg-aLight/30 dark:bg-aDark/15 font-medium px-2 sm:px-3 gap-x-2 sm:gap-x-4 h-7 sm:h-10 text-[0.8rem] rounded-bl-lg rounded-br-sm ">
                {task.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-x-1 bg-cLight dark:bg-cDark text-dLight dark:text-bDark px-1 sm:px-2 py-0 sm:py-0.5 rounded-lg no-select"
                  >
                    <Hashtag
                      size={isMobile ? 12 : 14}
                      color={isDark ? colors.bDark : colors.dLight}
                    />
                    <span className="fa">{tag.tag}</span>
                  </span>
                ))}
              </div>
            )}
          </ScrollArea>
        </div>
        <Button
          onClick={() => handleEditInTask(task.id)}
          variant={"secondary"}
          size={"lg"}
          className="px-2 sm:px-4 flex-none rounded-sm"
        >
          <Edit
            color={isDark ? colors.bDark : colors.cLight}
            size={isMobile ? 18 : 24}
          />
        </Button>
        <Button
          onClick={() => handleDone(task.id)}
          size={"lg"}
          className="px-2 sm:px-4 ltr:rounded-r-lg rtl:rounded-r-sm ltr:rounded-l-sm rtl:rounded-l-lg"
        >
          <CheckIcon
            sx={{
              color: isDark ? colors.cDark : colors.bLight,
              fontSize: isMobile ? 20 : 30,
            }}
          />
        </Button>
      </div>
    </div>
  );
}
