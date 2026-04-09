// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// tests/js-foundation/06-promises.test.ts

// --- Class 33: Promises ---
// --- Class 34: Promise Chaining ---
// --- Class 35: async/await ---
// --- Class 36: Adapter Pattern with FetchAPI ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 63: Testing 06-promises.ts script with Jest ---

// Import the getPokemonNameById function from the source module
import { getPokemonNameById } from "../../src/js-foundation/06-promises";

// Define the test suite for the 06-promises.ts script
describe("js-foundation/06-promises.ts", () => {
  // Test case: verify that getPokemonNameById resolves with a valid Pokémon name
  test("getPokemonById should return a Pokemon", async () => {
    // Arrange: set a valid Pokémon ID
    const pokemonId = 105;

    // Act: call getPokemonNameById with the valid ID
    const pokemonName = await getPokemonNameById(pokemonId);

    // Assert: validate that the resolved name matches the expected Pokémon
    expect(pokemonName).toBe("marowak");
  });

  // Test case: verify that getPokemonNameById rejects with an error for invalid ID
  test("getPokemonById should return a error if Pokemon does not exist", async () => {
    // Arrange: set an invalid Pokémon ID
    const pokemonId = -105;

    // Act & Assert: call getPokemonNameById and expect rejection
    try {
      await getPokemonNameById(pokemonId);
      // If no error is thrown, force the test to fail
      expect(true).toBeFalsy();
    } catch (error) {
      // Validate that the error message matches the expected output
      expect(error).toBe(`Pokemon not found with ID ${pokemonId}`);
    }
  });
});
