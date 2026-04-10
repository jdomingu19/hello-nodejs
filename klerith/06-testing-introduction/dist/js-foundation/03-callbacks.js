"use strict";
// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/03-callbacks.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.users = void 0;
// Alternative type definition for an array of users (commented out)
// type UsersType = {
//   id: number;
//   name: string;
// }[];
// Create a typed array of users implementing the UserInterface
exports.users = [
    {
        id: 1,
        name: "Jesús",
    },
    {
        id: 2,
        name: "Robin",
    },
];
/**
 * Finds a user by its unique identifier and returns the result via callback.
 *
 * @param id - The numeric identifier of the user to search for.
 * @param callback - A function to handle the result or error.
 */
const getUserById = (id, callback) => {
    const user = exports.users.find(function (user) {
        return user.id === id;
    });
    !user
        ? setTimeout(() => {
            callback(`User not found with ID ${id}...`);
        }, 2500)
        : callback(undefined, user);
};
exports.getUserById = getUserById;
