import { Todo } from "../../models/todo.model";
import { FiClock } from "react-icons/fi";
import { FaRegCheckSquare } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";

interface Props {
  item: Todo;
  index: number;
}

const SortableItem = ({ item, index }: Props) => {
  return (
    <div className="flex flex-col gap-6 w-full bg-white py-6 px-4 border-b border-border">
      <div className="flex flex-row gap-5 items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <p className="text-dark font-medium text-lg">{index}.</p>
          <MdDragIndicator
            size={24}
            color="#0090ff"
            className="cursor-grab active:cursor-grabbing handle"
          />
        </div>

        <p className="text-grey">{item.title}</p>
        <div className="flex flex-row gap-1 md:gap-3">
          <button className="bg-primary rounded-md  px-4 py-2 cursor-pointer hover:bg-primary/80 transition-all duration-300">
            <p className="text-white font-semibold text-sm md:text-base">
              Mark as done
            </p>
          </button>
          <button className="bg-danger rounded-md px-4 py-2 cursor-pointer hover:bg-danger/80 transition-all duration-300">
            <p className="text-white font-semibold text-sm md:text-base">
              Delete task
            </p>
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <div className="flex flex-row gap-1 items-center">
          <FiClock size={24} color="#0090ff" />
          <p className="text-dark font-medium text-sm">21:00 15/02/2025</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <FaRegCheckSquare color="#48bd77" size={24} />
          <p className="text-dark font-medium text-sm">completed</p>
        </div>
      </div>
    </div>
  );
};

export default SortableItem;
