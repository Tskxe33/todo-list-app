import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Header from "../../components/Header";
import { useUserStore } from "../../stores/UserStore";
import { useCloseConfirmationModal } from "../../hooks/useCloseConfirmationModal";
import { useConfirmationModalStore } from "../../stores/ConfirmationModalStore";

vi.mock("../../stores/UserStore", () => ({
  useUserStore: vi.fn(),
}));

vi.mock("../../hooks/useCloseConfirmationModal", () => ({
  useCloseConfirmationModal: vi.fn(),
}));

vi.mock("../../stores/ConfirmationModalStore", () => ({
  useConfirmationModalStore: vi.fn(),
}));

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Header", () => {
  const mockSetIsLoggedIn = vi.fn();
  const mockHandleCloseModal = vi.fn();
  const mockToggleConfirmationModal = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useUserStore).mockReturnValue({
      isLoggedIn: true,
      setIsLoggedIn: mockSetIsLoggedIn,
    });

    vi.mocked(useCloseConfirmationModal).mockReturnValue({
      handleCloseModal: mockHandleCloseModal,
    });

    vi.mocked(useConfirmationModalStore).mockReturnValue({
      isOpen: false,
      toggleConfirmationModal: mockToggleConfirmationModal,
      modalType: "",
      message: "",
      onConfirm: vi.fn(),
      icon: null,
      confirmButtonText: "",
    });
  });

  const renderHeader = () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  };

  it("should render", () => {
    renderHeader();

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("handle logout", () => {
    renderHeader();

    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);
    const onConfirm = mockToggleConfirmationModal.mock.calls[0][0].onConfirm;
    onConfirm();

    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(false);
    expect(mockHandleCloseModal).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/auth/login");
  });
});
