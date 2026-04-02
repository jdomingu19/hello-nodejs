// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/index.js

// --- Class 22: package.json scripts ---
// console.log("Hello, from 'src/index.js'!");

// --- Class 23: imports & exports ---

// Import the entire exported object from 01-template
// const templateContent = require("./js-foundation/01-template");

// console.log(templateContent); // { emailTemplate: '...' }
// console.log(typeof templateContent); // object

// console.log(templateContent.emailTemplate); // '<div>...</div>'
// console.log(typeof templateContent.emailTemplate); // string

// Import only the emailTemplate property using object destructuring
// const { emailTemplate } = require("./js-foundation/01-template");

// console.log(emailTemplate); // '<div>...</div>'
// console.log(typeof emailTemplate); // string

// --- Class 25: Default Environment Variables ---

// Import and execute the destructuring example file
// require("./js-foundation/02-destructuring");

// --- Class 27: Callbacks ---

// Import the getUserById function from the callbacks module
// const { getUserById } = require("./js-foundation/03-callbacks");

// Define the id to search for and execute the callback function
// const id = 1;
// getUserById(id, function (error, user) {
//   if (error) {
//     // Handle the error case by throwing a new Error
//     throw new Error(error);
//   }
//   // Log the user object when found
//   console.log(user); // { id: 1, name: 'Jesús' }
// });

// --- Class 28: Arrow Functions ---

// Import the getUserById function from the arrow-functions module
// const { getUserById } = require("./js-foundation/04-arrow-functions");

// Call the function with a specific id and handle the result using a callback
// const id = 1;
// getUserById(id, (error, user) => {
//   if (error) throw new Error(error);
//   // Log the user object when found
//   console.log(user); // { id: 1, name: 'Jesús' }
// });

// --- Class 29: Factory Functions Introduction ---

// Import and execute the factory function example file
// require("./js-foundation/05-factory-functions");

// --- Class 32: Applying Factory Constructor ---

// Import adapter functions from the plugins index
// const { getUUIDV4, getAge } = require("./plugins/");

// Import the factory constructor from factory-functions module
// const { buildMakePerson } = require("./js-foundation/05-factory-functions");

// Create a specialized person builder by injecting dependencies
// const makePerson = buildMakePerson({ getUUIDV4, getAge });

// Define the input data for a sample person
// const johnInfo = { name: "John Doe", birthdate: "1996-5-7" };

// Use the specialized factory function to build a person object
// const johnPerson = makePerson(johnInfo);

// Display the resulting person object in a table format
// console.table(johnPerson);
// ┌───────────┬────────────────────────────────────────┐
// │ (index)   │ Values                                 │
// ├───────────┼────────────────────────────────────────┤
// │ id        │ '82f3e096-9b8f-4c79-8562-898ab08a9947' │
// │ name      │ 'John Doe'                             │
// │ birthdate │ '1996-5-7'                             │
// │ age       │ 29                                     │
// └───────────┴────────────────────────────────────────┘

// --- Class 33: Promises ---

// Import the getPokemonById function from the promises module
const getPokemonById = require("./js-foundation/06-promises");

// Verify that the imported value is a function
console.log(getPokemonById); // [Function: getPokemonById]
console.log(typeof getPokemonById); // function

// Call the function with a specific Pokémon ID and log the result
getPokemonById(104, (pokemon) => {
  console.log(pokemon); // cubone
});

getPokemonById(105, (pokemon) => {
  console.log(pokemon); // marowak
});
