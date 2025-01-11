import Form from "./components/Form.tsx";
import Logo from "./components/Logo.tsx";
import Task from "./components/Task.tsx";
import EditForm from "./components/EditForm.tsx";
import { useZState } from "./states.ts";
import { Colors } from "./types.ts";
import SortSection from "./components/SortSection.tsx";
import TagSection from "./components/TagSection.tsx";
import FilterByTag from "./components/FilterByTag.tsx";

export const colors: Colors = {
  a: "#FFF67E",
  b: "#BFEA7C",
  c: "#9BCF53",
  d: "#416D19",
  white: "#FFFFFF",
  red: "#DC3545",
};

export default function App() {
  const { tasks } = useZState();

  function isFilterByTagAvailable() {
    let tagCount = 0;
    tasks.forEach((task) => (task.tags.length > 0 ? tagCount++ : ""));
    return tagCount;
  }

  return (
    <div className="relative w-[95vw] mx-auto">
      <Logo />
      <div className="flex flex-col gap-y-2">
        <Form />
        <TagSection />
      </div>
      <div className="flex items-center gap-x-10 float-right text-d font-semibold text-sm">
        {isFilterByTagAvailable() > 0 && <FilterByTag />}
        {tasks.length > 0 && <SortSection />}
      </div>
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
