// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// tests/plugins/get-age.plugin.test.ts

// --- Class 31: Adapter Pattern ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 64: Testing get-age.plugin.ts script with Jest ---

// Import the getAge function from the plugins module
import { getAge } from "../../src/plugins";

// Define the test suite for the get-age.plugin.ts script
describe("plugins/get-age.plugin.ts", () => {
  // Test case: verify that getAge returns a numeric value
  test("getAge() should return the person age", () => {
    // Arrange: set a sample birthdate
    const birthdate = "2004-07-04";

    // Act: call getAge with the birthdate
    const age = getAge(birthdate);

    // Assert: validate that the returned value is a number
    expect(typeof age).toBe("number");
  });

  // Test case: verify that getAge returns the correct current age
  test("getAge() should return the current person age", () => {
    // Arrange: set a sample birthdate
    const birthdate = "2004-07-04";

    // Act: call getAge and calculate expected age manually
    const age = getAge(birthdate);
    const currentAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    // Assert: validate that the returned age matches the expected current age
    expect(age).toBe(currentAge);
  });
});
