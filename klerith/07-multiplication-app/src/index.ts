// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/index.ts

// --- Class 74: Multiplication App Initialization ---
// --- Class 75: Logging to Console & Create output files ---
// --- Class 76: Argv (Argument Values) ---
// --- Class 77: Yargs Package ---
// --- Class 78: IIFE (Immediately Invoked Function Expressions) ---

// Import custom plugin configurations for parsing arguments with yargs
import { yargsWithBin, yargsWithoutBin } from "./config/plugins/args.plugin";

// Wrap program execution inside an async IIFE to isolate scope and allow await
(async () => {
  await main();
  console.log("Hello, IIFE!");
  console.log("Program End");
})();

/**
 * Main entry point of the application.
 *
 * @returns Promise<void>
 *
 * @remarks
 * This function represents the starting logic of the program. It is invoked
 * immediately inside the IIFE, ensuring that asynchronous operations can be
 * awaited and that the program flow is clearly defined.
 */
async function main(): Promise<void> {
  console.log("Program Start");
}
