import { useCloseConfirmationModal } from "../hooks/useCloseConfirmationModal";
import { useConfirmationModalStore } from "../stores/ConfirmationModalStore";
import CustomButton from "./CustomButton";

const ConfirmationModal = () => {
  const { message, onConfirm, icon, confirmButtonText } =
    useConfirmationModalStore();

  const { handleCloseModal } = useCloseConfirmationModal();

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-20"
      onClick={handleCloseModal}
      data-testid="confirmation-modal"
    >
      <div
        className="bg-white p-6 rounded-lg w-full md:w-96 max-w-full relative gap-8 flex flex-col justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 text-grey cursor-pointer"
        >
          ✕
        </button>
        {icon}
        <p className="text-base md:text-xl text-grey-dark font-medium text-center">
          {message}
        </p>
        <div className="flex flex-row gap-4 w-full justify-center">
          <CustomButton
            text={confirmButtonText}
            onClick={onConfirm}
            backgroundColor="danger"
            buttonClassName="w-full"
          />
          <CustomButton
            text="Cancel"
            onClick={handleCloseModal}
            backgroundColor="primary"
            buttonClassName="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
