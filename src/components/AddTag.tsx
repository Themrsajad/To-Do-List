import { useZState } from "../states";
import { Add, Category } from "iconsax-react";
import colors from "../../colors";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import { Button } from "./ui/button";

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
    <Button
      type="button"
      onClick={() => handleClick()}
      variant={moveTag ? "red" : "secondary"}
    >
      {moveTag ? (
        <Add
          size={16}
          color={isDark ? colors.bDark : colors.cLight}
          className="rotate-45"
        />
      ) : (
        <>
          <Category color={isDark ? colors.bDark : colors.cLight} size={16} />
          <span>{Texts(textsList.form_categoryButtonTitle, isEnglish)}</span>
        </>
      )}
    </Button>
  );
}
