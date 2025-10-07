import { LanguageText } from "./types";

export function Texts(text: LanguageText, isEnglish: boolean): string {
  return isEnglish ? text.en : text.fa;
}
