// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/index.ts

// --- Class 109: Initializing NOC App ---
// --- Class 110: ServerApp Setup and Configuration ---

// Import ServerApp class from presentation layer
import { ServerApp } from "./presentation/server";

/**
 * Immediately invoked function expression (IIFE)
 * to bootstrap the main application logic.
 */
(async () => {
  main();
})();

/**
 * Main function responsible for starting the server
 * by calling ServerApp.start().
 */
function main() {
  ServerApp.start();
}
