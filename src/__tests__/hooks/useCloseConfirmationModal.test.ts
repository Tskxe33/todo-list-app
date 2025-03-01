import { describe, expect, it, vi } from "vitest";
import { useCloseConfirmationModal } from "../../hooks/useCloseConfirmationModal";
import { useConfirmationModalStore } from "../../stores/ConfirmationModalStore";

vi.mock("../../stores/ConfirmationModalStore", () => ({
  useConfirmationModalStore: vi.fn(),
}));

describe("useCloseConfirmationModal", () => {
  it("should close the confirmation modal", () => {
    const mockToggleConfirmationModal = vi.fn();
    vi.mocked(useConfirmationModalStore).mockReturnValue({
      toggleConfirmationModal: mockToggleConfirmationModal,
    });

    const { handleCloseModal } = useCloseConfirmationModal();
    handleCloseModal();

    expect(mockToggleConfirmationModal).toHaveBeenCalledWith({
      isOpen: false,
      modalType: null,
      message: "",
      onConfirm: expect.any(Function),
      icon: null,
      confirmButtonText: "",
    });
  });
});
