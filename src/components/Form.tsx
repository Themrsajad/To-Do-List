import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PriorityDropdown from "./PriorityDropdown.tsx";
import { useZState } from "../states";
import { v4 } from "uuid";
import { Add } from "iconsax-react";
import { colors } from "@/App.tsx";
import { DatePickerDemo as Reminder } from "./ui/date-picker.tsx";
v4();

export default function Form() {
  const {
    tasks,
    setTasks,
    priority,
    setPriority,
    deadlineDate,
    setDeadlineDate,
    inputValue,
    setInputValue,
    tags,
    setTags,
  } = useZState();

  function handleAddTasks(task: string) {
    setTasks([
      ...tasks,
      {
        id: v4(),
        todo: task,
        priority: priority,
        tags: tags,
        deadlineDate: deadlineDate,
        dateAdded: new Date(),
        isEditing: false,
      },
    ]);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!inputValue) return;
    handleAddTasks(inputValue);
    setInputValue("");
    setPriority(0);
    setDeadlineDate(undefined);
    setTags([]);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="FORM flex flex-nowrap justify-center items-center w-full h-14 font-semibold "
      >
        {inputValue && (
          <button
            type="button"
            className="SUB flex-none text-lg h-full px-3 mr-2 bg-a rounded-l-lg rounded-r-sm shadow-sm"
          >
            <PlaylistAddIcon sx={{ color: colors.d }} />
          </button>
        )}
        <div className="INPUT&priority flex-nowrap mr-2 flex flex-1 items-center relative h-full">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            autoFocus
            placeholder="like 'Reading my Lessons'"
            className={`bg-c placeholder-b text-d text-lg h-full w-full flex-1 rounded-r-lg indent-4 outline-none focus:ring-1 ring-inset ring-d z-20 ${
              inputValue ? "rounded-tl-sm" : "rounded-l-lg"
            }`}
          />
          {inputValue && <PriorityDropdown />}
        </div>
        <Reminder />
        <button
          type="submit"
          onClick={() => handleSubmit}
          className="ADDTASK bg-d h-full px-8 rounded-lg shadow-sm"
        >
          <Add color={colors.b} size={32} />
        </button>
      </form>
    </>
  );
}
