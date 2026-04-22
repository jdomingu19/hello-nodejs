// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/domain/use-cases/save-file.use-case.test.ts

// --- Class 85: SaveFile, UseCase ---
// --- Class 86: Adding fileName & filePath Argument ---
// --- Class 95: Testing SaveFile UseCase ---
// --- Class 96: Testing SaveFile UseCase Custom Values ---
// --- Class 97: SpyOn & Mock Implementation ---

// Import Node.js file system module to validate file creation and cleanup
import fs from "node:fs";

// Import SaveFile use case from domain layer to handle file persistence
import { SaveFile } from "./save-file.use-case";

// Test suite for SaveFile use case
describe("SaveFileUseCase", () => {
  // Define custom options for file persistence with custom name and path
  const customOptions = {
    fileContent: "Custom content",
    filePath: "custom-path/file-path",
    fileName: "custom-times-table",
  };

  // Build expected file path string for custom options
  const customFilePath = `${customOptions.filePath}/${customOptions.fileName}.txt`;

  // Cleanup both default and custom output directories after each test
  afterEach(() => {
    const outputFolderExists = fs.existsSync("outputs");
    if (outputFolderExists) fs.rmSync("outputs", { recursive: true });

    const customOutputFolderExists = fs.existsSync(customOptions.filePath);
    if (customOutputFolderExists)
      fs.rmSync(customOptions.filePath, { recursive: true });
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

  // Validate behavior when custom fileName and filePath are provided
  test("Should save file with custom values", () => {
    // Arrange: instantiate SaveFile with custom options
    const saveFile = new SaveFile();

    // Act: execute SaveFile use case with custom fileName and filePath
    const result = saveFile.execute(customOptions);

    // Assert: verify file creation, existence, and content integrity
    const fileExists = fs.existsSync(customFilePath);
    const fileContent = fs.readFileSync(customFilePath, { encoding: "utf-8" });

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(customOptions.fileContent);
  });

  // Validate behavior when directory creation fails
  test("Should return false if directory could not be created", () => {
    // Arrange: mock fs.mkdirSync to throw a custom error
    const saveFile = new SaveFile();
    const mkdirSyncSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("This is a custom error message for testing!");
    });

    // Act: execute SaveFile use case with custom options
    const result = saveFile.execute(customOptions);

    // Assert: verify that execution returns false on error
    expect(result).toBe(false);

    // Cleanup: restore original fs.mkdirSync implementation
    mkdirSyncSpy.mockRestore();
  });

  // Validate behavior when file writing fails
  test("Should return false if file could not be created", () => {
    // Arrange: mock fs.writeFileSync to throw a custom error
    const saveFile = new SaveFile();
    const writeFileSyncSpy = jest
      .spyOn(fs, "writeFileSync")
      .mockImplementation(() => {
        throw new Error("This is a custom-writing error message for testing!");
      });

    // Act: execute SaveFile use case with default options
    const result = saveFile.execute({ fileContent: customOptions.fileContent });

    // Assert: verify that execution returns false on error
    expect(result).toBe(false);

    // Cleanup: restore original fs.writeFileSync implementation
    writeFileSyncSpy.mockRestore();
  });
});
