const { getGitEmail } = require("../gitConfig");
const { execSync } = require("child_process");

jest.mock("child_process");

describe("Git Config", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("getGitEmail", () => {
    test("should return git email when configured", () => {
      execSync.mockReturnValue(Buffer.from("test@example.com\n"));
      expect(getGitEmail()).toBe("test@example.com");
    });

    test("should return null when git command fails", () => {
      execSync.mockImplementation(() => {
        throw new Error("git command failed");
      });
      expect(getGitEmail()).toBeNull();
    });

    test("should trim whitespace from email", () => {
      execSync.mockReturnValue(Buffer.from("  test@example.com  \n"));
      expect(getGitEmail()).toBe("test@example.com");
    });
  });
});
