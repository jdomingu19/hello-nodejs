// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/domain/use-cases/create-table.use-case.ts

// --- Class 84: CreateTable, UseCase ---

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
 * - Generates a multiplication table string based on provided options.
 * - Applies Dependency Injection (DI) principles for future extensibility.
 * - Defaults limit to 10 when not explicitly passed.
 */
export class CreateTable implements CreateTableUseCase {
  constructor() {
    // Dependency Injection (DI) placeholder for future services
  }

  public execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage = "";
    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} * ${i} = ${base * i}\n`;
    }
    return outputMessage;
  }
}
