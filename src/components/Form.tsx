import Reminder from "./Reminder.tsx";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { useZState } from "../states";
import { v4 } from "uuid";
import { Add, RecordCircle } from "iconsax-react";
import { colors } from "@/App.tsx";
v4();

export default function Form({
  onChooseFlag,
}: {
  onChooseFlag: (name: string) => void;
}) {
  const {
    isOpen,
    setIsOpen,
    tasks,
    setTasks,
    flag,
    setFlag,
    date,
    setDate,
    //  tag, setTag
  } = useZState();

  // const inputClasses =
  //   "bg-c placeholder-b text-d text-lg p-3 w-full flex-1 rounded-r-lg indent-1 outline-none focus:ring-2 ring-inset ring-d z-20 ";

  const [value, setValue] = useState("");

  function handleAddTasks(task: string) {
    setTasks([
      ...tasks,
      { id: v4(), todo: task, flag: flag, date: date, isEditing: false },
    ]);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!value) return;
    handleAddTasks(value);
    setValue("");
    setIsOpen(false);
    setFlag("");
    setDate(undefined);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="FORM flex flex-nowrap justify-center items-center w-full h-14 font-semibold "
      >
        {value && (
          <button
            type="button"
            className="SUB flex-none text-lg h-full px-3 mr-1 bg-a rounded-l-lg rounded-r-sm shadow-sm"
          >
            <PlaylistAddIcon sx={{ color: colors.d }} />
          </button>
        )}
        <div className="INPUT&FLAG flex-nowrap mr-2 flex flex-1 items-center relative h-full">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Read my Lessons..."
            className={`bg-c placeholder-b text-d text-lg h-full w-full flex-1 rounded-r-lg indent-4 outline-none focus:ring-2 ring-inset ring-d z-20 ${
              value ? "rounded-tl-sm" : "rounded-l-lg"
            }`}
          />
          {value && (
            <button
              type="button"
              onClick={() => setIsOpen()}
              className="FLAG flex justify-center items-center absolute z-30 right-[0.7rem] h-3/5 px-2 gap-2 rounded-md hover:brightness-95 bg-a text-d text-sm"
            >
              <RecordCircle
                variant="Bold"
                size={16}
                color={
                  flag == "Low"
                    ? "#2196f3"
                    : flag == "Medium"
                    ? "#ff9800"
                    : flag == "High"
                    ? colors.red
                    : colors.d
                }
              />
              {flag ? flag : "Set Priority"}
            </button>
          )}
          {isOpen && <Dropdown onChooseFlag={onChooseFlag} />}
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
