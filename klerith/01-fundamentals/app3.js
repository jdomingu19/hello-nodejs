// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// app3.js

// --- Class 14: Exercise 1 | Word Counter ---

// Import the built-in 'fs' module to work with the file system
const fs = require("node:fs");

// Blocking method (synchronous) to read the entire file content
const content = fs.readFileSync("./README.md", "utf-8");

// Count words and specific keywords using string methods and regular expressions
const wordCount = content.split(" ")?.length ?? 0;
const reactCount = content.match(/React/gi)?.length ?? 0;
const javascriptCount = content.match(/JavaScript/gi)?.length ?? 0;

// Print the results to the console with clear labels
console.log("Word Count:", wordCount); // Word Count: 519
console.log("React Count:", reactCount); // React Count: 62
console.log("JavaScript Count:", javascriptCount); // JavaScript Count: 3
