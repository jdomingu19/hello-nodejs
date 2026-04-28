// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/index.test.ts

// --- Class 93: Configurate Jest with TypeScript ---
// --- Class 104: Testing index.ts ---

// Import ServerApp class from presentation layer
import { ServerApp } from "./presentation/server-app";

// Test suite for index.ts entry point
describe("Testing index.ts", () => {
  // Validate that ServerApp.run is called with parsed CLI arguments
  test("Should call ServerApp.run with values", async () => {
    // Arrange: mock ServerApp.run and simulate process.argv with CLI options
    const serverAppRunMock = jest.fn();
    ServerApp.run = serverAppRunMock;
    process.argv = [
      "node",
      "index.ts",
      "-b",
      "9",
      "-l",
      "24",
      "-s",
      "-n",
      "nine-times-table",
      "-p",
      "custom-times-tables",
    ];

    // Act: import index.ts to trigger execution
    await import("./index");

    // Assert: verify that ServerApp.run was called with expected configuration
    expect(serverAppRunMock).toHaveBeenCalledWith({
      base: 9,
      limit: 24,
      printTable: true,
      fileName: "nine-times-table",
      filePath: "custom-times-tables",
    });
  });
});
