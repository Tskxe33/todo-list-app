import CustomButton from "./CustomButton";
import { CgDanger } from "react-icons/cg";
import { useTasksStore } from "../stores/TasksStore";
import { useCreateTaskModalStore } from "../stores/CreateTaskModalStore";
import { IoWarningOutline } from "react-icons/io5";
import { useConfirmationModalStore } from "../stores/ConfirmationModalStore";
import { useCloseConfirmationModal } from "../hooks/useCloseConfirmationModal";
import { LiaRandomSolid } from "react-icons/lia";
import { useGenerateTask } from "../hooks/useGenerateTask";

const ActionButtons = () => {
  const { setTasks, tasks } = useTasksStore();
  const { toggle } = useCreateTaskModalStore();
  const { toggleConfirmationModal } = useConfirmationModalStore();
  const { handleCloseModal } = useCloseConfirmationModal();
  const { getRandomTask } = useGenerateTask();

  const handleDeleteAllTasks = () => {
    setTasks([]);
    handleCloseModal();
  };

  const handleOpenConfirmationModal = () => {
    toggleConfirmationModal({
      isOpen: true,
      message: "Are you sure you want to delete all tasks?",
      modalType: "deleteAllTasks",
      onConfirm: handleDeleteAllTasks,
      icon: <IoWarningOutline size={34} color="var(--color-danger)" />,
      confirmButtonText: "Delete All Tasks",
    });
  };

  return (
    <div className="flex justify-between my-5">
      <div className="flex flex-col gap-4">
        <CustomButton
          text="Create Task"
          onClick={() => toggle()}
          backgroundColor="primary"
        />

        <CustomButton
          text="Generate Task"
          onClick={getRandomTask}
          backgroundColor="grey"
          icon={<LiaRandomSolid size={20} color="white" />}
        />
      </div>
      <CustomButton
        disabled={!tasks.length}
        text="Delete All Tasks"
        onClick={handleOpenConfirmationModal}
        backgroundColor="danger"
        icon={<CgDanger size={20} color="white" />}
      />
    </div>
  );
};

export default ActionButtons;
