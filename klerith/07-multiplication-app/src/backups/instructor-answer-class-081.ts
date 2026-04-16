// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/backups/instructor-answer-class-081.ts

// --- Class 74: Multiplication App Initialization ---
// --- Class 75: Logging to Console & Create output files ---
// --- Class 81: Using Yargs empirically ---

// Import Node.js file system module for directory and file operations
import fs from "node:fs";

// Import parsed CLI arguments from custom yargs configuration
import { yargsWithoutBin } from "../config/plugins/args.plugin";

// Destructure parsed arguments into local variables for clarity
const { b: base, l: limit, s: printTable } = yargsWithoutBin;

// Build the output message containing the formatted header and multiplication table
let outputMessage = "";
const headerMessage = `=============================
  The ${base} times table  
=============================\n`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} * ${i} = ${base * i}\n`;
}
outputMessage = headerMessage + outputMessage;

// Conditionally print the multiplication table to console if --show flag is enabled
if (printTable) {
  console.log(outputMessage);
}

// Define the output folder path and write the multiplication table to a text file
const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/${base}-times-table.txt`, outputMessage, {
  encoding: "utf8",
});

// Confirm successful file creation in the console
console.log(`File created successfully!`);
