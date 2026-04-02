// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/05-factory-functions.js

// --- Class 29: Factory Functions Introduction ---

/**
 * Builds a person object with calculated properties.
 *
 * @param param0 - An object containing the person's name and birthdate.
 * @returns A new person object with:
 * - `id`: unique timestamp identifier
 * - `name`: the provided name
 * - `birthdate`: the provided birthdate string
 * - `age`: calculated from the current year minus the birth year
 *
 * @remarks
 * Demonstrates the concept of factory functions in JavaScript.
 * Encapsulates object creation logic in a reusable function.
 */
const buildPerson = ({ name, birthdate }) => {
  return {
    id: new Date().getTime(),
    name,
    birthdate,
    age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
  };
};

// Define the input data for a sample person
const johnInfo = { name: "John Doe", birthdate: "1996-5-7" };

// Use the factory function to build a person object
const johnPerson = buildPerson(johnInfo);

// Display the resulting person object in a table format
console.table(johnPerson);
// ┌───────────┬───────────────┐
// │ (index)   │ Values        │
// ├───────────┼───────────────┤
// │ id        │ 1775140422184 │
// │ name      │ 'John Doe'    │
// │ birthdate │ '1996-5-7'    │
// │ age       │ 30            │
// └───────────┴───────────────┘
