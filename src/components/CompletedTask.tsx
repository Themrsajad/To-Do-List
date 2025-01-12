import { useZState } from "@/states";
import { TaskType } from "@/types";
import { ArrowForward } from "iconsax-react";

export default function CompletedTask({ task }: { task: TaskType }) {
  const { tasks, setTasks, setCompletedTasks, completedTasks } = useZState();

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

  return (
    <div className="w-[95vw] mx-auto my-4 flex items-center h-16 font-semibold">
      <div className="h-full flex items-center mr-2 flex-1 px-4 bg-white/70  text-lg text-d rounded-r-sm rounded-l-lg no-select">
        {task.todo}
      </div>
      <button
        onClick={() => handleRevert(task.id)}
        className="flex items-center gap-x-2 h-full text-white bg-d px-4 rounded-r-lg rounded-l-sm hover:brightness-90"
      >
        Revert
        <ArrowForward size={16} className="rotate-180" />
      </button>
    </div>
  );
}
