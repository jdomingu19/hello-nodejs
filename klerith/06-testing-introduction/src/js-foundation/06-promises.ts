// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/06-promises.ts

// --- Class 33: Promises ---
// --- Class 34: Promise Chaining ---
// --- Class 35: async/await ---
// --- Class 36: Adapter Pattern with FetchAPI ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 63: Testing 06-promises.ts script with Jest ---

// Import the httpClient plugin for making HTTP requests
import { httpClient } from "../plugins";

/**
 * Retrieves a Pokémon name by its ID using the PokeAPI.
 *
 * @param id - The Pokémon identifier (number or string).
 * @returns A Promise that resolves with the Pokémon name as a string.
 * @throws An error message if the Pokémon does not exist or the request fails.
 */
export const getPokemonNameById = async (
  id: number | string,
): Promise<string> => {
  try {
    // Construct the API endpoint URL dynamically based on the provided ID
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // Await the HTTP GET request using the httpClient plugin
    const pokemon = await httpClient.get(url);

    // Return the 'name' property from the Pokémon object
    return pokemon.name;
  } catch (error) {
    // Throw a descriptive error message if the request fails
    throw `Pokemon not found with ID ${id}`;
  }
};
