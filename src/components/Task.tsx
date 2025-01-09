import CheckIcon from "@mui/icons-material/Check";
import { useZState } from "../states";
import { Edit, RecordCircle } from "iconsax-react";
import { TaskType } from "@/types";
import { colors } from "@/App";
import { differenceInDays, format } from "date-fns";

export default function Task({ task }: { task: TaskType }) {
  const { tasks, setTasks } = useZState();

  function handleDone(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleEditInTask(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  }
  const today = new Date();
  const DaysLeft = differenceInDays(task.date || today, today);
  return (
    <div className="EACHTASK flex my-2 h-12">
      <div className="TEXTPART h-full flex flex-row items-center justify-between bg-c text-lg font-medium px-3 mr-2 text-d indent-1 flex-1 rounded-l-lg rounded-r-sm no-select">
        <div className="flex gap-x-4">
          {task.todo}
          {task.flag && (
            <span className="flex flex-row justify-center items-center text-sm font-semibold p-1 bg-b rounded-lg">
              <RecordCircle
                variant="Bold"
                size={16}
                color={
                  task.flag == "Low"
                    ? "#2196f3"
                    : task.flag == "Medium"
                    ? "#ff9800"
                    : task.flag == "High"
                    ? colors.red
                    : colors.d
                }
              />
              {task.flag}
            </span>
          )}
        </div>
        {task.date && (
          <span className="bg-red text-white rounded-md px-2 py-1 text-sm">
            {DaysLeft == 0 && format(task.date, "P") != format(today, "P")
              ? "Tomorrow"
              : format(task.date, "P") == format(today, "P")
              ? "Today"
              : DaysLeft == 1
              ? DaysLeft + " Day left"
              : DaysLeft < 0
              ? "it's past"
              : DaysLeft + " Days left"}
          </span>
        )}
      </div>
      <button
        onClick={() => handleEditInTask(task.id)}
        className="EDIT h-full bg-c px-3 mr-2 flex-none rounded-sm"
      >
        <Edit color={colors.d} />
      </button>
      <button
        onClick={() => handleDone(task.id)}
        className="DONE h-full bg-d px-3 rounded-r-lg rounded-l-sm"
      >
        <CheckIcon sx={{ color: colors.b, fontSize: 30 }} />
      </button>
    </div>
  );
}
