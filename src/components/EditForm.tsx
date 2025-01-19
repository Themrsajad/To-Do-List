import { useState } from "react";
import { useZState } from "../states";
import { Add } from "iconsax-react";
import { TaskType } from "@/types";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";

export default function EditForm({ task }: { task: TaskType }) {
  const { tasks, setTasks, setPriority, isEnglish } = useZState();

  const [value, setValue] = useState(task.todo);

  function handleEditInEditForm(todo: string, id: string) {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, todo, isEditing: !task.isEditing } : task
      )
    );
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!value) return;
    handleEditInEditForm(value, task.id);
    setValue("");
    setPriority(0);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="FORM flex flex-nowrap justify-center items-center h-12 my-2 font-medium"
      >
        <div className="INPUT&FLAG flex-nowrap ltr:mr-2 rtl:ml-2 flex flex-1 items-center relative h-full">
          <input
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder={Texts(textsList.task_updatePlaceholder, isEnglish)}
            className="bg-c h-full placeholder-b text-d text-lg px-3 pl-3w-full flex-1 rounded-r-lg indent-1 outline-none shadow-sm rounded-l-lg focus:ring-1 ring-inset ring-d"
          />
        </div>
        <button
          type="submit"
          onClick={() => handleSubmit}
          className="UPDATETASK h-full bg-d px-3 text-lg rounded-lg text-b flex-none shadow-sm font-semibold rtl:font-medium flex items-center "
        >
          <Add />
          {Texts(textsList.task_update, isEnglish)}
        </button>
      </form>
    </>
  );
}
