import TasksService from "../services/TasksService";
import { useTasksStore } from "../stores/TasksStore";
import { generateRandomID } from "../utils/Numbers";

export const useGenerateTask = () => {
  const { tasks, setTasks } = useTasksStore();

  const getRandomTask = async () => {
    const response = await TasksService.getRandom();
    setTasks([
      ...tasks,
      { ...response, completed: false, id: generateRandomID() },
    ]);
  };

  return { getRandomTask };
};
