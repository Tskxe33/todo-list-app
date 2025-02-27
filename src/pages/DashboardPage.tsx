import ActionButtons from "../components/ActionButtons";
import CreateTaskModal from "../components/CreateTaskModal";
import NoTasks from "../components/NoTasks";
import SortableList from "../components/sortable/SortableList";
import { useModalStore } from "../stores/ModalStore";
import { useTasksStore } from "../stores/TasksStore";

const DashboradPage = () => {
  const { tasks, setTasks } = useTasksStore();
  const { isOpen } = useModalStore();

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="w-full sm:w-1/2">
          <ActionButtons />
          {tasks.length ? (
            <SortableList items={tasks} setItems={setTasks} />
          ) : (
            <NoTasks />
          )}
        </div>
        {isOpen && <CreateTaskModal />}
      </div>
    </>
  );
};

export default DashboradPage;
