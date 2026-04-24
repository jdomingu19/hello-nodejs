// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/config/plugins/args.plugin.ts

// --- Class 77: Yargs Package ---
// --- Class 79: Yargs Options ---
// --- Class 80: Yargs Checks ---
// --- Class 86: Adding fileName & filePath Argument ---
// --- Class 98: Testing argv Plugin ---
// --- Class 99: Testing argv Plugin With Custom Values ---

// Import Node.js file system module to validate cleanup of custom folders
import fs from "node:fs";

// Helper function to simulate command-line arguments and import plugin
const runCommand = async (args: string[]) => {
  // Extend process.argv with custom arguments
  process.argv = [...process.argv, ...args];

  // Dynamically import yargs plugin without bin
  const { yargsWithoutBin } = await import("./args.plugin");

  // Return parsed argv object
  return yargsWithoutBin;
};

// Test suite for args.plugin.ts
describe("Test args.plugin.ts", () => {
  // Preserve original process.argv to restore between tests
  const originalArgv = process.argv;

  // Reset process.argv and clear module cache before each test
  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  // Validate default behavior when passing base, limit, and show options
  test("Should return default values", async () => {
    // Arrange: simulate CLI arguments for base, limit, and show
    const argv = await runCommand(["-b", "9", "-l", "24", "-s"]);

    // Assert: verify parsed values and defaults for fileName and filePath
    expect(argv).toEqual(
      expect.objectContaining({
        b: 9,
        l: 24,
        s: true,
        n: "times-table",
        p: "outputs",
      }),
    );
  });

  // Validate behavior when providing custom values for all arguments
  test("Should return configuration with custom values", async () => {
    // Arrange: simulate CLI arguments with custom base, limit, name, and path
    const argv = await runCommand([
      "--base",
      "4",
      "--limit",
      "27",
      "--show",
      "--name",
      "four-times-table",
      "--path",
      "custom-folder",
    ]);

    // Assert: verify parsed values reflect custom configuration
    expect(argv).toEqual(
      expect.objectContaining({
        b: 4,
        l: 27,
        s: true,
        n: "four-times-table",
        p: "custom-folder",
      }),
    );

    // Cleanup: remove custom folder created during test execution
    const customFolderExists = fs.existsSync("custom-folder");
    if (customFolderExists) fs.rmSync("custom-folder", { recursive: true });
  });
});
