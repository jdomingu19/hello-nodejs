// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/02-destructuring.ts

// --- Class 25: Default Environment Variables ---
// --- Class 48: Migrate Project to TypeScript ---

// Define a typed array of hero names and apply array destructuring
const heroesArray: string[] = ["Rivali", "Zelda", "Link"];
const [, zelda, link] = heroesArray;

// Display selected heroes in a tabular format
// console.table({ zelda, link });
// ┌─────────┬─────────┐
// │ (index) │ Values  │
// ├─────────┼─────────┤
// │ zelda   │ 'Zelda' │
// │ link    │ 'Link'  │
// └─────────┴─────────┘
