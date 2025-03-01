import { describe, it, vi, expect } from "vitest";
import successNotification from "../../../utils/toastify/success";
import { toast } from "react-toastify";

vi.mock("react-toastify", () => ({
  toast: {
    success: vi.fn(),
  },
  Bounce: {},
}));

describe("successNotification", () => {
  it("should call toastify", () => {
    successNotification("Test message");

    expect(toast.success).toHaveBeenCalledWith("Test message", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: expect.any(Object),
    });
  });
});
