import CheckIcon from "@mui/icons-material/Check";
import { useZState } from "../states";
import { Edit, Hashtag, RecordCircle } from "iconsax-react";
import { priorityNumToStr, TaskType } from "@/types";
import { differenceInDays, format } from "date-fns";
import { cn } from "@/lib/utils";
import { colors } from "./pages/home";

export default function Task({ task }: { task: TaskType }) {
  const { tasks, setTasks, setCompletedTasks, completedTasks } = useZState();

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
        <div className="flex flex-col h-full mr-2 flex-1">
          <div
            className={`TEXTPART h-16 flex items-center justify-between px-3 w-full bg-c text-lg font-medium text-d indent-1 rounded-tr-sm rounded-tl-lg ${
              !haveTags && "rounded-bl-lg rounded-br-sm"
            } ${haveTags && "rounded-b-none"} no-select`}
          >
            <div className="flex items-center gap-x-4 font-semibold">
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
                  ? "Tomorrow"
                  : format(task.deadlineDate, "P") == format(today, "P")
                  ? "Today"
                  : DaysLeft == 1
                  ? DaysLeft + " Day left"
                  : DaysLeft < 0
                  ? "it's past"
                  : DaysLeft + " Days left"}
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
          className="EDIT h-full bg-c px-4 mr-2 flex-none rounded-sm"
        >
          <Edit color={colors.d} />
        </button>
        <button
          onClick={() => handleDone(task.id)}
          className="DONE h-full bg-d px-4 rounded-r-lg rounded-l-sm"
        >
          <CheckIcon sx={{ color: colors.b, fontSize: 30 }} />
        </button>
      </div>
    </div>
  );
}
