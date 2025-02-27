import { useEffect } from "react";
import TasksService from "../services/TasksService";
import { useTasksStore } from "../stores/TasksStore";

export const useFetchTasks = () => {
  const { setTasks } = useTasksStore();

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await TasksService.getAll(3);
      setTasks(todos);
    };

    fetchTodos();
  }, [setTasks]);
};
