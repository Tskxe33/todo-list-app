import { useState } from "react";
import { useModalStore } from "../stores/ModalStore";
import { randomPlaceholder } from "../utils/TaskRandomPlaceholder";
import CustomButton from "./CustomButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTasksStore } from "../stores/TasksStore";
import successNotification from "../utils/toastify/success";
import dangerNotification from "../utils/toastify/danger";

const CreateTaskModal = () => {
  const { toggle } = useModalStore();
  const [startDate, setStartDate] = useState(new Date());
  const [taskTitle, setTaskTitle] = useState("");
  const { tasks, setTasks } = useTasksStore();

  const handleCreateTask = () => {
    if (!taskTitle) {
      dangerNotification("Please enter a task title");
      return;
    }
    setTasks([
      { title: taskTitle, id: tasks.length + 1, completed: false },
      ...tasks,
    ]);
    toggle();
    successNotification("Task created successfully ✅");
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center"
      onClick={toggle}
    >
      <div
        className="bg-white p-6 rounded-lg w-96 max-w-full relative gap-8  flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={toggle}
          className="absolute top-4 right-4 text-grey cursor-pointer"
        >
          ✕
        </button>
        <h2 className="text-xl text-dark font-medium">Create New Task</h2>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="task-title"
              className="text-grey-dark font-medium text-sm"
            >
              Task Title
            </label>
            <input
              id="task-title"
              type="text"
              placeholder={randomPlaceholder()}
              className="border-border border-1 rounded-md p-4 w-full focus:outline-none text-grey-dark"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="task-title"
              className="text-grey-dark font-medium text-sm"
            >
              Due Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date || new Date())}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className="border-border border-1 rounded-md p-4 w-full focus:outline-none text-grey-dark cursor-pointer"
            />
          </div>
        </div>

        <div>
          <CustomButton text="Create" onClick={handleCreateTask} />
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
