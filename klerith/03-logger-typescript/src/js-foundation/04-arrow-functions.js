// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/04-arrow-functions.js

// --- Class 28: Arrow Functions ---

// Define a sample array of users with id and name
const usersArray = [
  { id: 1, name: "Jesús" },
  { id: 2, name: "Robin" },
];

/**
 * Finds a user by their ID using an arrow function.
 *
 * @param id - The numeric identifier of the user to search for.
 * @param callback - A function that receives either an error message or the user object.
 *
 * @remarks
 * - Demonstrates how arrow functions simplify syntax compared to traditional functions.
 * - Uses a ternary operator to handle both success and error cases.
 * ```
 */
const getUserById = (id, callback) => {
  const userFound = usersArray.find((user) => user.id === id);

  !userFound
    ? callback(`User not found with ID ${id}...`)
    : callback(null, userFound);
};

// Export the function so it can be imported in other files
module.exports = {
  getUserById,
};
