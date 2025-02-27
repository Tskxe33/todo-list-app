import { useModalStore } from "../stores/ModalStore";
import CustomButton from "./CustomButton";

const CreateTaskModal = () => {
  const { toggle } = useModalStore();

  const randomPlaceholder = () => {
    const placeholders = [
      "Pick up groceries 🛍️",
      "Finish the project 📝",
      "Call the bank 📞",
      "Buy a new phone 📱",
    ];
    return placeholders[Math.floor(Math.random() * placeholders.length)];
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center"
      onClick={toggle}
    >
      <div
        className="bg-white p-6 rounded-lg w-96 max-w-full relative gap-8  flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={toggle}
          className="absolute top-4 right-4 text-dark cursor-pointer"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold">Create New Task</h2>
        <input
          type="text"
          placeholder={randomPlaceholder()}
          className="border-border border-1 rounded-md p-4 w-full focus:outline-none"
        />
        <div>
          <CustomButton text="Create" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
