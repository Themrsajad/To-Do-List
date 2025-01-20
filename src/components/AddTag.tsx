import { useZState } from "../states";
import { Add, Category } from "iconsax-react";
import colors from "../../colors";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";

export default function AddTag() {
  const {
    moveTag,
    setMoveTag,
    tagInputValue,
    setTagInputValue,
    isEnglish,
    isDark,
  } = useZState();

  function handleClick() {
    tagInputValue && setTagInputValue("");
    setMoveTag();
  }

  return (
    <button
      type="button"
      onClick={() => handleClick()}
      className={`bg-aLight dark:bg-aDark min-h-[2.2rem] text-sm gap-x-2 py-2 px-3 rounded-lg shadow-sm outline-hidden hover:brightness-95 flex items-center justify-center font-semibold rtl:font-medium no-select ${
        moveTag ? "bg-red dark:bg-red" : ""
      }`}
    >
      {moveTag ? (
        <Add size={16} color={colors.white} className="rotate-45" />
      ) : (
        <>
          <Category color={isDark ? colors.bDark : colors.cLight} size={16} />
          <span>{Texts(textsList.form_categoryButtonTitle, isEnglish)}</span>
        </>
      )}
    </button>
  );
}
