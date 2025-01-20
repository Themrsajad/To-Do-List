import { useZState } from "@/states";

export default function LanguageSwitcher() {
  const { isEnglish, setIsEnglish } = useZState();

  return (
    <button
      onClick={() => setIsEnglish()}
      className="*:flex *:items-center font-medium bg-dLight dark:bg-bDark px-3 py-2 rounded-lg shadow-md hover:brightness-95 font-[QuickSand]"
    >
      {isEnglish ? <span>FA</span> : <span>EN</span>}
    </button>
  );
}
