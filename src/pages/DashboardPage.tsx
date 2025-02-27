import ActionButtons from "../components/ActionButtons";
import CreateTaskModal from "../components/CreateTaskModal";
import NoTasks from "../components/NoTasks";
import SortableList from "../components/sortable/SortableList";
import { useModalStore } from "../stores/ModalStore";
import { useTasksStore } from "../stores/TasksStore";
import FilterDropDown from "../components/FilterDropDown";
import { IoFilterOutline } from "react-icons/io5";
import { FaSort } from "react-icons/fa";
import { filterItems, sortItems } from "../constants/FilterValues";
import { useGetFilteredTasks } from "../hooks/useGetFilteredTasks";

const DashboradPage = () => {
  const { tasks, setTasks, filter, setFilter, sort, setSort } = useTasksStore();
  const { isOpen } = useModalStore();
  const { sortedTasks, filteredTasks } = useGetFilteredTasks();

  const renderContent = () => {
    if (!tasks.length) {
      return (
        <NoTasks
          text="You don't have any tasks yet."
          subText="Tap on the blue button to create a new task."
        />
      );
    }

    if (filteredTasks.length) {
      return <SortableList items={sortedTasks} setItems={setTasks} />;
    }

    return (
      <NoTasks
        text="You don't have any completed tasks yet."
        subText="Tap Mark as done to complete a task."
      />
    );
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full sm:w-1/2 px-2 sm:px-0">
        <ActionButtons />
        <div className="flex flex-row items-center gap-2 cursor-pointer py-4">
          <FilterDropDown
            buttonText="Filter"
            icon={<IoFilterOutline size={24} color="#3d475c" />}
            items={filterItems}
            selected={filter}
            setSelected={setFilter}
          />
          <FilterDropDown
            buttonText="Sort"
            icon={<FaSort size={24} color="#3d475c" />}
            items={sortItems}
            selected={sort}
            setSelected={setSort}
          />
        </div>

        {renderContent()}
        <p className="text-xs text-gray-400 mt-1">
          Only asc order is available for ordering
        </p>
      </div>
      {isOpen && <CreateTaskModal />}
    </div>
  );
};

export default DashboradPage;
