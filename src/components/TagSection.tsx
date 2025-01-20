import { useZState } from "@/states";
import AddTag from "./AddTag";
import InputTag from "./InputTag";
import { Add } from "iconsax-react";
import colors from "../../colors";
import SelectCategories from "./SelectCategories";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import { Button } from "./ui/button";

export default function TagSection() {
  const {
    moveTag,
    tags,
    setTags,
    tagsList,
    checkedTags,
    isEnglish,
    setCheckedTags,
    isDark,
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
            className="flex items-center gap-x-2 text-sm bg-cLight dark:bg-aDark/30 text-dLight dark:text-bDark font-semibold rtl:font-medium px-2 py-2 bg-white/50 rounded-lg shadow-sm outline-hidden no-select"
          >
            <Button
              onClick={() => handleRemoveSavedTag(tag.id)}
              size={"lg"}
              className="rounded-full"
            >
              <Add
                size={16}
                color={isDark ? colors.cDark : colors.bLight}
                className="rotate-45"
              />
            </Button>
            {tag.tag}
          </span>
        ))}
      </div>
      {tagsList.length == 0 && tags.length > 0 && (
        <span className="text-dLight dark:text-bDark font-semibold rtl:font-medium text-sm ml-2 no-select">
          {Texts(textsList.form_categoryCategories, isEnglish)}
        </span>
      )}
      {tags.map((tag, i) => (
        <span
          key={i}
          className="flex items-center gap-x-2 text-sm bg-cLight dark:bg-aDark/30 text-dLight dark:text-bDark font-semibold rtl:font-medium px-2 py-2 bg-white/50 rounded-lg shadow-xs outline-hidden no-select"
        >
          <Button
            onClick={() => handleRemoveTag(tag.id)}
            size={"lg"}
            className="rounded-full"
          >
            <Add
              size={16}
              color={isDark ? colors.cDark : colors.bLight}
              className="rotate-45"
            />
          </Button>
          {tag.tag}
        </span>
      ))}
    </div>
  );
}
