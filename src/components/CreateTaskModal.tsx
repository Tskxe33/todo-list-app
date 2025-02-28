import { useState } from "react";
import { useCreateTaskModalStore } from "../stores/CreateTaskModalStore";
import { randomPlaceholder } from "../utils/TaskRandomPlaceholder";
import CustomButton from "./CustomButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMinDateAsTomorrow } from "../utils/Dates";
import { useCreateTask } from "../hooks/useCreateTask";

const CreateTaskModal = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [taskTitle, setTaskTitle] = useState("");
  const { toggle } = useCreateTaskModalStore();
  const { handleCreateTask } = useCreateTask(taskTitle, startDate);

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-20">
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
              <span className="text-danger">*</span>Task Title
            </label>
            <input
              id="task-title"
              type="text"
              maxLength={105}
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
              Due Date (optional)
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date || null)}
              dateFormat="dd/MM/yyyy HH:mm"
              showTimeSelect
              timeFormat="HH:mm"
              isClearable
              placeholderText="28/02/2025 10:00"
              shouldCloseOnSelect={false}
              minDate={getMinDateAsTomorrow()}
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
