import { useState } from "react";
import { useZState } from "../states";
import { TaskType } from "@/types";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import { Button } from "./ui/button";
import colors from "../../colors";
import CheckIcon from "@mui/icons-material/Check";

export default function EditForm({ task }: { task: TaskType }) {
  const { tasks, setTasks, setPriority, isEnglish, isDark, isMobile } =
    useZState();

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
        className="FORM flex flex-nowrap justify-center items-center gap-x-2 h-10 sm:h-16 my-2 sm:my-4 font-semibold rtl:font-medium"
      >
        <div className="INPUT&FLAG flex-nowrap flex flex-1 items-center relative h-full">
          <input
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder={Texts(textsList.task_updatePlaceholder, isEnglish)}
            className="bg-cLight dark:bg-aDark/30 text-dLight dark:text-bDark h-full placeholder-dLight/30 dark:placeholder-bDark/30 text-base sm:text-lg px-2 sm:px-3 flex-1 rounded-r-lg indent-1 outline-hidden shadow-xs rounded-l-lg focus:ring-1 ring-inset ring-aLight dark:ring-aDark"
          />
        </div>
        <Button
          type="submit"
          onClick={() => handleSubmit}
          size={"lg"}
          className="px-2 sm:px-3 text-base sm:text-lg"
        >
          <CheckIcon
            sx={{
              color: isDark ? colors.cDark : colors.bLight,
              fontSize: isMobile ? 20 : 26,
            }}
          />
          <span>{Texts(textsList.task_update, isEnglish)}</span>
        </Button>
      </form>
    </>
  );
}
