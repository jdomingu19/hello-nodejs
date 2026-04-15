// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/config/plugins/args.plugin.ts

// --- Class 77: Yargs Package ---
// --- Class 79: Yargs Options ---
// --- Class 80: Yargs Checks ---

// Import yargs core library and helper to hide binary/script paths
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

/**
 * Configure yargs to parse CLI arguments with validation checks.
 *
 * @remarks
 * - Defines options for base, limit, and show with aliases, types, defaults, and descriptions.
 * - Uses .check() to enforce constraints on numeric values (base and limit must be > 0).
 * - Throws descriptive errors when invalid arguments are provided.
 */
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
  .check((argv, _) => {
    if (argv.b < 1) throw new Error("Base must be greater than zero (0)");
    if (argv.l < 1) throw new Error("Limit must be greater than zero (0)");
    return true;
  })
  .parseSync();
