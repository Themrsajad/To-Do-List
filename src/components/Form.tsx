import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PriorityDropdown from "./PriorityDropdown.tsx";
import { useZState } from "../states";
import { v4 } from "uuid";
import { Add } from "iconsax-react";
import { DatePickerDemo as Reminder } from "./ui/date-picker.tsx";
import colors from "../../colors";
import { useEffect } from "react";
import { TagType } from "@/types.ts";
import { Texts } from "@/texts.ts";
import { textsList } from "@/textsList.ts";
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
    setTagsList,
    tagsList,
    checkedTags,
    setCheckedTags,
    isEnglish,
  } = useZState();

  const allTags = Array.from(
    tasks
      .flatMap((task) => task.tags)
      .reduce((map, tag) => map.set(tag.tag, tag), new Map<string, TagType>())
      .values()
  );

  useEffect(() => {
    setTagsList(allTags);
  }, [tasks]);

  function handleAddTasks(task: string) {
    setTasks([
      ...tasks,
      {
        id: v4(),
        todo: task,
        priority: priority,
        tags: [...tags, ...checkedTags],
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
    setTagsList([
      ...tagsList,
      ...tags
        .filter(
          (tag) => !tagsList.some((existingTag) => existingTag.tag === tag.tag)
        )
        .map((tag) => ({ id: tag.id, tag: tag.tag })),
    ]);
    setCheckedTags([]);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="FORM flex flex-nowrap justify-center items-center w-full h-14 font-semibold rtl:font-medium"
      >
        {inputValue && (
          <button
            type="button"
            className="SUB flex-none text-lg h-full px-3 ltr:mr-2 rtl:ml-2 bg-a ltr:rounded-l-lg ltr:rounded-r-sm rtl:rounded-r-lg rtl:rounded-l-sm shadow-xs"
          >
            <PlaylistAddIcon sx={{ color: colors.d }} />
          </button>
        )}
        <div className="INPUT&priority flex-nowrap ltr:mr-2 flex flex-1 items-center relative h-full">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            autoFocus
            placeholder={Texts(textsList.form_inputPlaceholder, isEnglish)}
            className={`bg-c placeholder-b text-d text-lg h-full w-full flex-1 rounded-r-lg rtl:rounded-l-lg indent-4 outline-hidden focus:ring-1 ring-inset ring-d z-20 no-select ${
              inputValue ? "ltr:rounded-l-sm rtl:rounded-r-sm" : "rounded-l-lg"
            }`}
          />
          {inputValue && <PriorityDropdown />}
        </div>
        <Reminder />
        <button
          type="submit"
          onClick={() => handleSubmit}
          className="ADDTASK bg-d h-full px-8 rounded-lg shadow-xs"
        >
          <Add color={colors.b} size={32} />
        </button>
      </form>
    </>
  );
}
