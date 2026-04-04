"use strict";
// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
// --- Class 44: TypeScript Basic Project ---
// --- Class 45: TypeScript Configuration in Node.js ---
// --- Class 47: TypeScript & Node.js working together ---
// Import heroes data and service function
const heroes_1 = require("./data/heroes");
const heroes_service_1 = require("./services/heroes.service");
// Display the heroes array in a tabular format for readability
console.table(heroes_1.heroesArray);
// ┌─────────┬────┬──────────┬────────────────────────┐
// │ (index) │ id │ name     │ alias                  │
// ├─────────┼────┼──────────┼────────────────────────┤
// │ 0       │ 1  │ 'Link'   │ 'Hero of Time'         │
// │ 1       │ 2  │ 'Zelda'  │ 'Princess of Hyrule'   │
// │ 2       │ 3  │ 'Rivali' │ 'Champion of the Rito' │
// └─────────┴────┴──────────┴────────────────────────┘
// Retrieve heroes by their ids and test with a non-existing id
const link = (0, heroes_service_1.findHeroById)(1);
const zelda = (0, heroes_service_1.findHeroById)(2);
const rivali = (0, heroes_service_1.findHeroById)(3);
const heroNotFound = (0, heroes_service_1.findHeroById)(4);
// Display each hero object in table format
console.table(link); // Shows Link object
console.table(zelda); // Shows Zelda object
console.table(rivali); // Shows Rivali object
console.table(heroNotFound); // undefined
// Access and print the alias property of each hero
console.log(link?.alias); // Hero of Time
console.log(zelda?.alias); // Princess of Hyrule
console.log(rivali?.alias); // Champion of the Rito
// Safely access alias of a non-existing hero using optional chaining and nullish coalescing
console.log(heroNotFound?.alias ?? "Hero not found"); // Hero not found
// console.log(heroNotFound.alias); // TypeError: Cannot read properties of undefined (reading 'alias')
