import { describe, it, vi, expect } from "vitest";
import { toast } from "react-toastify";
import dangerNotification from "../../../utils/toastify/danger";

vi.mock("react-toastify", () => ({
  toast: {
    error: vi.fn(),
  },
  Bounce: {},
}));

describe("dangerNotification", () => {
  it("should call toastify", () => {
    dangerNotification("Test message");

    expect(toast.error).toHaveBeenCalledWith("Test message", {
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
