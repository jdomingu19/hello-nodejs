// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/plugins/get-age.plugin.js

// --- Class 31: Adapter Pattern ---

// Import the external get-age library
const getAgePlugin = require("get-age");

/**
 * Adapter function for age calculation.
 *
 * @param birthdate - A string representing the birthdate.
 * @returns The calculated age as a number, or an Error if birthdate is missing.
 *
 * @remarks
 * Wraps the `get-age` library to provide a consistent interface
 * for the rest of the application.
 */
const getAge = (birthdate) => {
  if (!birthdate) return new Error("Birthday is required");

  return getAgePlugin(birthdate);
};

// Export the adapter function
module.exports = {
  getAge,
};
