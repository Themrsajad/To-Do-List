import { useZState } from "@/states";
import colors from "../../colors";
import { Moon, Sun1 } from "iconsax-react";
import { Button } from "./ui/button";

export default function ThemeSwitcher() {
  const { isDark, setIsDark } = useZState();
  return (
    <Button onClick={() => setIsDark()} variant={"secondary"} className="p-2">
      {isDark ? (
        <Sun1 color={isDark ? colors.bDark : colors.cLight} />
      ) : (
        <Moon color={isDark ? colors.bDark : colors.cLight} />
      )}
    </Button>
  );
}
