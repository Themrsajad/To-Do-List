import { useState } from "react";
import { useZState } from "../states";
import { Add } from "iconsax-react";
import { TaskType } from "@/types";

export default function EditForm({
  task,
  onChooseFlag,
}: {
  onChooseFlag: (name: string) => void;
  task: TaskType;
}) {
  const { tasks, setTasks, setIsOpen, setFlag } = useZState();

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
    setIsOpen(false);
    setFlag("");
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="FORM flex flex-nowrap justify-center items-center h-12 my-2 font-medium"
      >
        {/* {value && (
          <button
            type="button"
            className="SUB flex-none text-lg p-3 mr-1 bg-a rounded-l-lg rounded-r-sm shadow-sm"
          >
            <PlaylistAddIcon sx={{ color: colors.d }} />
          </button>
        )} */}
        <div className="INPUT&FLAG flex-nowrap mr-2 flex flex-1 items-center relative h-full">
          <input
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Update Task..."
            className="bg-c h-full placeholder-b text-d text-lg px-3 pl-3w-full flex-1 rounded-r-lg indent-1 outline-none shadow-sm rounded-l-lg focus:ring-2 ring-inset ring-d"
          />
          {/* {value && (
            <button
              type="button"
              onClick={() => setIsOpen(() => !isOpen)}
              className="FLAG absolute right-[0.5rem] p-[0.28rem] focus:bg-d/15 rounded-lg"
            >
              <FlagIcon sx={{ color: colors.d, fontSize: 30 }} />
            </button>
          )} */}
          {/* {isOpen && <Dropdown onChooseFlag={onChooseFlag} />} */}
        </div>
        <button
          type="submit"
          onClick={() => handleSubmit}
          className="UPDATETASK h-full bg-d px-3 text-lg rounded-lg text-b flex-none shadow-sm font-semibold flex items-center "
        >
          <Add />
          Update
        </button>
      </form>
    </>
  );
}
