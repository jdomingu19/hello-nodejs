// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/presentation/server-app.test.ts

// --- Class 82: Refactor Code Logic ---
// --- Class 84: CreateTable, UseCase ---
// --- Class 85: SaveFile, UseCase ---
// --- Class 86: Adding fileName & filePath Argument ---
// --- Class 100: Testing ServerApp ---
// --- Class 101: Testing ServerApp with Options ---

// Import ServerApp class and related use cases from presentation and domain layers
import { ServerApp } from "./server-app";
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

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

  // Validate behavior when running ServerApp with custom options
  test("Should run ServerApp with options", () => {
    // Arrange: spy on console.log, CreateTable.execute, and SaveFile.execute
    const logSpy = jest.spyOn(console, "log");
    const createTableSpy = jest.spyOn(CreateTable.prototype, "execute");
    const saveFileSpy = jest.spyOn(SaveFile.prototype, "execute");

    const options = {
      base: 9,
      limit: 24,
      printTable: true,
      fileName: "times-table",
      filePath: "outputs",
    };

    // Act: run ServerApp with provided options
    ServerApp.run(options);

    // Assert: verify console output and calls to use cases
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy).toHaveBeenCalledWith("Server running...");
    expect(logSpy).toHaveBeenCalledWith("File created successfully!");
    expect(logSpy).toHaveBeenLastCalledWith("File created successfully!");

    expect(createTableSpy).toHaveBeenCalledTimes(1);
    expect(createTableSpy).toHaveBeenCalledWith({
      base: options.base,
      limit: options.limit,
    });

    expect(saveFileSpy).toHaveBeenCalledTimes(1);
    expect(saveFileSpy).toHaveBeenCalledWith({
      fileContent: expect.any(String),
      filePath: options.filePath,
      fileName: options.fileName,
    });
  });
});
