// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// tests/js-foundation/05-factory-functions.test.ts

// --- Class 29: Factory Functions Introduction ---
// --- Class 30: Factory Functions Need ---
// --- Class 31: Adapter Pattern ---
// --- Class 32: Applying Factory Constructor ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 62: Testing 05-factory-functions.ts script with Jest ---

// Import the buildMakePerson factory function from the source module
import { buildMakePerson } from "../../src/js-foundation/05-factory-functions";

// Define the test suite for the 05-factory-functions.ts script
describe("js-foundation/05-factory-functions.ts", () => {
  // Mock implementations for dependencies: UUID generator and age calculator
  const getUUIDV4 = () => "22";
  const getAge = () => 42;

  // Test case: verify that buildMakePerson returns a function
  test("buildMakePerson should return a function", () => {
    // Act: call buildMakePerson with mocked dependencies
    const makePerson = buildMakePerson({ getUUIDV4, getAge });

    // Assert: validate that the result is a function
    expect(typeof makePerson).toBe("function");
  });

  // Test case: verify that makePerson creates a person object correctly
  test("makePerson should return a person", () => {
    // Arrange: create a factory function with mocked dependencies
    const makePerson = buildMakePerson({ getUUIDV4, getAge });

    // Act: call the factory with sample input data
    const johnDoe = makePerson({ name: "John Doe", birthdate: "1984-07-26" });

    // Assert: validate that the returned object matches the expected structure
    expect(johnDoe).toEqual({
      id: "22",
      name: "John Doe",
      birthdate: "1984-07-26",
      age: 42,
    });
  });
});
