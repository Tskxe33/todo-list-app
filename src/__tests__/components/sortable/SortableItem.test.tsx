import { describe, it } from "vitest";
import SortableItem from "../../../components/sortable/SortableItem";
import { render } from "@testing-library/react";
import { Todo } from "../../../models/todo.model";

describe("SortableItem", () => {
  it("renders", () => {
    const item: Todo = {
      id: "1",
      title: "Test",
      completed: false,
      dueDate: new Date().toString(),
      order: 1,
    };

    render(<SortableItem item={item} index={1} />);
  });

  it("renders with completed status", () => {
    const item: Todo = {
      id: "1",
      title: "Test",
      completed: true,
      dueDate: new Date().toString(),
      order: 1,
    };

    render(<SortableItem item={item} index={1} />);
  });
});
