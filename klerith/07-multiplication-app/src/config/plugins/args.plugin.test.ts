// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/config/plugins/args.plugin.ts

// --- Class 77: Yargs Package ---
// --- Class 79: Yargs Options ---
// --- Class 80: Yargs Checks ---
// --- Class 86: Adding fileName & filePath Argument ---
// --- Class 98: Testing argv Plugin ---

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
});
