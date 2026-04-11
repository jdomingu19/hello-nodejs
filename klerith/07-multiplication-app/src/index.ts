// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/index.ts

// --- Class 74: Multiplication App Initialization ---
// --- Class 75: Logging to Console & Create output files ---
// --- Class 76: Argv (Argument Values) ---

// Capture all argument values passed to the Node.js process
let processArgv: string[] = process.argv;

console.log(processArgv);
// [
//   '...\\node_modules\\ts-node\\dist\\bin.js',
//   '...\\src\\index.ts',
//   '-b',
//   '10'
// ]

// Verify the type of process.argv (an array object)
console.log(typeof processArgv); // object

// Destructure the argv array into executable path, script path, and remaining arguments
const [tsnode, indexTS, ...args] = processArgv;

console.log({ tsnode }); // { tsnode: '...\\node_modules\\ts-node\\dist\\bin.js' }
console.log({ indexTS }); // { indexTS: '...\\src\\index.ts' }
console.log({ args }); // { args: [ '-b', '10' ] }
