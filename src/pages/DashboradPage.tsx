import SortableList from "../components/sortable/SortableList";
import { useFetchTasks } from "../hooks/useFetchTasks";
import { useTasksStore } from "../stores/TasksStore";

const DashboradPage = () => {
  const { tasks, setTasks } = useTasksStore();

  useFetchTasks();

  return (
    <div className="flex flex-col items-center justify-center">
      <SortableList items={tasks} setItems={setTasks} />
    </div>
  );
};

export default DashboradPage;
