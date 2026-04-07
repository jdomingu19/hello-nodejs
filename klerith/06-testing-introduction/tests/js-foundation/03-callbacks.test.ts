// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// tests/js-foundation/03-callbacks.test.ts

// --- Class 27: Callbacks ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 60: Testing 03-callbacks.ts script with Jest (Part 1) ---

// Import the getUserById function from the source module
import { getUserById } from "../../src/js-foundation/03-callbacks";

// Define the test suite for the 03-callbacks.ts script
describe("js-foundation/03-callbacks.ts", () => {
  // Test case: verify that getUserById returns an error when the user does not exist
  test("getUserById should return an error if user does not exist", (done) => {
    // Arrange: set an ID that does not exist in the users array
    const id = 3;

    // Act: call getUserById with the non-existent ID and a callback
    getUserById(id, (error, user) => {
      // Assert: validate that the error message is returned and user is undefined
      expect(error).toBe(`User not found with ID ${id}...`);
      expect(user).toBeUndefined();

      // Signal Jest that the asynchronous test has completed
      done();
    });
  });
});
