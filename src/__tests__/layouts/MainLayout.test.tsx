import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MainLayout from "../../layouts/MainLayout";
import { render } from "@testing-library/react";

vi.mock("react-router-dom", () => ({
  Outlet: () => <div data-testid="outlet">Outlet Content</div>,
  useNavigate: () => vi.fn(),
  Link: ({ children }: { children: React.ReactNode }) => (
    <a href="/">{children}</a>
  ),
}));

describe("MainLayout", () => {
  it("should render complete layout structure", () => {
    render(<MainLayout />);

    expect(screen.getByTestId("main-layout")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
