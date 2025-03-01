import { describe, expect, it, vi } from "vitest";
import { useConfirmationModalStore } from "../../stores/ConfirmationModalStore";

describe("ConfirmationModalStore", () => {
  it("should update state with provided modal config", () => {
    const store = useConfirmationModalStore.getState();
    const mockOnConfirm = vi.fn();

    store.toggleConfirmationModal({
      isOpen: true,
      modalType: "delete",
      message: "Test message",
      onConfirm: mockOnConfirm,
      confirmButtonText: "Confirm",
    });

    const newState = useConfirmationModalStore.getState();

    expect(newState.isOpen).toBe(true);
    expect(newState.modalType).toBe("delete");
    expect(newState.message).toBe("Test message");
    expect(newState.onConfirm).toBe(mockOnConfirm);
    expect(newState.confirmButtonText).toBe("Confirm");
  });
});
