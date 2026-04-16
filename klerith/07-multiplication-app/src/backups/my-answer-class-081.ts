// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/backups/my-answer-class-081.ts

// --- Class 74: Multiplication App Initialization ---
// --- Class 75: Logging to Console & Create output files ---
// --- Class 81: Using Yargs empirically ---

// Import Node.js file system module for directory and file operations
import fs from "node:fs";

// Import parsed CLI arguments from custom yargs configuration
import { yargsWithoutBin } from "../config/plugins/args.plugin";

// Extract base number from parsed arguments for multiplication table
const baseNumber = yargsWithoutBin.b;

// Build the output message containing the formatted header and multiplication table
let outputMessage = "";
const headerMessage = `=============================
  The ${baseNumber} times table  
=============================\n`;

for (let i = 1; i <= yargsWithoutBin.l; i++) {
  outputMessage += `${baseNumber} * ${i} = ${baseNumber * i}\n`;
}
outputMessage = headerMessage + outputMessage;

// Conditionally print the multiplication table to console if --show flag is enabled
if (yargsWithoutBin.s) console.log(outputMessage);

// Define the output folder path and write the multiplication table to a text file
const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/${baseNumber}-times-table.txt`, outputMessage, {
  encoding: "utf8",
});

// Confirm successful file creation in the console
console.log(`File created successfully!`);
