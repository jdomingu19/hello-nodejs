// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/domain/use-cases/create-table.use-case.ts

// --- Class 84: CreateTable, UseCase ---
// --- Class 94: Testing CreateTable UseCase ---

/**
 * Contract definition for the CreateTable use case.
 *
 * @remarks
 * - Ensures that any implementation provides an execute() method.
 * - The execute() method must accept CreateTableOptions and return a string.
 */
export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

/**
 * Options required to generate a multiplication table.
 *
 * @property base - Numeric base for the multiplication table
 * @property limit - Optional maximum multiplier (defaults to 10 if not provided)
 */
export interface CreateTableOptions {
  base: number;
  limit?: number;
}

/**
 * Concrete implementation of the CreateTable use case.
 *
 * @remarks
 * - Encapsulates the logic to generate a multiplication table as a string.
 * - Accepts a numeric base and an optional limit (default 10).
 * - Iterates from 1 up to the limit, appending each multiplication result.
 * - Joins rows with newline characters for readability.
 * - Returns the complete multiplication table as a formatted string.
 */
export class CreateTable implements CreateTableUseCase {
  constructor() {
    // Dependency Injection (DI) placeholder for future services
  }

  /**
   * Execute the multiplication table generation.
   *
   * @param base - Numeric base for the multiplication table
   * @param limit - Maximum multiplier (defaults to 10 if not provided)
   * @returns A string containing the formatted multiplication table
   */
  public execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage = "";
    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} * ${i} = ${base * i}`;
      if (i < limit) outputMessage += "\n";
    }
    return outputMessage;
  }
}
