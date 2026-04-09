// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// tests/plugins/get-uuidv4.plugin.tests.ts

// --- Class 31: Adapter Pattern ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 66: Testing get-uuidv4.plugin.ts script with Jest ---

// Import the getUUIDV4 function from the plugins module
import { getUUIDV4 } from "../../src/plugins";

// Define the test suite for the get-uuidv4.plugin.ts script
describe("plugins/get-uuidv4.plugin.ts", () => {
  // Test case: verify that getUUIDV4 returns a valid UUID string
  test("getUUIDV4() should return an UUID string", () => {
    // Act: call getUUIDV4 to generate a new UUID
    const uuidv4 = getUUIDV4();

    // Assert: validate that the result is a string of 36 characters (UUID v4 format)
    expect(typeof uuidv4).toBe("string");
    expect(uuidv4.length).toBe(36);
  });
});
