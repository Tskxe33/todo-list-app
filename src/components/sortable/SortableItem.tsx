import { Todo } from "../../models/todo.model";
import { FiClock } from "react-icons/fi";
import { FaRegCheckSquare } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
import { formatTaskDueDate, isTaskInTheFuture } from "../../utils/Dates";
import { useTasksStore } from "../../stores/TasksStore";
import { SortValues } from "../../constants/FilterValues";
import { FiFlag } from "react-icons/fi";
import SortableItemActions from "./SortableItemActions";

interface Props {
  item: Todo;
  index: number;
}

const SortableItem = ({ item, index }: Props) => {
  const { sort } = useTasksStore();
  const isActive = item.dueDate === null || isTaskInTheFuture(item.dueDate);

  return (
    <div className="flex flex-col gap-6 w-full bg-white py-6 px-4 border-b border-border">
      <div className="flex flex-row gap-5 items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <p className="text-dark font-medium text-lg">{index}.</p>

          {sort === SortValues.ORDER && (
            <MdDragIndicator
              size={24}
              color="#0090ff"
              className="cursor-grab active:cursor-grabbing handle"
            />
          )}
        </div>

        <p className="text-grey">{item.title}</p>
        <SortableItemActions item={item} />
      </div>
      <div className="flex flex-row gap-3 items-center">
        {item.dueDate && (
          <div className="flex flex-row gap-1 items-center">
            <FiClock size={24} color="#0090ff" />
            <p className="text-dark font-medium text-sm">
              {formatTaskDueDate(item.dueDate)}
            </p>
          </div>
        )}
        {item.completed && (
          <div className="flex flex-row gap-1 items-center">
            <FaRegCheckSquare color="#48bd77" size={24} />
            <p className="text-dark font-medium text-sm">completed</p>
          </div>
        )}
        {isActive && (
          <div className="flex flex-row gap-1 items-center">
            <FiFlag color="#ff9141" size={24} />
            <p className="text-dark font-medium text-sm">active</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortableItem;
