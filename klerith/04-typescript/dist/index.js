"use strict";
// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/index.ts
// --- Class 44: TypeScript Basic Project ---
// --- Class 45: TypeScript Configuration in Node.js ---
// Define a typed array of heroes with id, name, and alias
const heroesArray = [
    {
        id: 1,
        name: "Link",
        alias: "Hero of Time",
    },
    {
        id: 2,
        name: "Zelda",
        alias: "Princess of Hyrule",
    },
    {
        id: 3,
        name: "Rivali",
        alias: "Champion of the Rito",
    },
];
// Display the heroes array in a tabular format for readability
console.table(heroesArray);
// ┌─────────┬────┬──────────┬────────────────────────┐
// │ (index) │ id │ name     │ alias                  │
// ├─────────┼────┼──────────┼────────────────────────┤
// │ 0       │ 1  │ 'Link'   │ 'Hero of Time'         │
// │ 1       │ 2  │ 'Zelda'  │ 'Princess of Hyrule'   │
// │ 2       │ 3  │ 'Rivali' │ 'Champion of the Rito' │
// └─────────┴────┴──────────┴────────────────────────┘
/**
 * Finds a hero object in the `heroesArray` by its unique identifier.
 *
 * @param heroId - The numeric identifier of the hero to search for.
 * @returns The hero object if found, otherwise `undefined`.
 */
const findHeroById = (heroId) => {
    return heroesArray.find((hero) => {
        return hero.id === heroId;
    });
};
// Retrieve heroes by their ids and test with a non-existing id
const link = findHeroById(1);
const zelda = findHeroById(2);
const rivali = findHeroById(3);
const heroNotFound = findHeroById(4);
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
