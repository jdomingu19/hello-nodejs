// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/data/heroes.ts

// --- Class 47: TypeScript & Node.js working together ---

// Define the Hero interface to enforce structure for hero objects
interface HeroInterface {
  id: number;
  name: string;
  alias: string;
}

// Export a typed array of heroes implementing the HeroInterface
export const heroesArray: HeroInterface[] = [
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
