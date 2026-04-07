// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// tests/js-foundation/02-destructuring.test.ts

// --- Class 25: Default Environment Variables ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 59: Testing 02-destructuring.ts script with Jest ---

// Import the heroesArray constant from the source module
import { heroesArray } from "../../src/js-foundation/02-destructuring";

// Define the test suite for the 02-destructuring.ts script
describe("js-foundation/02-destructuring.ts", () => {
  // Test case: verify that heroesArray contains specific hero names
  test("heroesArray should contain 'Link' and 'Zelda'", () => {
    // Debugging output to visualize the array content
    console.log(heroesArray); // [ 'Rivali', 'Zelda', 'Link' ]

    // Assertions: check that the array includes the expected heroes
    expect(heroesArray).toContain("Link");
    expect(heroesArray).toContain("Zelda");
  });

  // Test case: verify correct destructuring order of heroesArray
  test("First should be a 'Link', then, should be a 'Zelda'", () => {
    // Arrange: destructure the array to extract specific positions
    const [, link, zelda] = heroesArray;

    // Assert: validate that the destructured values match expectations
    expect(link).toBe("Link");
    expect(zelda).toBe("Zelda");
  });
});
