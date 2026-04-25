// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/presentation/server-app.test.ts

// --- Class 82: Refactor Code Logic ---
// --- Class 84: CreateTable, UseCase ---
// --- Class 85: SaveFile, UseCase ---
// --- Class 86: Adding fileName & filePath Argument ---
// --- Class 100: Testing ServerApp ---

// Import ServerApp class from presentation layer
import { ServerApp } from "./server-app";

// Test suite for server-app.ts
describe("Testing server-app.ts", () => {
  // Validate that ServerApp can be instantiated and exposes run method
  test("Should create a ServerApp instance", () => {
    // Arrange & Act: instantiate ServerApp
    const serverApp = new ServerApp();

    // Assert: verify instance type and existence of run method
    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe("function");
  });
});
