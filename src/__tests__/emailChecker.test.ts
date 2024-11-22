import {
  isEmailBlocked,
  addBlockedEmail,
  addBlockedEmails,
  clearBlockedEmails,
  getBlockedEmails,
} from "../emailChecker";

describe("Email Checker", () => {
  beforeEach(() => {
    clearBlockedEmails();
  });

  describe("isEmailBlocked", () => {
    test("should return true for blocked domain", () => {
      addBlockedEmail("example.com");
      expect(isEmailBlocked("user@example.com")).toBe(true);
    });

    test("should return false for non-blocked domain", () => {
      addBlockedEmail("example.com");
      expect(isEmailBlocked("user@different.com")).toBe(false);
    });

    test("should handle case-insensitive matching", () => {
      addBlockedEmail("Example.Com");
      expect(isEmailBlocked("user@example.com")).toBe(true);
    });

    test("should handle null or undefined email", () => {
      expect(isEmailBlocked(null)).toBe(false);
      expect(isEmailBlocked(undefined)).toBe(false);
    });
  });

  describe("addBlockedEmail", () => {
    test("should add new email to blocked list", () => {
      addBlockedEmail("example.com");
      expect(getBlockedEmails()).toContain("example.com");
    });

    test("should not duplicate existing entries", () => {
      addBlockedEmail("example.com");
      addBlockedEmail("example.com");
      expect(
        getBlockedEmails().filter((e) => e === "example.com")
      ).toHaveLength(1);
    });
  });

  describe("addBlockedEmails", () => {
    test("should add multiple emails to blocked list", () => {
      addBlockedEmails(["example1.com", "example2.com"]);
      expect(getBlockedEmails()).toContain("example1.com");
      expect(getBlockedEmails()).toContain("example2.com");
    });

    test("should handle empty array", () => {
      const initialCount = getBlockedEmails().length;
      addBlockedEmails([]);
      expect(getBlockedEmails()).toHaveLength(initialCount);
    });
  });

  describe("clearBlockedEmails", () => {
    test("should remove all blocked emails", () => {
      addBlockedEmails(["example1.com", "example2.com"]);
      clearBlockedEmails();
      expect(getBlockedEmails()).toHaveLength(0);
    });
  });

  describe("getBlockedEmails", () => {
    test("should return copy of blocked emails array", () => {
      addBlockedEmails(["example1.com", "example2.com"]);
      const blockedEmails = getBlockedEmails();
      blockedEmails.push("example3.com");
      expect(getBlockedEmails()).not.toContain("example3.com");
    });
  });
});
