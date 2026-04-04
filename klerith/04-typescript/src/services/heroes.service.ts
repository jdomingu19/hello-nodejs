// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/services/heroes.services.ts

// --- Class 47: TypeScript & Node.js working together ---

// Import the heroes array from the data module
import { heroesArray } from "../data/heroes";

/**
 * Finds a hero object in the `heroesArray` by its unique identifier.
 *
 * @param heroId - The numeric identifier of the hero to search for.
 * @returns The hero object if found, otherwise `undefined`.
 */
export const findHeroById = (heroId: number) => {
  return heroesArray.find((hero) => {
    return hero.id === heroId;
  });
};
