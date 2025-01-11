import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { TagType, TaskType } from "./types";

type State = {
  inputValue: string;
  moveTag: boolean;
  tasks: TaskType[];
  priority: number;
  tags: TagType[];
  tagInputValue: string;
  deadlineDate: Date | undefined;
  sortBy: string;
  isAscending: boolean;
};

type Action = {
  setInputValue: (val: string) => void;
  setMoveTag: (bool?: boolean) => void;
  setTasks: (arr: TaskType[]) => void;
  setPriority: (prio: number) => void;
  setTags: (tags: TagType[]) => void;
  setTagInputValue: (val: string) => void;
  setDeadlineDate: (date: Date | undefined) => void;
  setSortBy: (sort: string) => void;
  setIsAscending: (bool?: boolean) => void;
};

export const useZState = create<State & Action>((set) => ({
  inputValue: "",
  moveTag: false,
  tasks: [],
  priority: 0,
  tags: [],
  tagInputValue: "",
  deadlineDate: undefined,
  sortBy: "Date Added",
  isAscending: true,
  setInputValue: (val) => set(() => ({ inputValue: val })),
  setMoveTag: (bool) =>
    set((s) => ({ moveTag: typeof bool === "boolean" ? bool : !s.moveTag })),
  setTasks: (arr) => set(() => ({ tasks: arr })),
  setPriority: (prio) => set(() => ({ priority: prio })),
  setTags: (tags) => set(() => ({ tags: tags })),
  setTagInputValue: (val) => set(() => ({ tagInputValue: val })),
  setDeadlineDate: (date) => set(() => ({ deadlineDate: date })),
  setSortBy: (sort) => set(() => ({ sortBy: sort })),
  setIsAscending: (bool) =>
    set((s) => ({
      isAscending: typeof bool === "boolean" ? bool : !s.isAscending,
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("!!!STATES!!!", useZState);
}
