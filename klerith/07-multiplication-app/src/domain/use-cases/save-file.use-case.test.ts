// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/domain/use-cases/save-file.use-case.test.ts

// --- Class 85: SaveFile, UseCase ---
// --- Class 86: Adding fileName & filePath Argument ---
// --- Class 95: Testing SaveFile UseCase ---

// Import Node.js file system module to validate file creation and cleanup
import fs from "node:fs";

// Import SaveFile use case from domain layer to handle file persistence
import { SaveFile } from "./save-file.use-case";

// Test suite for SaveFile use case
describe("SaveFileUseCase", () => {
  // Cleanup outputs directory after each test to avoid side effects
  afterEach(() => {
    fs.rmSync("outputs", { recursive: true });
  });

  // Validate default behavior when no fileName or filePath are provided
  test("Should save file with default values", () => {
    // Arrange: instantiate SaveFile and define default options
    const saveFile = new SaveFile();
    const filePath = "outputs/times-table.txt";
    const options = {
      fileContent: "Test content",
    };

    // Act: execute SaveFile use case with default options
    const result = saveFile.execute(options);

    // Assert: verify file creation, existence, and content integrity
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);
    expect(typeof fileContent === "string").toBe(true);
  });
});
