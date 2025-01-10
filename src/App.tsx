import Form from "./components/Form.tsx";
import AddTag from "./components/AddTag.tsx";
import Logo from "./components/Logo.tsx";
import Task from "./components/Task.tsx";
import ShowTag from "./components/ShowTag.tsx";
import EditForm from "./components/EditForm.tsx";
import { useZState } from "./states.ts";
import { Colors } from "./types.ts";
import SortSection from "./components/SortSection.tsx";

export const colors: Colors = {
  a: "#FFF67E",
  b: "#BFEA7C",
  c: "#9BCF53",
  d: "#416D19",
  white: "#FFFFFF",
  red: "#DC3545",
};

export default function App() {
  const { tasks, moveTag } = useZState();

  return (
    <div className="relative w-[95vw] mx-auto">
      <Logo />
      <div className="flex flex-col gap-y-2">
        <Form />
        <div className="flex items-center gap-x-2 h-[2.2rem]">
          <AddTag />
          {moveTag && <ShowTag />}
        </div>
      </div>
      {tasks.length > 0 && <SortSection />}
      <div className="ALLTASKS flex flex-col clear-right">
        {tasks.map((task, i) =>
          task.isEditing ? (
            <EditForm key={i} task={task} />
          ) : (
            <Task task={task} key={i} />
          )
        )}
      </div>
    </div>
  );
}
