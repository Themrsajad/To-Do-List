import { useZState } from "@/states";
import colors from "../../colors";
import { Moon, Sun1 } from "iconsax-react";

export default function ThemeSwitcher() {
  const { isDark, setIsDark } = useZState();
  return (
    <button
      onClick={() => setIsDark()}
      className="bg-aLight dark:bg-aDark p-2 rounded-lg shadow-md hover:brightness-95"
    >
      {isDark ? <Sun1 color={colors.d} /> : <Moon color={colors.d} />}
    </button>
  );
}
