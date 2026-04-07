// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/02-destructuring.ts

// --- Class 25: Default Environment Variables ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 59: Testing 02-destructuring.ts script with Jest ---

// Define a typed array of hero names and apply array destructuring
export const heroesArray: string[] = ["Rivali", "Link", "Zelda"];
const [, link, zelda] = heroesArray;

// Display selected heroes in a tabular format
// console.table({ link, zelda });
// ┌─────────┬─────────┐
// │ (index) │ Values  │
// ├─────────┼─────────┤
// │ link    │ 'Link'  │
// │ zelda   │ 'Zelda' │
// └─────────┴─────────┘
