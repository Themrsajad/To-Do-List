import { useZState } from "@/states";
import FloatingButton from "../FloatingButton";
import Title from "../Title";
import CompletedTask from "../CompletedTask";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";

export default function Completed() {
  const { completedTasks, isEnglish } = useZState();
  return (
    <div className="pb-40">
      <Title>{Texts(textsList.heading_completedTitle, isEnglish)}</Title>
      {completedTasks.length > 0 ? (
        <div className="flex flex-col">
          {completedTasks.map((task, i) => (
            <CompletedTask task={task} key={i} />
          ))}
        </div>
      ) : (
        <div className="text-dLight/50 dark:text-bDark/50 font-semibold rtl:font-medium flex justify-center no-select">
          {Texts(textsList.completedPage_paragraph, isEnglish)}
        </div>
      )}
      <FloatingButton to="/">
        {Texts(textsList.floatedButton_returnHome, isEnglish)}
      </FloatingButton>
    </div>
  );
}
