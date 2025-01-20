import CheckIcon from "@mui/icons-material/Check";
import { useZState } from "../states";
import { v4 } from "uuid";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import colors from "../../colors";
import { Button } from "./ui/button";
v4();

export default function InputTag() {
  const {
    setMoveTag,
    tags,
    setTags,
    tagInputValue,
    setTagInputValue,
    isEnglish,
    isDark,
  } = useZState();

  function handleAddTags(e: any) {
    e.preventDefault();
    if (!tagInputValue) return;
    setTags([...tags, { id: v4(), tag: tagInputValue }]);
    setMoveTag(false);
  }

  return (
    <form
      onSubmit={handleAddTags}
      className="flex items-center relative w-48 h-full"
    >
      <div
        className={`flex items-center relative w-48 h-full z-10 transition duration-200 ease-out `}
      >
        <input
          value={tagInputValue}
          onChange={(e) => setTagInputValue(e.target.value)}
          placeholder={Texts(
            textsList.form_categoryinputPlaceholder,
            isEnglish
          )}
          className="bg-cLight dark:bg-aDark/30 placeholder-dLight/30 dark:placeholder-bDark/30 text-dLight dark:text-bDark w-full h-full text-sm font-medium rounded-lg outline-hidden focus:ring-1 ring-inset ring-dLight dark:ring-aDark indent-3"
          type="text"
          autoFocus
        />
      </div>
      <Button
        type="submit"
        onClick={(e) => handleAddTags(e)}
        className="absolute h-full w-8 ltr:rounded-r-lg ltr:rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none ltr:right-0 rtl:left-0 z-30"
      >
        <CheckIcon
          sx={{ color: isDark ? colors.cDark : colors.cLight, fontSize: 20 }}
        />
      </Button>
    </form>
  );
}
