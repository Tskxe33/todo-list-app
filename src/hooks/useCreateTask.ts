import { useModalStore } from "../stores/ModalStore";
import { useTasksStore } from "../stores/TasksStore";
import { isTaskInTheFuture } from "../utils/Dates";
import dangerNotification from "../utils/toastify/danger";
import successNotification from "../utils/toastify/success";

export const useCreateTask = (title: string, startDate: Date | null) => {
  const { toggle } = useModalStore();
  const { tasks, setTasks } = useTasksStore();

  const generateRandomID = () => Math.random().toString(36).substring(2, 15);

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
