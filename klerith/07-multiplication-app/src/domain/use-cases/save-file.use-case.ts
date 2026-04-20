// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/domain/use-cases/save-file.use-case.ts

// --- Class 85: SaveFile, UseCase ---
// --- Class 86: Adding fileName & filePath Argument ---
// --- Class 96: Testing SaveFile UseCase Custom Values ---

// Import Node.js file system module for directory and file operations
import fs from "node:fs";

// Import Node.js path module to safely compose directory and file paths
import path from "node:path";

/**
 * Contract definition for the SaveFile use case.
 *
 * @remarks
 * - Ensures that any implementation provides an execute() method.
 * - The execute() method must accept SaveFileOptions and return a boolean.
 * - Boolean return value indicates success (true) or failure (false).
 */
export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

/**
 * Options required to save a file to disk.
 *
 * @property fileContent - String content to be written into the file
 * @property fileName - Optional name of the file (defaults to 'times-table')
 * @property filePath - Optional directory path where the file will be saved (defaults to 'outputs')
 */
export interface SaveFileOptions {
  fileContent: string;
  fileName?: string;
  filePath?: string;
}

/**
 * Concrete implementation of the SaveFile use case.
 *
 * @remarks
 * - Encapsulates the logic to persist string content into a file.
 * - Accepts optional fileName and filePath arguments with defaults.
 * - Ensures the target directory exists before writing the file.
 * - Writes content synchronously with UTF-8 encoding.
 * - Returns true if the file was successfully created, false otherwise.
 * - Demonstrates basic error handling by catching exceptions and logging them.
 */
export class SaveFile implements SaveFileUseCase {
  constructor() {
    // Dependency Injection (DI) placeholder for future storage repositories
  }

  /**
   * Execute the file persistence operation.
   *
   * @param fileContent - String content to be written into the file
   * @param fileName - Optional name of the file (defaults to 'times-table')
   * @param filePath - Optional directory path where the file will be saved (defaults to 'outputs')
   * @returns Boolean indicating success (true) or failure (false)
   */
  public execute({
    fileContent,
    fileName = "times-table",
    filePath = "outputs",
  }: SaveFileOptions): boolean {
    try {
      // Ensure directory exists before writing file
      fs.mkdirSync(filePath, { recursive: true });

      // Write file content with UTF-8 encoding
      fs.writeFileSync(`${filePath}/${fileName}.txt`, fileContent);

      return true;
    } catch (error) {
      // Log error and return false to indicate failure
      console.error(error);
      return false;
    }
  }
}
