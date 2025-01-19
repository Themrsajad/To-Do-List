import { useZState } from "@/states";
import AddTag from "./AddTag";
import InputTag from "./InputTag";
import { Add } from "iconsax-react";
import colors from "../../colors";
import SelectCategories from "./SelectCategories";
import { Texts, textsList } from "@/texts";

export default function TagSection() {
  const { moveTag, tags, setTags, tagsList, checkedTags } = useZState();

  function handleRemoveTag(id: string) {
    setTags(tags.filter((tag) => tag.id !== id));
  }

  return (
    <div className="flex items-center gap-x-2 h-[2.2rem]">
      <AddTag />
      {moveTag && <InputTag />}
      {tagsList.length > 0 && <SelectCategories />}
      <div className=" flex items-center gap-x-2">
        {checkedTags.map((tag) => (
          <span className="bg-white/50 px-3 py-1 rounded-lg text-d font-semibold rtl:font-medium">
            {tag.tag}
          </span>
        ))}
      </div>
      {tags.length > 0 && (
        <span className="text-d font-semibold rtl:font-medium text-sm ml-2">
          {Texts(textsList.form_categoryCategories)}
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
