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
        <div className="flex flex-col h-full ltr:mr-2 flex-1">
          <div
            className={`TEXTPART h-16 flex items-center justify-between px-3 w-full bg-c text-lg font-medium text-d indent-1 rounded-tr-sm rounded-tl-lg ${
              !haveTags && "rounded-bl-lg rounded-br-sm"
            } ${haveTags && "rounded-b-none"} no-select`}
          >
            <div className="flex items-center gap-x-4 font-semibold rtl:font-medium">
              {task.todo}
              {task.priority > 0 && (
                <span className="flex flex-row justify-center items-center text-sm p-1 bg-b rounded-lg">
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
                        : colors.d
                    }
                  />
                  {priorityNumToStr(task.priority)}
                </span>
              )}
            </div>
            {task.deadlineDate && (
              <span className="bg-red text-white rounded-md px-2 py-1 text-sm">
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
            <div className="flex items-center text-d font-medium px-3 gap-x-4 h-10 bg-white/40 text-[0.8rem] rounded-bl-lg rounded-br-sm">
              {task.tags.map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center bg-white px-2 py-0.5 rounded-lg"
                >
                  <Hashtag size={14} />
                  <span>{tag.tag}</span>
                </span>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={() => handleEditInTask(task.id)}
          className="EDIT h-full bg-c px-4 mr-2 rtl:ml-2 flex-none rounded-sm"
        >
          <Edit color={colors.d} />
        </button>
        <button
          onClick={() => handleDone(task.id)}
          className="DONE h-full bg-d px-4 ltr:rounded-r-lg rtl:rounded-r-sm ltr:rounded-l-sm rtl:rounded-l-lg"
        >
          <CheckIcon sx={{ color: colors.b, fontSize: 30 }} />
        </button>
      </div>
    </div>
  );
}
