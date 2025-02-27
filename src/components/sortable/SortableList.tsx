import { ReactSortable } from "react-sortablejs";
import { Todo } from "../../models/todo.model";
import SortableItem from "./SortableItem";
import successNotification from "../../utils/toastify/success";
import { useTasksStore } from "../../stores/TasksStore";
import { SortValues } from "../../constants/FilterValues";
interface Props {
  items: Todo[];
  setItems: (items: Todo[]) => void;
}

const SortableList = ({ items, setItems }: Props) => {
  const { sort } = useTasksStore();

  const handleOrderChange = (newState: Todo[]) => {
    const updatedItems = newState.map((item, index) => ({
      ...item,
      order: index,
    }));
    setItems(updatedItems);
  };

  return (
    <ReactSortable
      list={items}
      handle=".handle"
      disabled={sort !== SortValues.ORDER}
      setList={handleOrderChange}
      className="flex flex-col gap-6 justify-center items-center"
      onEnd={() => successNotification("Reordered successfully 🎉")}
    >
      {items.map((item, index) => (
        <SortableItem key={item.id} item={item} index={index + 1} />
      ))}
    </ReactSortable>
  );
};

export default SortableList;
