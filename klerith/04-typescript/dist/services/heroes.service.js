"use strict";
// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/services/heroes.services.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeroById = void 0;
// --- Class 47: TypeScript & Node.js working together ---
// Import the heroes array from the data module
const heroes_1 = require("../data/heroes");
/**
 * Finds a hero object in the `heroesArray` by its unique identifier.
 *
 * @param heroId - The numeric identifier of the hero to search for.
 * @returns The hero object if found, otherwise `undefined`.
 */
const findHeroById = (heroId) => {
    return heroes_1.heroesArray.find((hero) => {
        return hero.id === heroId;
    });
};
exports.findHeroById = findHeroById;
