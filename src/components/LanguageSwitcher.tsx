import { useZState } from "@/states";
import { Button } from "./ui/button";

export default function LanguageSwitcher() {
  const { isEnglish, setIsEnglish } = useZState();

  return (
    <Button
      onClick={() => setIsEnglish()}
      variant={"secondary"}
      className="h-10"
    >
      {isEnglish ? <span>FA</span> : <span>EN</span>}
    </Button>
  );
}
