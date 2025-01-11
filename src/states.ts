import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { TaskType } from "./types";

type State = {
  inputValue: string;
  moveTag: boolean;
  tasks: TaskType[];
  priority: number;
  tag: string;
  deadlineDate: Date | undefined;
  sortBy: string;
  isAscending: boolean;
};

type Action = {
  setInputValue: (val: string) => void;
  setMoveTag: (bool?: boolean) => void;
  setTasks: (arr: TaskType[]) => void;
  setPriority: (prio: number) => void;
  setTag: (t: string) => void;
  setDeadlineDate: (date: Date | undefined) => void;
  setSortBy: (sort: string) => void;
  setIsAscending: (bool?: boolean) => void;
};

export const useZState = create<State & Action>((set) => ({
  inputValue: "",
  moveTag: false,
  tasks: [],
  priority: 0,
  tag: "",
  deadlineDate: undefined,
  sortBy: "Date Added",
  isAscending: true,
  setInputValue: (val) => set(() => ({ inputValue: val })),
  setMoveTag: (bool) =>
    set((s) => ({ moveTag: typeof bool === "boolean" ? bool : !s.moveTag })),
  setTasks: (arr) => set(() => ({ tasks: arr })),
  setPriority: (prio) => set(() => ({ priority: prio })),
  setTag: (t) => set(() => ({ tag: t })),
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
