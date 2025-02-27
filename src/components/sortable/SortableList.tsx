import { ReactSortable } from "react-sortablejs";
import { Todo } from "../../models/todo.model";
import SortableItem from "./SortableItem";

interface Props {
  items: Todo[];
  setItems: (items: Todo[]) => void;
}

const SortableList = ({ items, setItems }: Props) => {
  return (
    <ReactSortable list={items} setList={setItems}>
      {items.map((item) => (
        <SortableItem key={item.id} item={item} />
      ))}
    </ReactSortable>
  );
};

export default SortableList;
