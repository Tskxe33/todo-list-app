import { useGenerateTask } from "../../hooks/useGenerateTask";
import { describe, it, vi, expect } from "vitest";
import { useTasksStore } from "../../stores/TasksStore";
import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react";

vi.mock("../../stores/TasksStore", () => ({
  useTasksStore: vi.fn(),
}));

describe("useGenerateTask", () => {
  it("getRandomTask", async () => {
    const mockSetTasks = vi.fn();
    const mockTasks = [
      {
        id: "1",
        title: "Test Task",
        completed: false,
        dueDate: new Date().toISOString(),
        order: 1,
      },
    ];

    vi.mocked(useTasksStore).mockReturnValue({
      tasks: mockTasks,
      setTasks: mockSetTasks,
      filter: "all",
      setFilter: vi.fn(),
      sort: "created",
      setSort: vi.fn(),
    });

    const { result } = renderHook(() => useGenerateTask());

    await act(async () => {
      await result.current.getRandomTask();
    });

    expect(mockSetTasks).toHaveBeenCalled();
  });
});
