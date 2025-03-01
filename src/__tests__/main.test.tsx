import { describe, expect, it, vi } from "vitest";
import { createRoot } from "react-dom/client";

vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

vi.mock("../App", () => ({
  default: () => null,
}));

describe("Main", () => {
  it("renderuje aplikaciju u root element", async () => {
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);

    await import("../main");

    expect(createRoot).toHaveBeenCalledWith(root);

    expect(
      vi.mocked(createRoot).mock.results[0].value.render
    ).toHaveBeenCalled();
    document.body.removeChild(root);
  });
});
