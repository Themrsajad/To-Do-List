import CheckIcon from "@mui/icons-material/Check";
import { useZState } from "../states";
import { Tag } from "iconsax-react";

export default function inputTag() {
  const { moveTag, setMoveTag, tag, setTag } = useZState();
  function handleInput(value: string) {
    setTag(value);
    // if (value.lenght > 10) {
    //   inputClasses + "w-52";
    // } else if (value.lenght > 20) {
    //   inputClasses + "w-56";
    // } else {
    //   inputClasses;
    // }
  }
  function handleAddTag(tag: string) {
    setTag(tag);
  }
  function handleDoneTag(e: any) {
    e.preventDefault();
    if (!tag) return;
    handleAddTag(tag);
    setTag("");
    setMoveTag(false);
  }
  // function mainInputClasses() {
  //   tag.lenght > 10 ? inputClasses + "w-52" : inputClasses;
  // }

  return (
    <form
      onSubmit={handleDoneTag}
      className="flex items-center relative w-48 h-full"
    >
      <div
        className={`flex items-center relative w-48 h-full z-10 transition duration-200 ease-out `}
      >
        <input
          value={tag}
          onChange={(e) => handleInput(e.target.value)}
          // maxLength={12}
          placeholder="School"
          className="bg-c w-full h-full placeholder-b text-d text-sm font-medium rounded-lg  outline-none indent-7 shadow-sm focus:ring-2 ring-inset ring-d"
          type="text"
        />
        <Tag size={16} variant="Bold" className="absolute text-d left-2" />
      </div>
      <button
        type="submit"
        onClick={(e) => handleDoneTag(e)}
        className="DONE absolute bg-d h-full px-1 rounded-r-lg right-0 text-lg z-30"
      >
        <CheckIcon className="text-b" />
      </button>
    </form>
  );
}
