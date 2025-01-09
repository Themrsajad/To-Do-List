import Form from "./components/Form.tsx";
import AddTag from "./components/AddTag.tsx";
import Logo from "./components/Logo.tsx";
import Task from "./components/Task.tsx";
import ShowTag from "./components/ShowTag.tsx";
import EditForm from "./components/EditForm.tsx";
import { useZState } from "./states.ts";
import { Colors } from "./types.ts";

export const colors: Colors = {
  a: "#FFF67E",
  b: "#BFEA7C",
  c: "#9BCF53",
  d: "#416D19",
  white: "#FFFFFF",
  red: "#DC3545",
};

export default function App() {
  const { setIsOpen, tasks, setFlag, moveTag } = useZState();

  function handleChooseFlag(name: string) {
    setFlag(name);
    setIsOpen(false);
  }
  // function handleMoveTag(bool) {}
  // function handleSetTag() {}
  return (
    <div className="w-[95vw] mx-auto">
      <Logo />
      <div className="flex flex-col gap-y-2">
        <Form onChooseFlag={handleChooseFlag} />
        <div className="flex items-center gap-x-2 h-[2.2rem]">
          <AddTag />
          {moveTag && <ShowTag />}
        </div>
      </div>
      <div className="ALLTASKS flex flex-col mt-8">
        {tasks.map((task, i) =>
          task.isEditing ? (
            <EditForm key={i} task={task} onChooseFlag={handleChooseFlag} />
          ) : (
            <Task task={task} key={i} />
          )
        )}
      </div>
    </div>
  );
}
