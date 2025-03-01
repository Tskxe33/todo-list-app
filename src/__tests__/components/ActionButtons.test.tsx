import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ActionButtons from "../../components/ActionButtons";
import { useConfirmationModalStore } from "../../stores/ConfirmationModalStore";
import { useTasksStore } from "../../stores/TasksStore";
import { useCloseConfirmationModal } from "../../hooks/useCloseConfirmationModal";
import { Todo } from "../../models/todo.model";
import { useGenerateTask } from "../../hooks/useGenerateTask";

vi.mock("../../stores/ConfirmationModalStore", () => ({
  useConfirmationModalStore: vi.fn(),
}));

vi.mock("../../stores/TasksStore", () => ({
  useTasksStore: vi.fn(),
}));

vi.mock("../../hooks/useCloseConfirmationModal", () => ({
  useCloseConfirmationModal: vi.fn(),
}));

vi.mock("../../hooks/useGenerateTask", () => ({
  useGenerateTask: vi.fn(),
}));

describe("ActionButtons", () => {
  const mockSetTasks = vi.fn();
  const mockToggleConfirmationModal = vi.fn();
  const mockCloseConfirmationModal = vi.fn();
  const mockGenerateTask = vi.fn();
  const mockTasks: Todo[] = [
    {
      id: "1",
      title: "Test Task",
      completed: false,
      dueDate: new Date().toISOString(),
      order: 1,
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderActionButtons = () => {
    vi.mocked(useTasksStore).mockReturnValue({
      tasks: mockTasks,
      setTasks: mockSetTasks,
      filter: "all",
      setFilter: vi.fn(),
      sort: "created",
      setSort: vi.fn(),
    });

    vi.mocked(useConfirmationModalStore).mockReturnValue({
      isOpen: false,
      modalType: null,
      message: "",
      confirmButtonText: "",
      onConfirm: vi.fn(),
      icon: null,
      toggleConfirmationModal: mockToggleConfirmationModal,
    });

    vi.mocked(useCloseConfirmationModal).mockReturnValue({
      handleCloseModal: mockCloseConfirmationModal,
    });

    vi.mocked(useGenerateTask).mockReturnValue({
      getRandomTask: mockGenerateTask,
      loading: false,
    });
    return render(
      <BrowserRouter>
        <ActionButtons />
      </BrowserRouter>
    );
  };

  it("delete all tasks otvara confirmation modal i briše sve taskove", () => {
    renderActionButtons();

    const deleteButton = screen.getByText("Delete All Tasks");
    fireEvent.click(deleteButton);

    expect(mockToggleConfirmationModal).toHaveBeenCalledWith({
      isOpen: true,
      message: "Are you sure you want to delete all tasks?",
      modalType: "deleteAllTasks",
      onConfirm: expect.any(Function),
      icon: expect.any(Object),
      confirmButtonText: "Delete All Tasks",
    });

    const onConfirm = mockToggleConfirmationModal.mock.calls[0][0].onConfirm;
    onConfirm();

    const confirmButton = screen.getByText("Delete All Tasks");
    fireEvent.click(confirmButton);

    expect(mockSetTasks).toHaveBeenCalledWith([]);
    expect(mockCloseConfirmationModal).toHaveBeenCalled();
  });

  it("Generate new task loading icon is visible", () => {
    renderActionButtons();

    expect(screen.getByTestId("random-icon")).toBeInTheDocument();

    vi.mocked(useGenerateTask).mockReturnValue({
      getRandomTask: mockGenerateTask,
      loading: true,
    });

    const generateButton = screen.getByText("Generate Task");
    fireEvent.click(generateButton);

    render(
      <BrowserRouter>
        <ActionButtons />
      </BrowserRouter>
    );

    expect(screen.getByTestId("loading-icon")).toBeInTheDocument();
  });
});
