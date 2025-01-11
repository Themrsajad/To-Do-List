import { useZState } from "@/states";
import AddTag from "./AddTag";
import InputTag from "./InputTag";

export default function TagSection() {
  const { moveTag } = useZState();
  return (
    <div className="flex items-center gap-x-2 h-[2.2rem]">
      <AddTag />
      {moveTag && <InputTag />}
    </div>
  );
}
