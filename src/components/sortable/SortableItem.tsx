import { Todo } from "../../models/todo.model";
import { MdDragIndicator } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface Props {
  item: Todo;
}

const SortableItem = ({ item }: Props) => {
  return (
    <div>
      <MdDragIndicator size={20} />
      <p>{item.title}</p>
      <div>
        <FaRegCheckSquare size={20} />
        <MdDelete size={20} />
      </div>
    </div>
  );
};

export default SortableItem;
