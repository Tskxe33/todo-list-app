import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Todo } from "../models/todo.model";
import { FilterValues, SortValues } from "../constants/FilterValues";

interface TasksStore {
  tasks: Todo[];
  setTasks: (tasks: Todo[]) => void;
  filter: string;
  setFilter: (filter: string) => void;
  sort: string;
  setSort: (sort: string) => void;
}

export const useTasksStore = create<TasksStore>()(
  persist(
    (set) => ({
      tasks: [],
      filter: FilterValues.ALL,
      sort: SortValues.ORDER,
      setTasks: (tasks: Todo[]) => set({ tasks }),
      setFilter: (filter: string) => set({ filter }),
      setSort: (sort: string) => set({ sort }),
    }),
    {
      name: "tasks-storage",
    }
  )
);
