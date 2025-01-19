import CheckIcon from "@mui/icons-material/Check";
import { useZState } from "../states";
import { v4 } from "uuid";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import colors from "../../colors";
v4();

export default function InputTag() {
  const {
    setMoveTag,
    tags,
    setTags,
    tagInputValue,
    setTagInputValue,
    isEnglish,
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
          className="bg-c w-full h-full placeholder-b text-d text-sm font-medium rounded-lg outline-hidden shadow-xs focus:ring-1 ring-inset ring-d indent-3"
          type="text"
          autoFocus
        />
      </div>
      <button
        type="submit"
        onClick={(e) => handleAddTags(e)}
        className="DONE absolute bg-d h-full w-8 ltr:rounded-r-lg rtl:rounded-l-lg ltr:right-0 rtl:left-0 text-lg z-30 flex items-center justify-center"
      >
        <CheckIcon sx={{ color: colors.b, fontSize: 20 }} />
      </button>
    </form>
  );
}
