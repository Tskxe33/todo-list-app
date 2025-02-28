export const formatTaskDueDate = (date: string): string => {
  const dateObj = new Date(date);
  return `${dateObj.getHours().toString().padStart(2, "0")}:${dateObj
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${dateObj.getDate().toString().padStart(2, "0")}/${(
    dateObj.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${dateObj.getFullYear()}`;
};

export const getMinDateAsTomorrow = () =>
  new Date(new Date().setDate(new Date().getDate() + 1));

export const isTaskInTheFuture = (dueDate: string): boolean => {
  const now = new Date();
  const due = new Date(dueDate);
  return due > now;
};
