// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/02-destructuring.js

// --- Class 25: Default Environment Variables ---

// Access the global process object provided by Node.js
console.log(process); // process { version: 'v24.11.0', ... }
console.log(typeof process); // object

// Access the environment variables available in the current process
console.log(process.env); // { ACLOCAL_PATH: '...', ... }
console.log(typeof process.env); // object

// Try to read a specific environment variable (PORT) that is not defined
console.log(process.env.PORT); // undefined
console.log(typeof process.env.PORT); // undefined

// Provide a default value (3000) when PORT is not defined
console.log(process.env.PORT ?? 3000); // 3000

// Destructure specific environment variables from process.env
const { SHELL, USERNAME, OS } = process.env;

console.log(SHELL); // e.g. 'C:\Program Files\Git\usr\bin\bash.exe'
console.log(typeof SHELL); // string

console.log(USERNAME); // e.g. 'Jesús'
console.log(typeof USERNAME); // string

console.log(OS); // e.g. 'Windows_NT'
console.log(typeof OS); // string

// Display the selected environment variables in a table format
console.table({ SHELL, USERNAME, OS });
// ┌──────────┬──────────────────────────────────────────────┐
// │ (index)  │ Values                                       │
// ├──────────┼──────────────────────────────────────────────┤
// │ SHELL    │ 'C:\\Program Files\\Git\\usr\\bin\\bash.exe' │
// │ USERNAME │ 'Jesús'                                      │
// │ OS       │ 'Windows_NT'                                 │
// └──────────┴──────────────────────────────────────────────┘

// Demonstrate array destructuring with heroes
const heroesArray = ["Rivali", "Zelda", "Link"];
const [, zelda, link] = heroesArray;

console.table({ zelda, link });
// ┌─────────┬─────────┐
// │ (index) │ Values  │
// ├─────────┼─────────┤
// │ zelda   │ 'Zelda' │
// │ link    │ 'Link'  │
// └─────────┴─────────┘
