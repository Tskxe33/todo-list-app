import { create } from "zustand";
import { ReactNode } from "react";

interface ConfirmationModalStore {
  isOpen: boolean;
  modalType: string | null;
  message: string;
  onConfirm: () => void;
  icon?: ReactNode;
  confirmButtonText: string;
  toggleConfirmationModal: (
    modalConfig: Partial<ConfirmationModalStore>
  ) => void;
}

export const useConfirmationModalStore = create<ConfirmationModalStore>(
  (set) => ({
    isOpen: false,
    modalType: null,
    message: "",
    confirmButtonText: "",
    onConfirm: () => {},
    icon: null,
    toggleConfirmationModal: (modalConfig) =>
      set((state) => ({
        ...state,
        ...modalConfig,
      })),
  })
);
