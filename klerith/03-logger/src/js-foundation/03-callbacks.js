// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/03-callbacks.js

// --- Class 27: Callbacks ---

// Define a sample array of users with id and name
const users = [
  {
    id: 1,
    name: "Jesús",
  },
  {
    id: 2,
    name: "Robin",
  },
];

// Create a function that searches for a user by id and uses a callback to return the result
function getUserById(id, callback) {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    // If no user is found, return an error message through the callback
    return callback(`User not found with ID ${id}...`);
  }

  // If user is found, return the user object through the callback
  return callback(null, user);
}

// Export the function so it can be imported in other files
module.exports = {
  getUserById,
};
