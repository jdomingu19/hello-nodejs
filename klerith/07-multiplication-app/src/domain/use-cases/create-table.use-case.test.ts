// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/domain/use-cases/create-table.use-case.test.ts

// --- Class 84: CreateTable, UseCase ---
// --- Class 94: Testing CreateTable UseCase ---

// Import CreateTable use case from domain layer to generate multiplication tables
import { CreateTable } from "./create-table.use-case";

// Test suite for CreateTable use case
describe("CreateTableUseCase", () => {
  // Validate default behavior with base 9 and limit 24
  test("Should create table with default values", () => {
    // Arrange: instantiate CreateTable
    const createTable = new CreateTable();

    // Act: execute use case with base 9 and limit 24
    const nineTimesTable = createTable.execute({ base: 9, limit: 24 });
    const rows = nineTimesTable.split("\n").length;

    // Assert: verify instance type, expected rows, and specific results
    expect(createTable).toBeInstanceOf(CreateTable);
    expect(nineTimesTable).toContain("9 * 3 = 27");
    expect(nineTimesTable).toContain("9 * 24 = 216");
    expect(rows).toBe(24);
  });

  // Validate custom options passed to CreateTable
  test("Should create table with custom values", () => {
    // Arrange: define custom options
    const options = { base: 9, limit: 24 };

    // Act: execute use case with custom options
    const myCustomTimesTable = new CreateTable().execute(options);
    const rows = myCustomTimesTable.split("\n");

    // Assert: verify last row, row count, and consistency
    expect(myCustomTimesTable).toContain(
      `${options.base} * ${options.limit} = ${options.base * options.limit}`,
    );
    expect(rows.filter((row) => row.startsWith(`${options.base}`)).length).toBe(
      options.limit,
    );
    expect(rows.length).toBe(options.limit);
  });
});
