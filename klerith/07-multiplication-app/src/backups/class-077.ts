// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/backups/class-077.ts

// --- Class 74: Multiplication App Initialization ---
// --- Class 75: Logging to Console & Create output files ---
// --- Class 76: Argv (Argument Values) ---
// --- Class 77: Yargs Package ---

// Import custom plugin configurations for parsing arguments with yargs
import { yargsWithBin, yargsWithoutBin } from "../config/plugins/args.plugin";

// Display the raw process.argv array (default Node.js argument values)
console.log(process.argv);
// [
//   '...\\node_modules\\ts-node\\dist\\bin.js',
//   '...\\src\\index.ts',
//   '-b',
//   '10'
// ]

// Display the parsed arguments using yargs, including binary and script paths
console.log(yargsWithBin);
// {
//   _: [
//     '...\\node_modules\\ts-node\\dist\\bin.js',
//     '...\\src\\index.ts'
//   ],
//   b: 10,
//   '$0': 'node_modules\\ts-node\\dist\\bin.js'
// }

// Access specific parsed values from yargsWithBin
console.log(yargsWithBin._); // [ '...\\node_modules\\ts-node\\dist\\bin.js', '...\\src\\index.ts' ]
console.log(yargsWithBin.b); // 10
console.log(yargsWithBin.$0); // node_modules\ts-node\dist\bin.js

// Display the parsed arguments using yargs, excluding binary and script paths
console.log(yargsWithoutBin);
// { _: [], b: 10, '$0': 'node_modules\\ts-node\\dist\\bin.js' }

// Access specific parsed values from yargsWithoutBin
console.log(yargsWithoutBin._); // []
console.log(yargsWithoutBin.b); // 10
console.log(yargsWithoutBin.$0); // node_modules\ts-node\dist\bin.js
