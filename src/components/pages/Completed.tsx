import { useZState } from "@/states";
import FloatingButton from "../FloatingButton";
import Title from "../Title";
import CompletedTask from "../CompletedTask";

export default function Completed() {
  const { completedTasks } = useZState();
  return (
    <div>
      <Title>Completed Tasks</Title>
      <div className="flex flex-col">
        {completedTasks.map((task, i) => (
          <CompletedTask task={task} key={i} />
        ))}
      </div>

      <FloatingButton to="/">Return to Home</FloatingButton>
    </div>
  );
}
