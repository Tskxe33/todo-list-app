import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Todo } from "../models/todo.model";

interface TasksStore {
  tasks: Todo[];
  setTasks: (tasks: Todo[]) => void;
}

export const useTasksStore = create<TasksStore>()(
  persist(
    (set) => ({
      tasks: [],
      setTasks: (tasks: Todo[]) => set({ tasks }),
    }),
    {
      name: "tasks-storage",
    }
  )
);
