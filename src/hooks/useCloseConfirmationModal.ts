import { useConfirmationModalStore } from "../stores/ConfirmationModalStore";

export const useCloseConfirmationModal = () => {
  const { toggleConfirmationModal } = useConfirmationModalStore();

  const handleCloseModal = () =>
    toggleConfirmationModal({
      isOpen: false,
      modalType: null,
      message: "",
      onConfirm: () => {},
      icon: null,
      confirmButtonText: "",
    });

  return { handleCloseModal };
};
