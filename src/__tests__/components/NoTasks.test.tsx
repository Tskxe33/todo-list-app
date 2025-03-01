import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NoTasks from "../../components/NoTasks";

describe("NoTasks", () => {
  it("should render", () => {
    render(<NoTasks text="No tasks" subText="No tasks subtext" />);
    expect(screen.getByText("No tasks")).toBeInTheDocument();
    expect(screen.getByText("No tasks subtext")).toBeInTheDocument();
  });

  it("should render default text", () => {
    render(<NoTasks text="" subText="" />);
    expect(
      screen.getByText("You don't have any tasks yet.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Tap on the blue button to create a new task.")
    ).toBeInTheDocument();
  });
});
