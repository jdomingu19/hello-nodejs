// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/06-promises.ts

// --- Class 33: Promises ---
// --- Class 34: Promise Chaining ---
// --- Class 35: async/await ---
// --- Class 36: Adapter Pattern with FetchAPI ---
// --- Class 48: Migrate Project to TypeScript ---

// Import the httpClient plugin for making HTTP requests
import { httpClient } from "../plugins";

/**
 * Retrieves a Pokémon's name from the PokeAPI by its identifier.
 *
 * @param id - The numeric or string identifier of the Pokémon.
 * @returns A promise that resolves to the Pokémon's name.
 */
export const getPokemonNameById = async (
  id: number | string,
): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await httpClient.get(url);
  return pokemon.name;
};
