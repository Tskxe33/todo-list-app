import { useState } from "react";
import TasksService from "../services/TasksService";
import { useTasksStore } from "../stores/TasksStore";
import { generateRandomID } from "../utils/Numbers";

export const useGenerateTask = () => {
  const { tasks, setTasks } = useTasksStore();
  const [loading, setLoading] = useState(false);

  const getRandomTask = async () => {
    try {
      setLoading(true);
      const response = await TasksService.getRandom();
      setTasks([
        ...tasks,
        {
          title: response.title,
          id: generateRandomID(),
          completed: false,
          dueDate: null,
          order: tasks.length,
        },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { getRandomTask, loading };
};
