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
    <div className="my-4">
      <div
        className={cn("EACHTASK flex items-center h-16", haveTags && "h-24")}
      >
        <div
          className={cn(
            "flex flex-col h-full ltr:mr-2 flex-1 rounded-lg",
            haveTags && "shadow-sm dark:shadow-md"
          )}
        >
          <div
            className={`TEXTPART h-16 flex items-center justify-between px-3 w-full bg-cLight dark:bg-aDark/30 text-dLight dark:text-bDark text-lg font-medium indent-1 rounded-tr-sm rounded-tl-lg shadow-sm no-select ${
              !haveTags && "rounded-bl-lg rounded-br-sm"
            } ${haveTags && "rounded-b-none"}`}
          >
            <div className="flex items-center gap-x-4 font-semibold rtl:font-medium">
              {task.todo}
              {task.priority > 0 && (
                <span className="flex flex-row justify-center items-center text-sm px-2 py-1 text-dLight dark:text-bDark bg-bLight dark:bg-cDark rounded-lg">
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
                  {priorityNumToStr(task.priority, isEnglish)}
                </span>
              )}
            </div>
            {task.deadlineDate && (
              <span className="bg-bLight dark:bg-cDark text-red rounded-md px-2 py-1 text-sm ltr:font-semibold rtl:font-medium">
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
            <div className="flex items-center bg-aLight/30 dark:bg-aDark/15 font-medium px-3 gap-x-4 h-10 text-[0.8rem] rounded-bl-lg rounded-br-sm">
              {task.tags.map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-x-1 bg-cLight dark:bg-cDark text-dLight dark:text-bDark px-2 py-0.5 rounded-lg"
                >
                  <Hashtag
                    size={14}
                    color={isDark ? colors.bDark : colors.dLight}
                  />
                  <span>{tag.tag}</span>
                </span>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={() => handleEditInTask(task.id)}
          className="EDIT h-full bg-aLight dark:bg-aDark px-4 mr-2 rtl:ml-2 flex-none rounded-sm shadow-sm"
        >
          <Edit color={isDark ? colors.bDark : colors.cLight} />
        </button>
        <button
          onClick={() => handleDone(task.id)}
          className="DONE h-full bg-dLight dark:bg-bDark px-4 ltr:rounded-r-lg rtl:rounded-r-sm ltr:rounded-l-sm rtl:rounded-l-lg shadow-sm"
        >
          <CheckIcon
            sx={{ color: isDark ? colors.cDark : colors.bLight, fontSize: 30 }}
          />
        </button>
      </div>
    </div>
  );
}
