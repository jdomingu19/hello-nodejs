// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// app4.js

// --- Class 15: Execution Order ---

// Log the beginning of the program execution
console.log("(1) Program Begins");

// Schedule a timeout to run after 1.5 seconds
setTimeout(() => {
  console.log("(5) First Timeout!");
}, 1500); // 1500 ms = 1.5 s

// Schedule a timeout with a minimal delay (executes after synchronous code)
setTimeout(() => {
  console.log("(3) Second Timeout!");
}, 1); // 1 ms = 0.001 s (executes after current call stack)

// Schedule a timeout with zero delay (executes after synchronous code)
setTimeout(() => {
  console.log("(4) Third Timeout!");
}, 0); // 0 ms = 0 s (executes after current call stack)

// Log the end of the program execution
console.log("(2) Program Ends");
