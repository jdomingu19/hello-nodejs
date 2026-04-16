// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/index.ts

// --- Class 74: Multiplication App Initialization ---
// --- Class 75: Logging to Console & Create output files ---
// --- Class 76: Argv (Argument Values) ---
// --- Class 77: Yargs Package ---
// --- Class 78: IIFE (Immediately Invoked Function Expressions) ---
// --- Class 79: Yargs Options ---
// --- Class 82: Refactor Code Logic ---

// Import parsed CLI arguments from custom yargs configuration
import { yargsWithoutBin } from "./config/plugins/args.plugin";

// Import ServerApp presentation layer to handle application logic
import { ServerApp } from "./presentation/server-app";

// Wrap program execution inside an async IIFE to isolate scope and allow await
(async () => {
  await main();
})();

/**
 * Main entry point of the application.
 *
 * @returns Promise<void>
 *
 * @remarks
 * - Extracts CLI arguments (base, limit, show) from yargs configuration.
 * - Delegates execution to ServerApp.run() for centralized logic handling.
 * - Demonstrates refactoring by moving core functionality into a presentation layer.
 */
async function main(): Promise<void> {
  const { b: base, l: limit, s: printTable } = yargsWithoutBin;

  ServerApp.run({ base, limit, printTable });
}
