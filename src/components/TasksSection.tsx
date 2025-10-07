import { useZState } from "@/states";
import EditForm from "./EditForm";
import Task from "./Task";

export default function TasksSection() {
  const { tasks, filteredTasks } = useZState();

  const isFiltered = filteredTasks.length > 0 ? filteredTasks : tasks;

  return (
    <div className="flex flex-col gap-y-4 ltr:clear-right rtl:clear-left w-full my-2">
      {isFiltered.map((task, i) =>
        task.isEditing ? (
          <EditForm key={i} task={task} />
        ) : (
          <Task task={task} key={i} />
        )
      )}
    </div>
  );
}
