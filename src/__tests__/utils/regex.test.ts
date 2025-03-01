import { isValidEmail } from "../../utils/regex";
import { describe, expect, it } from "vitest";

describe("regex utils", () => {
  describe("isValidEmail", () => {
    it("should return true for valid email addresses", () => {
      const validEmails = ["petro@dev.com", "test123@dev.com"];

      validEmails.forEach((email) => {
        expect(isValidEmail(email)).toBe(true);
      });
    });

    it("should return false for invalid email addresses", () => {
      const invalidEmails = ["", "test", "test space@domain.com"];

      invalidEmails.forEach((email) => {
        expect(isValidEmail(email)).toBe(false);
      });
    });
  });
});
