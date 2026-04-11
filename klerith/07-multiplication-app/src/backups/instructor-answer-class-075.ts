// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/backups/instructor-answer-class-075.ts

// --- Class 74: Multiplication App Initialization ---
// --- Class 75: Logging to Console & Create output files ---

// Import Node.js file system module for directory and file operations
import fs from "node:fs";

// Define the base number for which the multiplication table will be generated
const baseNumber = 5;

// Build the output message containing the formatted header and multiplication table
let outputMessage = "";
const headerMessage = `=============================
  The ${baseNumber} times table  
=============================\n`;

for (let i = 1; i <= 10; i++) {
  outputMessage += `${baseNumber} * ${i} = ${baseNumber * i}\n`;
}
outputMessage = headerMessage + outputMessage;

// Print the multiplication table to the console
console.log(outputMessage);

// Define the output folder path and write the multiplication table to a text file
const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/${baseNumber}-times-table.txt`, outputMessage, {
  encoding: "utf8",
});

// Confirm successful file creation in the console
console.log(`File created successfully!`);
