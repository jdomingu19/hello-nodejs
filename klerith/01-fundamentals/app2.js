// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// app2.js

// --- Class 13: Read Files with FileSystem ---

// Import the built-in 'fs' module to work with the file system
const fs = require("node:fs");

// Blocking method (synchronous) to read the entire file content
const data = fs.readFileSync("./README.md", "utf-8");

console.log(data); // Prints the README.md content
console.log(typeof data); // string

// Replace all occurrences of "React" with "React Native" (case-insensitive)
const newData = data.replace(/React/gi, "React Native");

console.log(newData); // Prints the modified content
console.log(typeof newData); // string

// Write the modified content into a new file synchronously
fs.writeFileSync("./README-modified.md", newData);
