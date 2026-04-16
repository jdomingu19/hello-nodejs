// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/presentation/server-app.ts

// --- Class 82: Refactor Code Logic ---

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
 * Presentation layer class responsible for running the application.
 *
 * @remarks
 * - Encapsulates program execution logic in a static run() method.
 * - Receives validated CLI arguments through RunOptions.
 * - Provides a clear separation of concerns between entry point and business logic.
 */
export class ServerApp {
  static run(options: RunOptions) {
    console.log("Server running...");
    console.log({ options });
  }
}
