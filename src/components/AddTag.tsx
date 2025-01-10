import { colors } from "@/App";
import { useZState } from "../states";
import { Add, Tag } from "iconsax-react";
export default function AddTag() {
  const { moveTag, setMoveTag } = useZState();
  return (
    <button
      type="button"
      onClick={() => setMoveTag()}
      className={`bg-a text-d min-h-[2.2rem] min-w-24 text-sm gap-x-2 py-2 px-3 rounded-lg shadow-sm outline-none hover:brightness-95 flex items-center justify-center font-semibold ${
        moveTag ? "bg-red" : ""
      }`}
    >
      {moveTag ? (
        <Add size={16} color={colors.white} className="rotate-45" />
      ) : (
        <>
          <Tag variant="Bold" color={colors.d} size={16} /> {"Add Tag"}
        </>
      )}
    </button>
  );
}
