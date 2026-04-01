// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/index.js

// --- Class 22: package.json scripts ---
// console.log("Hello, from 'src/index.js'!");

// --- Class 23: imports & exports ---

// Import the entire exported object from 01-email-template
const templateContent = require("./js-foundation/01-email-template");

console.log(templateContent); // { emailTemplate: '...' }
console.log(typeof templateContent); // object

console.log(templateContent.emailTemplate); // '<div>...</div>'
console.log(typeof templateContent.emailTemplate); // string

// Import only the emailTemplate property using object destructuring
const { emailTemplate } = require("./js-foundation/01-email-template");

console.log(emailTemplate); // '<div>...</div>'
console.log(typeof emailTemplate); // string
