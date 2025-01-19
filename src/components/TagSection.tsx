import { useZState } from "@/states";
import AddTag from "./AddTag";
import InputTag from "./InputTag";
import { Add } from "iconsax-react";
import colors from "../../colors";
import SelectCategories from "./SelectCategories";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";

export default function TagSection() {
  const {
    moveTag,
    tags,
    setTags,
    tagsList,
    checkedTags,
    isEnglish,
    setCheckedTags,
  } = useZState();

  function handleRemoveTag(id: string) {
    setTags(tags.filter((tag) => tag.id !== id));
  }

  function handleRemoveSavedTag(id: string) {
    setCheckedTags(checkedTags.filter((tag) => tag.id !== id));
  }

  return (
    <div className="flex items-center gap-x-2 h-[2.2rem]">
      <AddTag />
      {moveTag && <InputTag />}
      {tagsList.length > 0 && <SelectCategories />}
      <div className=" flex items-center gap-x-2">
        {checkedTags.map((tag, i) => (
          <span
            key={i}
            className="flex items-center gap-x-2 text-sm text-d font-semibold rtl:font-medium px-2 py-2 bg-white/50 rounded-lg shadow-sm outline-none no-select"
          >
            <button
              onClick={() => handleRemoveSavedTag(tag.id)}
              className="bg-d rounded-full"
            >
              <Add size={16} color={colors.white} className="rotate-45" />
            </button>
            {tag.tag}
          </span>
        ))}
      </div>
      {tags.length > 0 && (
        <span className="text-d font-semibold rtl:font-medium text-sm ml-2">
          {Texts(textsList.form_categoryCategories, isEnglish)}
        </span>
      )}
      {tags.map((tag, i) => (
        <span
          key={i}
          className="flex items-center gap-x-2 text-sm text-d font-semibold rtl:font-medium px-2 py-2 bg-white/50 rounded-lg shadow-sm outline-none no-select"
        >
          <button
            onClick={() => handleRemoveTag(tag.id)}
            className="bg-d rounded-full"
          >
            <Add size={16} color={colors.white} className="rotate-45" />
          </button>
          {tag.tag}
        </span>
      ))}
    </div>
  );
}
