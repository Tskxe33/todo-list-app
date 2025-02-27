import CustomButton from "./CustomButton";
import { CgDanger } from "react-icons/cg";
import { useTasksStore } from "../stores/TasksStore";
import { useModalStore } from "../stores/ModalStore";

const ActionButtons = () => {
  const { setTasks } = useTasksStore();
  const { toggle } = useModalStore();

  return (
    <div className="flex justify-between mx-2 md:mx-0 my-5">
      <CustomButton
        text="Create Task"
        onClick={() => toggle()}
        backgroundColor="primary"
      />
      <CustomButton
        text="Delete All Tasks"
        onClick={() => setTasks([])}
        backgroundColor="danger"
        icon={<CgDanger size={20} color="white" />}
      />
    </div>
  );
};

export default ActionButtons;
