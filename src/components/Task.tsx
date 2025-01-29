import CheckIcon from "@mui/icons-material/Check";
import { useZState } from "../states";
import { Edit, Hashtag, RecordCircle } from "iconsax-react";
import { priorityNumToStr, TaskType } from "@/types";
import { differenceInDays, format } from "date-fns";
import colors from "../../colors";
import { useEffect } from "react";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import { Button } from "./ui/button";

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
    <div className="w-full">
      <div
        dir={isEnglish ? "ltr" : "rtl"}
        className="EACHTASK grid grid-cols-9 lg:grid-cols-22 justify-items-stretch h-fit w-full gap-x-1 sm:gap-x-2"
      >
        <div className="col-span-7 lg:col-span-20 flex flex-col h-fit rounded-lg min-w-0">
          <div
            className={`TEXTPART min-h-11 h-fit sm:min-h-16 flex items-center justify-between px-2 sm:px-3 bg-cLight dark:bg-aDark/30 text-dLight dark:text-bDark text-base sm:text-lg font-medium indent-1 ltr:rounded-tr-sm rtl:rounded-tr-lg ltr:rounded-tl-lg rtl:rounded-tl-sm shadow-sm no-select ${
              !haveTags &&
              "ltr:rounded-bl-lg rtl:rounded-bl-sm ltr:rounded-br-sm rtl:rounded-br-lg"
            } ${haveTags && "rounded-b-none"}`}
          >
            <div className="flex flex-col items-start py-4 gap-y-2 font-semibold rtl:font-medium ltr:text-left rtl:text-right h-fit">
              {task.todo}
              {task.priority > 0 && (
                <span className="flex justify-center items-center text-[0.7rem] sm:text-sm px-1 sm:px-2 py-1 text-dLight dark:text-bDark bg-bLight dark:bg-cDark rounded-lg">
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
                  <span className="hidden min-[367px]:block">
                    {priorityNumToStr(task.priority, isEnglish)}
                  </span>
                </span>
              )}
            </div>
            {task.deadlineDate && (
              <span className="bg-bLight dark:bg-cDark text-red rounded-md py-1 text-[0.7rem] sm:text-sm px-1 sm:px-2 ltr:font-semibold rtl:font-medium text-nowrap">
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
          {haveTags && (
            <div className="flex items-center flex-wrap bg-aLight/30 dark:bg-aDark/15 font-medium p-2 sm:p-3 gap-2 sm:gap-4 h-fit text-[0.7rem] sm:text-[0.8rem] ltr:rounded-bl-lg rtl:rounded-bl-sm ltr:rounded-br-sm rtl:rounded-br-lg">
              {task.tags.map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-x-1 bg-cLight dark:bg-cDark text-dLight dark:text-bDark px-1 sm:px-2 py-1 rounded-lg no-select"
                >
                  <Hashtag
                    size={isMobile ? 12 : 14}
                    color={isDark ? colors.bDark : colors.dLight}
                  />
                  <span>{tag.tag}</span>
                </span>
              ))}
            </div>
          )}
        </div>
        <Button
          onClick={() => handleEditInTask(task.id)}
          variant={"secondary"}
          size={"lg"}
          className="px-2 sm:px-4 flex-none rounded-sm col-span-1"
        >
          <Edit
            color={isDark ? colors.bDark : colors.cLight}
            size={isMobile ? 18 : 24}
          />
        </Button>
        <Button
          onClick={() => handleDone(task.id)}
          size={"lg"}
          className="col-span-1 px-2 sm:px-4 ltr:rounded-r-lg ltr:rounded-l-sm rtl:rounded-r-sm rtl:rounded-l-lg"
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
