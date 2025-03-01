import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AuthLayout from "../../layouts/AuthLayout";
import { useUserStore } from "../../stores/UserStore";

vi.mock("react-router-dom", () => ({
  Navigate: ({ to }: { to: string }) => (
    <div data-testid="navigate" data-to={to}>
      Navigate
    </div>
  ),
  Outlet: () => <div data-testid="outlet">Outlet Content</div>,
}));

vi.mock("../../stores/UserStore", () => ({
  useUserStore: vi.fn(),
}));

describe("AuthLayout", () => {
  it("should redirect to dashboard when user is logged in", () => {
    vi.mocked(useUserStore).mockReturnValue({
      isLoggedIn: true,
    });

    render(<AuthLayout />);

    const navigation = screen.getByTestId("navigate");
    expect(navigation).toBeInTheDocument();
    expect(navigation.getAttribute("data-to")).toBe("/dashboard");
  });

  it("should render outlet when user is not logged in", () => {
    vi.mocked(useUserStore).mockReturnValue({
      isLoggedIn: false,
    });

    render(<AuthLayout />);

    expect(screen.getByTestId("outlet")).toBeInTheDocument();
    expect(screen.queryByTestId("navigate")).not.toBeInTheDocument();
  });
});
