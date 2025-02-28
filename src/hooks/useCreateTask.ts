import { useCreateTaskModalStore } from "../stores/CreateTaskModalStore";
import { useTasksStore } from "../stores/TasksStore";
import { isTaskInTheFuture } from "../utils/Dates";
import { generateRandomID } from "../utils/Numbers";
import dangerNotification from "../utils/toastify/danger";
import successNotification from "../utils/toastify/success";

export const useCreateTask = (title: string, startDate: Date | null) => {
  const { toggle } = useCreateTaskModalStore();
  const { tasks, setTasks } = useTasksStore();

  const handleCreateTask = () => {
    if (!title) {
      dangerNotification("Please enter a task title");
      return;
    }

    if (startDate && !isTaskInTheFuture(startDate.toString())) {
      dangerNotification("Please select a date and time in the future 🗓️");
      return;
    }

    setTasks([
      ...tasks,
      {
        title,
        id: generateRandomID(),
        completed: false,
        dueDate: startDate?.toString() || null,
        order: tasks.length,
      },
    ]);
    toggle();
    successNotification("Task created successfully ✅");
  };

  return { handleCreateTask };
};
