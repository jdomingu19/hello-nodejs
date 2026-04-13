// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/config/plugins/args.plugin.ts

// --- Class 77: Yargs Package ---

// Import yargs core library and helper to hide binary/script paths
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// Parse arguments including binary and script paths (process.argv as-is)
export const yargsWithBin = yargs(process.argv).parseSync();

// Parse arguments excluding binary and script paths (using hideBin helper)
export const yargsWithoutBin = yargs(hideBin(process.argv)).parseSync();
