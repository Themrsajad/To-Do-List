import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { TaskType } from "./types";

type State = {
  isOpen: boolean;
  moveTag: boolean;
  tasks: TaskType[];
  flag: string;
  tag: string;
  date: Date | undefined;
};

type Action = {
  setIsOpen: (bool?: boolean) => void;
  setMoveTag: (bool?: boolean) => void;
  setTasks: (arr: TaskType[]) => void;
  setFlag: (f: string) => void;
  setTag: (t: string) => void;
  setDate: (date: Date | undefined) => void;
};

export const useZState = create<State & Action>((set) => ({
  isOpen: false,
  moveTag: false,
  tasks: [],
  flag: "",
  tag: "",
  date: undefined,
  setIsOpen: (bool) =>
    set((s) => ({ isOpen: typeof bool === "boolean" ? bool : !s.isOpen })),
  setMoveTag: (bool) =>
    set((s) => ({ moveTag: typeof bool === "boolean" ? bool : !s.moveTag })),
  setTasks: (arr) => set(() => ({ tasks: arr })),
  setFlag: (f) => set(() => ({ flag: f })),
  setTag: (t) => set(() => ({ tag: t })),
  setDate: (date) => set(() => ({ date: date })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("!!!STATES!!!", useZState);
}
