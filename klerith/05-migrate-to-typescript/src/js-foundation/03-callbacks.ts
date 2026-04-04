// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/03-callbacks.ts

// --- Class 27: Callbacks ---
// --- Class 48: Migrate Project to TypeScript ---

// Define the User interface to enforce structure for user objects
interface UserInterface {
  id: number;
  name: string;
}

// Alternative type definition for an array of users (commented out)
// type UsersType = {
//   id: number;
//   name: string;
// }[];

// Create a typed array of users implementing the UserInterface
const users: UserInterface[] = [
  {
    id: 1,
    name: "Jesús",
  },
  {
    id: 2,
    name: "Robin",
  },
];

// Define the callback interface for handling user search results
interface CallbackInterface {
  (error?: string, user?: UserInterface): void;
}

/**
 * Finds a user by its unique identifier and returns the result via callback.
 *
 * @param id - The numeric identifier of the user to search for.
 * @param callback - A function to handle the result or error.
 */
export const getUserById = (id: number, callback: CallbackInterface) => {
  const user = users.find(function (user) {
    return user.id === id;
  });

  !user
    ? callback(`User not found with ID ${id}...`)
    : callback(undefined, user);
};
