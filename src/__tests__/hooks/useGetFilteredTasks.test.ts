import { describe, it, vi, expect } from "vitest";
import { useTasksStore } from "../../stores/TasksStore";
import { renderHook } from "@testing-library/react";
import { useGetFilteredTasks } from "../../hooks/useGetFilteredTasks";

vi.mock("../../stores/TasksStore", () => ({
  useTasksStore: vi.fn(),
}));

describe("useGetFilteredTasks", () => {
  it("should return the filtered tasks", () => {
    const mockTasks = [
      {
        id: "1",
        title: "Test Task",
        completed: false,
        dueDate: new Date().toISOString(),
        order: 1,
      },
      {
        id: "2",
        title: "Test Task 2",
        completed: false,
        dueDate: new Date().toISOString(),
        order: 2,
      },
    ];

    vi.mocked(useTasksStore).mockReturnValue({
      tasks: mockTasks,
      filter: "all",
      sort: "created",
      setFilter: vi.fn(),
      setSort: vi.fn(),
    });

    const { result } = renderHook(() => useGetFilteredTasks());

    expect(result.current.filteredTasks).toEqual(mockTasks);
  });
});
