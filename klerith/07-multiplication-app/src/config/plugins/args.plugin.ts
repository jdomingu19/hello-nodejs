// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/config/plugins/args.plugin.ts

// --- Class 77: Yargs Package ---
// --- Class 79: Yargs Options ---

// Import yargs core library and helper to hide binary/script paths
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// Configure yargs options to parse command-line arguments with aliases, types, defaults, and descriptions
export const yargsWithoutBin = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Times table base",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Times table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show times table",
  })
  .parseSync();
