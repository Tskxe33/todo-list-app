import { useCloseConfirmationModal } from "../../hooks/useCloseConfirmationModal";
import { Todo } from "../../models/todo.model";
import { useConfirmationModalStore } from "../../stores/ConfirmationModalStore";
import { useTasksStore } from "../../stores/TasksStore";
import CustomButton from "../CustomButton";
import { IoWarningOutline } from "react-icons/io5";

interface Props {
  item: Todo;
}

const SortableItemActions = ({ item }: Props) => {
  const { tasks, setTasks } = useTasksStore();
  const { toggleConfirmationModal } = useConfirmationModalStore();
  const { handleCloseModal } = useCloseConfirmationModal();

  const handleMarkAsDone = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === item.id ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter((task) => task.id !== item.id);
    updatedTasks.forEach((task, index) => {
      task.order = index;
    });
    setTasks(updatedTasks);
    handleCloseModal();
  };

  const handleOpenConfirmationModal = () => {
    toggleConfirmationModal({
      isOpen: true,
      message: "Are you sure you want to delete this task?",
      modalType: "deleteTask",
      onConfirm: handleDeleteTask,
      icon: <IoWarningOutline size={34} color="var(--color-danger)" />,
      confirmButtonText: "Delete",
    });
  };

  return (
    <div className="flex flex-row gap-1 md:gap-3">
      {!item.completed && (
        <CustomButton
          text="Mark as done"
          onClick={handleMarkAsDone}
          backgroundColor="primary"
        />
      )}

      <CustomButton
        text="Delete task"
        onClick={handleOpenConfirmationModal}
        backgroundColor="warning"
      />
    </div>
  );
};

export default SortableItemActions;
