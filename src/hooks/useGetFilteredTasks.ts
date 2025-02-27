import { SortValues } from "../constants/FilterValues";

import { FilterValues } from "../constants/FilterValues";
import { useTasksStore } from "../stores/TasksStore";

export const useGetFilteredTasks = () => {
  const { tasks, filter, sort } = useTasksStore();

  const filteredTasks = tasks.filter((task) => {
    if (filter === FilterValues.COMPLETED) return task.completed;
    return true;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    switch (sort) {
      case SortValues.ORDER:
        return a.order - b.order;
      case SortValues.ORDER_DESC:
        return b.order - a.order;
      case SortValues.DATE_ASC:
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      case SortValues.DATE_DESC:
        return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
      default:
        return 0;
    }
  });

  return { sortedTasks, filteredTasks };
};
