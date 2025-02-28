import { SortValues } from "../constants/FilterValues";

import { FilterValues } from "../constants/FilterValues";
import { useTasksStore } from "../stores/TasksStore";
import { isTaskInTheFuture } from "../utils/Dates";

export const useGetFilteredTasks = () => {
  const { tasks, filter, sort } = useTasksStore();

  const filteredTasks = tasks.filter((task) => {
    if (filter === FilterValues.COMPLETED) return task.completed;
    if (filter === FilterValues.ACTIVE)
      return task.dueDate === null || isTaskInTheFuture(task.dueDate);
    return true;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    switch (sort) {
      case SortValues.ORDER:
        return a.order - b.order;
      case SortValues.ORDER_DESC:
        return b.order - a.order;
      case SortValues.DATE_ASC:
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      case SortValues.DATE_DESC:
        if (!a.dueDate) return -1;
        if (!b.dueDate) return 1;
        return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
      default:
        return 0;
    }
  });

  return { sortedTasks, filteredTasks };
};
