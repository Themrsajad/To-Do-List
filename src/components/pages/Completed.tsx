import { useZState } from "@/states";
import FloatingButton from "../FloatingButton";
import Title from "../Title";
import CompletedTask from "../CompletedTask";

export default function Completed() {
  const { completedTasks } = useZState();
  return (
    <div>
      <Title>Completed Tasks</Title>
      {completedTasks.length > 0 ? (
        <div className="flex flex-col">
          {completedTasks.map((task, i) => (
            <CompletedTask task={task} key={i} />
          ))}
        </div>
      ) : (
        <div className="text-d/60 font-semibold flex justify-center">
          You haven't completed any tasks yet. Start achieving your goals!
        </div>
      )}
      <FloatingButton to="/">Return to Home</FloatingButton>
    </div>
  );
}
