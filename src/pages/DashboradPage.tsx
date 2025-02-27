import { useEffect, useState } from "react";
import TodoService from "../services/TodoService";
import { Todo } from "../models/todo.model";
import SortableList from "../components/sortable/SortableList";

const DashboradPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await TodoService.getAll(3);
      setTodos(todos);
    };

    fetchTodos();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <SortableList items={todos} setItems={setTodos} />
    </div>
  );
};

export default DashboradPage;
