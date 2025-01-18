import { useZState } from "@/states";
import FloatingButton from "../FloatingButton";
import Title from "../Title";
import CompletedTask from "../CompletedTask";
import { Texts, textsList } from "@/texts";

export default function Completed() {
  const { completedTasks } = useZState();
  return (
    <div>
      <Title>{Texts(textsList.heading_completedTitle)}</Title>
      {completedTasks.length > 0 ? (
        <div className="flex flex-col">
          {completedTasks.map((task, i) => (
            <CompletedTask task={task} key={i} />
          ))}
        </div>
      ) : (
        <div className="text-d/60 font-semibold flex justify-center no-select">
          {Texts(textsList.completedPage_paragraph)}
        </div>
      )}
      <FloatingButton to="/">
        {Texts(textsList.floatedButton_returnHome)}
      </FloatingButton>
    </div>
  );
}
