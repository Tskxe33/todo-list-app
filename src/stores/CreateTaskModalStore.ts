import { create } from "zustand";

interface CreateTaskModalStore {
  isOpen: boolean;
  toggle: () => void;
}

export const useCreateTaskModalStore = create<CreateTaskModalStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
