import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCreateTask } from "../../hooks/useCreateTask";
import * as toastify from "../../utils/toastify/danger";

vi.mock("../stores/CreateTaskModalStore", () => ({
  useCreateTaskModalStore: () => ({
    toggle: vi.fn(),
  }),
}));

vi.mock("../stores/TasksStore", () => ({
  useTasksStore: () => ({
    tasks: [],
    setTasks: vi.fn(),
  }),
}));

vi.mock("../../utils/toastify/danger", () => ({
  default: vi.fn(),
}));

vi.mock("../../utils/toastify/success", () => ({
  default: vi.fn(),
}));

describe("useCreateTask", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should show error when title is empty", () => {
    const { result } = renderHook(() => useCreateTask("", null));

    act(() => {
      result.current.handleCreateTask();
    });

    expect(toastify.default).toHaveBeenCalledWith("Please enter a task title");
  });

  it("should show error when date is in the past", () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);

    const { result } = renderHook(() => useCreateTask("Test Task", pastDate));

    act(() => {
      result.current.handleCreateTask();
    });

    expect(toastify.default).toHaveBeenCalledWith(
      "Please select a date and time in the future 🗓️"
    );
  });
});
