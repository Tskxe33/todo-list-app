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
        { ...response, completed: false, id: generateRandomID() },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { getRandomTask, loading };
};
