import { colors } from "@/App";
import { RecordCircle } from "iconsax-react";

export default function Dropdown({
  onChooseFlag,
}: {
  onChooseFlag: (name: string) => void;
}) {
  return (
    <ul className="DROPDOWN flex flex-col justify-center items-start absolute right-0 top-16 bg-c px-2 py-2 rounded-lg shadow-md">
      <li
        role="button"
        onClick={() => onChooseFlag("Low")}
        className="Dropdown-liClasses"
      >
        <RecordCircle variant="Bold" color="#2196f3" size={16} /> Low
      </li>
      <li
        role="button"
        onClick={() => onChooseFlag("Medium")}
        className="Dropdown-liClasses"
      >
        <RecordCircle variant="Bold" color="#ff9800" size={16} /> Medium
      </li>
      <li
        role="button"
        onClick={() => onChooseFlag("High")}
        className="Dropdown-liClasses"
      >
        <RecordCircle variant="Bold" color={colors.red} size={16} /> High
      </li>
      <li
        role="button"
        onClick={() => onChooseFlag("")}
        className="Dropdown-liClasses bg-d/10 hover:bg-d/15 justify-center mt-2 "
      >
        Cancel
      </li>
    </ul>
  );
}
