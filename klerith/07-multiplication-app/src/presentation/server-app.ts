// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/presentation/server-app.ts

// --- Class 82: Refactor Code Logic ---
// --- Class 84: CreateTable, UseCase ---
// --- Class 85: SaveFile, UseCase ---
// --- Class 86: Adding fileName & filePath Argument ---

// Import CreateTable use case from domain layer to handle multiplication logic
import { CreateTable } from "../domain/use-cases/create-table.use-case";

// Import SaveFile use case from domain layer to handle file persistence
import { SaveFile } from "../domain/use-cases/save-file.use-case";

/**
 * Defines the shape of options passed to ServerApp.run().
 *
 * @property base - Numeric base for multiplication table
 * @property limit - Maximum multiplier for table generation
 * @property printTable - Flag to conditionally print table to console
 * @property fileName - Custom name for the output file
 * @property filePath - Custom directory path for the output file
 */
interface RunOptions {
  base: number;
  limit: number;
  printTable: boolean;
  fileName: string;
  filePath: string;
}

/**
 * Presentation layer class responsible for orchestrating application logic.
 *
 * @remarks
 * - Delegates multiplication table generation to the CreateTable use case.
 * - Delegates file persistence to the SaveFile use case.
 * - Accepts extended CLI arguments (fileName, filePath) for flexible output configuration.
 * - Encapsulates execution flow, console output, and file creation status.
 */
export class ServerApp {
  static run({ base, limit, printTable, fileName, filePath }: RunOptions) {
    // Log application startup
    console.log("Server running...");

    // Generate multiplication table string using domain use case
    const table = new CreateTable().execute({ base, limit });

    // Save generated table to file using domain use case with custom fileName and filePath
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileName: fileName,
      filePath: filePath,
    });

    // Conditionally print table to console if --show flag is enabled
    if (printTable) console.log(table);

    // Log result of file creation
    wasCreated
      ? console.log("File created successfully!")
      : console.error("File not created...");
  }
}
