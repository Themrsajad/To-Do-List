import { useZState } from "@/states";
import colors from "../../colors";
import { Moon, Sun1 } from "iconsax-react";
import { Button } from "./ui/button";

export default function ThemeSwitcher() {
  const { isDark, setIsDark, isMobile } = useZState();
  return (
    <Button
      onClick={() => setIsDark()}
      variant={"secondary"}
      className="h-6 w-9 sm:p-2 sm:h-auto sm:w-auto"
    >
      {isDark ? (
        <Sun1 color={isDark ? colors.bDark : colors.cLight} />
      ) : (
        <Moon
          size={isMobile ? 16 : 24}
          color={isDark ? colors.bDark : colors.cLight}
        />
      )}
    </Button>
  );
}
