// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/domain/use-cases/save-file.use-case.ts

// --- Class 85: SaveFile, UseCase ---

// Import Node.js file system module for directory and file operations
import fs from "node:fs";

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
 * - Creates the target directory if it does not exist.
 * - Writes the provided content into a .txt file with UTF-8 encoding.
 * - Returns true if the file was successfully created, false otherwise.
 * - Demonstrates error handling by catching exceptions and logging them.
 */
export class SaveFile implements SaveFileUseCase {
  constructor() {
    // Dependency Injection (DI) placeholder for future storage repositories
  }

  public execute({
    fileContent,
    fileName = "times-table",
    filePath = "outputs",
  }: SaveFileOptions): boolean {
    try {
      fs.mkdirSync(filePath, { recursive: true });
      fs.writeFileSync(`${filePath}/${fileName}.txt`, fileContent, {
        encoding: "utf8",
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
