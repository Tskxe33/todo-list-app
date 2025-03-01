/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProtectedRoute from "../../routes/ProtectedRoute";
import { useUserStore } from "../../stores/UserStore";
import { Navigate } from "react-router-dom";

vi.mock("react-router-dom", () => ({
  Navigate: vi.fn(() => null),
}));

vi.mock("../../stores/UserStore", () => ({
  useUserStore: vi.fn(),
}));

describe("ProtectedRoute", () => {
  const TestChild = () => <div>Protected Content</div>;

  it("should render children when user is logged in", () => {
    vi.mocked(useUserStore).mockReturnValue({
      isLoggedIn: true,
    } as any);

    render(
      <ProtectedRoute>
        <TestChild />
      </ProtectedRoute>
    );

    expect(screen.getByText("Protected Content")).toBeInTheDocument();
    expect(Navigate).not.toHaveBeenCalled();
  });
});
