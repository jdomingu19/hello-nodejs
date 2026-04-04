// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/index.ts

// --- Class 22: package.json scripts ---
// --- Class 23: imports & exports ---
// --- Class 25: Default Environment Variables ---
// --- Class 27: Callbacks ---
// --- Class 28: Arrow Functions ---
// --- Class 29: Factory Functions Introduction ---
// --- Class 32: Applying Factory Constructor ---
// --- Class 33: Promises ---
// --- Class 34: Promise Chaining ---
// --- Class 42: Winston, Node.js Logger ---
// --- Class 43: Winston, Node.js Logger Part 2 ---
// --- Class 48: Migrate Project to TypeScript ---

// export const name = "Hello, TypeScript & Node.js!";
// console.log({ name });

// Import the promise-based function and logger builder
import { getPokemonNameById } from "./js-foundation/06-promises";
import { buildLogger } from "./plugins/logger.plugin";

// Create a logger instance scoped to index.ts
const logger = buildLogger("index.js");
logger.log("Migrating project to TypeScript!");

// Demonstrate usage of getPokemonNameById with numeric and string IDs
getPokemonNameById(105).then((pokemonName) => {
  console.log(pokemonName); // marowak
});

getPokemonNameById("105").then((pokemonName) => {
  console.log(pokemonName); // marowak
});
