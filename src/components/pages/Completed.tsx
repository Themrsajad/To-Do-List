import { useZState } from "@/states";
import FloatingButton from "../FloatingButton";
import Title from "../Title";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import CompletedTasksSection from "../CompletedTasksSection";

export default function Completed() {
  const { isEnglish } = useZState();
  return (
    <div className="pb-40">
      <Title>{Texts(textsList.heading_completedTitle, isEnglish)}</Title>
      <CompletedTasksSection />
      <FloatingButton to="/">
        {Texts(textsList.floatedButton_returnHome, isEnglish)}
      </FloatingButton>
    </div>
  );
}
