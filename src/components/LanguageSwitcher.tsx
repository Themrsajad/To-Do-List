import { useZState } from "@/states";
import { Button } from "./ui/button";

export default function LanguageSwitcher() {
  const { isEnglish, setIsEnglish } = useZState();

  return (
    <Button
      onClick={() => setIsEnglish()}
      variant={"secondary"}
      className="text-xs sm:text-sm h-6 w-9 sm:h-10 sm:w-auto"
    >
      {isEnglish ? <span>FA</span> : <span>EN</span>}
    </Button>
  );
}
