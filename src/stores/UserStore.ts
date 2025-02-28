import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
    }),
    {
      name: "user-storage",
    }
  )
);
