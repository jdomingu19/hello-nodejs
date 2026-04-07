// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// tests/index.test.ts

// --- Class 55: Configurate Testing Environment ---
// --- Class 57: AAA Testing Pattern (Arrange, Act, Assert) ---

// The test suite groups related test cases under the "Index" description
describe("Index", () => {
  // Each test case validates a specific behavior or expectation
  test("Should be 42", () => {
    // 1. Arrange: Prepare the initial data or state needed for the test
    const number1: number = 16;
    const number2: number = 26;

    // 2. Act: Execute the functionality being tested
    const result = number1 + number2;

    // 3. Assert: Verify that the outcome matches the expected value
    expect(result).toBe(42);
  });
});
