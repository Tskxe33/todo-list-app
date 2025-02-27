import ActionButtons from "../components/ActionButtons";
import CreateTaskModal from "../components/CreateTaskModal";
import SortableList from "../components/sortable/SortableList";
import { useFetchTasks } from "../hooks/useFetchTasks";
import { useModalStore } from "../stores/ModalStore";
import { useTasksStore } from "../stores/TasksStore";

const DashboradPage = () => {
  const { tasks, setTasks } = useTasksStore();
  const { isOpen } = useModalStore();
  useFetchTasks();

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div>
          <ActionButtons />
          <SortableList items={tasks} setItems={setTasks} />
        </div>
        {isOpen && <CreateTaskModal />}
      </div>
    </>
  );
};

export default DashboradPage;
