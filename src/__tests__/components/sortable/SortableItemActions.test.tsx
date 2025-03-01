import { fireEvent, render, screen } from "@testing-library/react";
import SortableItemActions from "../../../components/sortable/SortableItemActions";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useTasksStore } from "../../../stores/TasksStore";
import { useCloseConfirmationModal } from "../../../hooks/useCloseConfirmationModal";
import { useConfirmationModalStore } from "../../../stores/ConfirmationModalStore";

vi.mock("../../../stores/TasksStore", () => ({
  useTasksStore: vi.fn(),
}));

vi.mock("../../../stores/ConfirmationModalStore", () => ({
  useConfirmationModalStore: vi.fn(),
}));

vi.mock("../../../hooks/useCloseConfirmationModal", () => ({
  useCloseConfirmationModal: vi.fn(),
}));

describe("SortableItemActions", () => {
  const mockSetTasks = vi.fn();
  const mockCloseConfirmationModal = vi.fn();
  const mockToggleConfirmationModal = vi.fn();

  const mockTasks = [
    {
      id: "1",
      title: "Test Task 1",
      completed: false,
      dueDate: "2025-03-01T14:35:10.845Z",
      order: 0,
    },
    {
      id: "2",
      title: "Test Task 2",
      completed: false,
      dueDate: "2025-03-01T14:35:10.845Z",
      order: 1,
    },
  ];

  const item = mockTasks[1];

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useTasksStore).mockReturnValue({
      tasks: mockTasks,
      setTasks: mockSetTasks,
      filter: "all",
      setFilter: vi.fn(),
      sort: "created",
      setSort: vi.fn(),
    });

    vi.mocked(useConfirmationModalStore).mockReturnValue({
      isOpen: true,
      toggleConfirmationModal: mockToggleConfirmationModal,
      modalType: "deleteTask",
      message: "Are you sure you want to delete this task?",
      onConfirm: vi.fn(),
      icon: null,
      confirmButtonText: "Delete",
    });

    vi.mocked(useCloseConfirmationModal).mockReturnValue({
      handleCloseModal: mockCloseConfirmationModal,
    });
  });

  it("renders", () => {
    render(<SortableItemActions item={item} />);
  });

  it("handle mark as done", () => {
    render(<SortableItemActions item={item} />);

    const markAsDoneButton = screen.getByText("Mark as done");
    fireEvent.click(markAsDoneButton);
    const expectedTasks = [
      {
        id: "1",
        title: "Test Task 1",
        completed: false,
        dueDate: "2025-03-01T14:35:10.845Z",
        order: 0,
      },
      {
        id: "2",
        title: "Test Task 2",
        completed: true,
        dueDate: "2025-03-01T14:35:10.845Z",
        order: 1,
      },
    ];

    expect(mockSetTasks).toHaveBeenCalledWith(expectedTasks);
  });
  it("handle delete task", () => {
    render(<SortableItemActions item={item} />);

    const deleteButton = screen.getByText("Delete task");
    fireEvent.click(deleteButton);

    expect(mockToggleConfirmationModal).toHaveBeenCalledWith({
      isOpen: true,
      message: "Are you sure you want to delete this task?",
      modalType: "deleteTask",
      onConfirm: expect.any(Function),
      icon: expect.any(Object),
      confirmButtonText: "Delete",
    });

    const onConfirm = mockToggleConfirmationModal.mock.calls[0][0].onConfirm;
    onConfirm();

    const expectedTasks = [
      {
        id: "1",
        title: "Test Task 1",
        completed: false,
        dueDate: "2025-03-01T14:35:10.845Z",
        order: 0,
      },
    ];

    expect(mockSetTasks).toHaveBeenCalledWith(expectedTasks);
    expect(mockCloseConfirmationModal).toHaveBeenCalled();
  });
});
