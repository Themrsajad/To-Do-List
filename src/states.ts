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
  filteredTasks: TaskType[];
  filteredBy: string | null;
  completedTasks: TaskType[];
  isDark: boolean;
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
  setFilteredTasks: (filtered: TaskType[]) => void;
  setFilteredBy: (filter: string | null) => void;
  setCompletedTasks: (completed: TaskType[]) => void;
  setIsDark: () => void;
};

export const useZState = create<State & Action>((set) => ({
  inputValue: "",
  moveTag: false,
  tasks: (() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  })(),
  priority: 0,
  tags: [],
  tagInputValue: "",
  deadlineDate: undefined,
  sortBy: "Date Added",
  isAscending: true,
  filteredTasks: [],
  filteredBy: null,
  completedTasks: (() => {
    const savedTasks = localStorage.getItem("completedTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  })(),
  isDark: (() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  })(),
  setInputValue: (val) => set(() => ({ inputValue: val })),
  setMoveTag: (bool) =>
    set((s) => ({ moveTag: typeof bool === "boolean" ? bool : !s.moveTag })),
  setTasks: (arr) => {
    set({ tasks: arr });
    localStorage.setItem("tasks", JSON.stringify(arr));
  },
  setPriority: (prio) => set(() => ({ priority: prio })),
  setTags: (tags) => set(() => ({ tags: tags })),
  setTagInputValue: (val) => set(() => ({ tagInputValue: val })),
  setDeadlineDate: (date) => set(() => ({ deadlineDate: date })),
  setSortBy: (sort) => set(() => ({ sortBy: sort })),
  setIsAscending: (bool) =>
    set((s) => ({
      isAscending: typeof bool === "boolean" ? bool : !s.isAscending,
    })),
  setFilteredTasks: (filtered) => set(() => ({ filteredTasks: filtered })),
  setFilteredBy: (filter) => set(() => ({ filteredBy: filter })),
  setCompletedTasks: (completed) => {
    set({ completedTasks: completed });
    localStorage.setItem("completedTasks", JSON.stringify(completed));
  },
  setIsDark: () => {
    set((s) => {
      const newTheme = !s.isDark;
      localStorage.setItem("theme", JSON.stringify(newTheme));
      document.documentElement.classList.toggle("dark", newTheme);
      return { isDark: newTheme };
    });
  },
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("!!!STATES!!!", useZState);
}
