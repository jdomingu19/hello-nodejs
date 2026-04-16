// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/presentation/server-app.ts

// --- Class 82: Refactor Code Logic ---
// --- Class 84: CreateTable, UseCase ---

// Import CreateTable use case from domain layer to handle multiplication logic
import { CreateTable } from "../domain/use-cases/create-table.use-case";

/**
 * Defines the shape of options passed to ServerApp.run().
 *
 * @property base - Numeric base for multiplication table
 * @property limit - Maximum multiplier for table generation
 * @property printTable - Flag to conditionally print table to console
 */
interface RunOptions {
  base: number;
  limit: number;
  printTable: boolean;
}

/**
 * Presentation layer class responsible for orchestrating application logic.
 *
 * @remarks
 * - Delegates multiplication table generation to the domain use case (CreateTable).
 * - Encapsulates execution flow and console output.
 * - Demonstrates separation of concerns between presentation and domain layers.
 */
export class ServerApp {
  static run({ base, limit, printTable }: RunOptions) {
    console.log("Server running...");
    const table = new CreateTable().execute({ base, limit });
    if (printTable) console.log(table);
  }
}
