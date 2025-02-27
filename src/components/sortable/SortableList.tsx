import { ReactSortable } from "react-sortablejs";
import { Todo } from "../../models/todo.model";
import SortableItem from "./SortableItem";
import successNotification from "../../utils/toastify/success";
interface Props {
  items: Todo[];
  setItems: (items: Todo[]) => void;
}

const SortableList = ({ items, setItems }: Props) => {
  return (
    <ReactSortable
      list={items}
      handle=".handle"
      setList={setItems}
      className="flex flex-col gap-6 justify-center items-center"
      onEnd={(e) =>
        e.oldIndex !== e.newIndex &&
        successNotification("Reordered successfully 🎉")
      }
    >
      {items.map((item, index) => (
        <SortableItem key={item.id} item={item} index={index + 1} />
      ))}
    </ReactSortable>
  );
};

export default SortableList;
