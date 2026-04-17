// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/config/plugins/args.plugin.ts

// --- Class 77: Yargs Package ---
// --- Class 79: Yargs Options ---
// --- Class 80: Yargs Checks ---
// --- Class 86: Adding fileName & filePath Argument ---

// Import yargs core library and helper to hide binary/script paths
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

/**
 * Configure yargs to parse CLI arguments with extended options.
 *
 * @remarks
 * - Defines options for base, limit, show, fileName, and filePath.
 * - Provides aliases, types, defaults, and descriptions for each option.
 * - Validates numeric arguments (base and limit must be > 0).
 * - Returns a parsed object with all configured options.
 */
export const yargsWithoutBin = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Set times table base",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Set times table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show times table",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "times-table",
    describe: "Set file name",
  })
  .option("p", {
    alias: "path",
    type: "string",
    default: "outputs",
    describe: "Set file path",
  })
  .check((argv, _) => {
    if (argv.b < 1) throw new Error("Base must be greater than zero (0)");
    if (argv.l < 1) throw new Error("Limit must be greater than zero (0)");
    return true;
  })
  .parseSync();
