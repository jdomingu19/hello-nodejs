"use strict";
// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/04-arrow-functions.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
// Create a typed array of users implementing the UserInterface
const usersArray = [
    { id: 1, name: "Jesús" },
    { id: 2, name: "Robin" },
];
/**
 * Finds a user by its unique identifier using an arrow function.
 *
 * @param id - The numeric identifier of the user to search for.
 * @param callback - A function to handle the result or error.
 */
const getUserById = (id, callback) => {
    const userFound = usersArray.find((user) => user.id === id);
    !userFound
        ? callback(`User not found with ID ${id}...`)
        : callback(undefined, userFound);
};
exports.getUserById = getUserById;
