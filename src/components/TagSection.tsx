import { useZState } from "@/states";
import AddTag from "./AddTag";
import InputTag from "./InputTag";
import { colors } from "@/App";
import { Add } from "iconsax-react";

export default function TagSection() {
  const { moveTag, tags, setTags } = useZState();

  function handleRemoveTag(id: string) {
    setTags(tags.filter((tag) => tag.id !== id));
  }

  return (
    <div className="flex items-center gap-x-2 h-[2.2rem]">
      <AddTag />
      {moveTag && <InputTag />}
      {tags.length > 0 && (
        <span className="text-d font-semibold text-sm ml-2">Categories : </span>
      )}
      {tags.map((tag) => (
        <span className="flex items-center gap-x-2 text-sm text-d font-semibold px-2 py-2 bg-white/50 rounded-lg shadow-sm outline-none no-select">
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
