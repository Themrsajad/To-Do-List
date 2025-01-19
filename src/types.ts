import { Texts } from "@/texts";
import { textsList } from "./textsList";

export interface Colors {
  a: string;
  b: string;
  c: string;
  d: string;
  white: string;
  red: string;
}

export interface TaskType {
  id: string;
  todo: string;
  priority: number;
  tags: TagType[];
  deadlineDate: Date | undefined;
  dateAdded: Date;
  isEditing: boolean;
}

export interface TagType {
  id: string;
  tag: string;
}

export interface LanguageText {
  en: string;
  fa: string;
}

export function priorityNumToStr(n: number, isEnglish: boolean) {
  switch (n) {
    case 1:
      return Texts(textsList.form_priorityLow, isEnglish);
    case 2:
      return Texts(textsList.form_priorityMedium, isEnglish);
    case 3:
      return Texts(textsList.form_priorityHigh, isEnglish);
  }
}
