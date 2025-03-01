import { getBackgroundColor, getTextColor } from "../../utils/Styles";
import { describe, expect, it } from "vitest";

describe("Styles utility functions", () => {
  describe("getBackgroundColor", () => {
    it("should return transparent background classes", () => {
      expect(getBackgroundColor("transparent")).toBe(
        "bg-transparent hover:bg-transparent"
      );
    });

    it("should return primary background classes", () => {
      expect(getBackgroundColor("primary")).toBe(
        "bg-primary hover:bg-primary/80"
      );
    });

    it("should return secondary background classes", () => {
      expect(getBackgroundColor("secondary")).toBe(
        "bg-secondary hover:bg-secondary/80"
      );
    });

    it("should return warning background classes", () => {
      expect(getBackgroundColor("warning")).toBe(
        "bg-warning hover:bg-warning/80"
      );
    });

    it("should return grey background classes", () => {
      expect(getBackgroundColor("grey")).toBe("bg-grey hover:bg-grey/80");
    });

    it("should return danger background classes", () => {
      expect(getBackgroundColor("danger")).toBe("bg-danger hover:bg-danger/80");
    });

    it("should return primary background classes as default", () => {
      expect(getBackgroundColor("nepostojeća-boja")).toBe(
        "bg-primary hover:bg-primary/80"
      );
    });
  });

  describe("getTextColor", () => {
    it("should return primary text classes", () => {
      expect(getTextColor("primary")).toBe(
        "text-primary hover:text-primary/80 hover:border-primary/80"
      );
    });

    it("should return secondary text classes", () => {
      expect(getTextColor("secondary")).toBe(
        "text-secondary hover:text-secondary/80 hover:border-secondary/80"
      );
    });

    it("should return warning text classes", () => {
      expect(getTextColor("warning")).toBe(
        "text-warning hover:text-warning/80 hover:border-warning/80"
      );
    });

    it("should return danger text classes", () => {
      expect(getTextColor("danger")).toBe(
        "text-danger hover:text-danger/80 hover:border-danger/80"
      );
    });

    it("should return white text classes as default", () => {
      expect(getTextColor("nepostojeća-boja")).toBe(
        "text-white hover:text-white/80 hover:border-white/80"
      );
    });
  });
});
