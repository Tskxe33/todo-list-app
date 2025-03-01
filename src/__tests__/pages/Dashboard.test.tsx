import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import DashboradPage from "../../pages/DashboardPage";
import { fireEvent, render, screen } from "@testing-library/react";
import { useTasksStore } from "../../stores/TasksStore";
import { useGetFilteredTasks } from "../../hooks/useGetFilteredTasks";
import { useCreateTaskModalStore } from "../../stores/CreateTaskModalStore";
import { useConfirmationModalStore } from "../../stores/ConfirmationModalStore";

vi.mock("../../stores/CreateTaskModalStore", () => ({
  useCreateTaskModalStore: vi.fn(),
}));

vi.mock("../../stores/TasksStore", () => ({
  useTasksStore: vi.fn(),
}));

vi.mock("../../hooks/useGetFilteredTasks", () => ({
  useGetFilteredTasks: vi.fn(),
}));

vi.mock("../../stores/ConfirmationModalStore", () => ({
  useConfirmationModalStore: vi.fn(),
}));

describe("Dashboard Page", () => {
  const mockTasks = [
    {
      id: "1",
      title: "Test Task",
      completed: false,
      dueDate: null,
      order: 0,
    },
  ];

  beforeEach(() => {
    vi.mocked(useCreateTaskModalStore).mockReturnValue({
      isOpen: false,
      toggle: vi.fn(),
    });

    vi.mocked(useConfirmationModalStore).mockReturnValue({
      isOpen: false,
      toggle: vi.fn(),
    });

    vi.mocked(useTasksStore).mockReturnValue({
      tasks: [],
      setTasks: vi.fn(),
      filter: "all",
      setFilter: vi.fn(),
      sort: "created",
      setSort: vi.fn(),
    });

    vi.mocked(useGetFilteredTasks).mockReturnValue({
      sortedTasks: [],
      filteredTasks: [],
    });
  });

  const renderDashboardPage = () => {
    return render(
      <BrowserRouter>
        <DashboradPage />
      </BrowserRouter>
    );
  };

  it("ordering-text is rendering when there are tasks", () => {
    vi.mocked(useTasksStore).mockReturnValue({
      tasks: mockTasks,
      setTasks: vi.fn(),
      filter: "all",
      setFilter: vi.fn(),
      sort: "created",
      setSort: vi.fn(),
    });

    vi.mocked(useGetFilteredTasks).mockReturnValue({
      sortedTasks: mockTasks,
      filteredTasks: mockTasks,
    });

    renderDashboardPage();
    expect(screen.getByTestId("ordering-text")).toBeInTheDocument();
  });

  it("No Tasks is rendering when tasks array is empty", () => {
    vi.mocked(useTasksStore).mockReturnValue({
      tasks: [],
      setTasks: vi.fn(),
      filter: "all",
      setFilter: vi.fn(),
      sort: "created",
      setSort: vi.fn(),
    });

    vi.mocked(useGetFilteredTasks).mockReturnValue({
      sortedTasks: [],
      filteredTasks: [],
    });

    renderDashboardPage();

    expect(
      screen.getByText("You don't have any tasks yet.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Tap on the blue button to create a new task.")
    ).toBeInTheDocument();
  });

  it("No tasks is rendering by default", () => {
    renderDashboardPage();

    expect(
      screen.getByText("You don't have any tasks yet.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Tap on the blue button to create a new task.")
    ).toBeInTheDocument();
  });

  it("No completed tasks is rendering when there are tasks but no filtered tasks", () => {
    vi.mocked(useTasksStore).mockReturnValue({
      tasks: mockTasks,
      setTasks: vi.fn(),
      filter: "completed",
      setFilter: vi.fn(),
      sort: "created",
      setSort: vi.fn(),
    });

    vi.mocked(useGetFilteredTasks).mockReturnValue({
      sortedTasks: [],
      filteredTasks: [],
    });

    renderDashboardPage();

    expect(
      screen.getByText("You don't have any completed tasks yet.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Tap Mark as done to complete a task.")
    ).toBeInTheDocument();
  });

  it("prikazuje SortableList kada ima i taskova i filtriranih taskova", () => {
    vi.mocked(useTasksStore).mockReturnValue({
      tasks: mockTasks,
      setTasks: vi.fn(),
      filter: "all",
      setFilter: vi.fn(),
      sort: "created",
      setSort: vi.fn(),
    });

    vi.mocked(useGetFilteredTasks).mockReturnValue({
      sortedTasks: mockTasks,
      filteredTasks: mockTasks,
    });

    renderDashboardPage();

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("create task modal is open when button is clicked", () => {
    vi.mocked(useCreateTaskModalStore).mockReturnValue({
      isOpen: true,
      toggle: vi.fn(),
    });

    renderDashboardPage();

    const createTaskButton = screen.getByText("Create Task");
    fireEvent.click(createTaskButton);

    expect(screen.getByText("Create New Task")).toBeInTheDocument();
  });

  it("confirmation modal is open", () => {
    vi.mocked(useConfirmationModalStore).mockReturnValue({
      isOpen: true,
      toggle: vi.fn(),
    });

    renderDashboardPage();

    expect(screen.getByTestId("confirmation-modal")).toBeInTheDocument();
  });
});
