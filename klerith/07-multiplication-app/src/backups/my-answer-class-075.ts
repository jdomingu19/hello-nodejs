// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/backups/my-answer-class-075.ts

// --- Class 74: Multiplication App Initialization ---
// --- Class 75: Logging to Console & Create output files ---

// Import Node.js file system module for directory and file operations
import fs from "node:fs";

/**
 * Logs the multiplication table of a given number to the console.
 *
 * @param number - The base number for which the multiplication table is generated.
 * @returns void
 *
 * @remarks
 * This function prints a formatted header followed by the multiplication
 * table from 1 to 10 directly to the console output.
 */
const logTimesTable = (number: number): void => {
  console.log(`=============================`);
  console.log(`  The ${number} times table  `);
  console.log(`=============================`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
};

/**
 * Creates a text file containing the multiplication table of a given number.
 *
 * @param number - The base number for which the multiplication table is generated.
 * @returns void
 *
 * @remarks
 * This function ensures that an `outputs` folder exists, builds the content
 * for the multiplication table from 1 to 10, and writes it to a file named
 * `<number>-times-table.txt`. If the file is created successfully, a confirmation
 * message is logged to the console.
 */
const createOutputFile = (number: number): void => {
  const outputsFolder = "outputs";
  fs.mkdirSync(outputsFolder, { recursive: true });

  const filePath = `${outputsFolder}/${number}-times-table.txt`;
  let content = "";

  content += `=============================\n`;
  content += `  The ${number} times table  \n`;
  content += `=============================\n`;

  for (let i = 1; i <= 10; i++) {
    content += `${number} * ${i} = ${number * i}\n`;
  }

  fs.writeFile(filePath, content, { encoding: "utf8" }, (error) => {
    if (error) throw new Error("Error writing file:", error);
    console.log(`File '${filePath}' created successfully!`);
  });
};

// Define the base number and execute both console logging and file creation
const number: number = 7;
logTimesTable(number);
createOutputFile(number);
