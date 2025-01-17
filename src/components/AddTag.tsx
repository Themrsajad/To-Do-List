import { useZState } from "../states";
import { Add, Category } from "iconsax-react";
import colors from "../../colors";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";

export default function AddTag() {
  const { moveTag, setMoveTag, tagInputValue, setTagInputValue, isEnglish } =
    useZState();

  function handleClick() {
    tagInputValue && setTagInputValue("");
    setMoveTag();
  }

  return (
    <button
      type="button"
      onClick={() => handleClick()}
      className={`bg-a text-d min-h-[2.2rem] text-sm gap-x-2 py-2 px-3 rounded-lg shadow-sm outline-hidden hover:brightness-95 flex items-center justify-center font-semibold rtl:font-medium no-select ${
        moveTag ? "bg-red" : ""
      }`}
    >
      {moveTag ? (
        <Add size={16} color={colors.white} className="rotate-45" />
      ) : (
        <>
          <Category color={colors.d} size={16} />
          <span>{Texts(textsList.form_categoryButtonTitle, isEnglish)}</span>
        </>
      )}
    </button>
  );
}
