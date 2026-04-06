// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/04-arrow-functions.ts

// --- Class 28: Arrow Functions ---
// --- Class 48: Migrate Project to TypeScript ---

// Define the User interface to enforce structure for user objects
interface UserInterface {
  id: number;
  name: string;
}

// Create a typed array of users implementing the UserInterface
const usersArray: UserInterface[] = [
  { id: 1, name: "Jesús" },
  { id: 2, name: "Robin" },
];

// Define the callback interface for handling user search results
interface CallbackInterface {
  (error?: string, user?: UserInterface): void;
}

/**
 * Finds a user by its unique identifier using an arrow function.
 *
 * @param id - The numeric identifier of the user to search for.
 * @param callback - A function to handle the result or error.
 */
export const getUserById = (id: number, callback: CallbackInterface) => {
  const userFound = usersArray.find((user) => user.id === id);
  !userFound
    ? callback(`User not found with ID ${id}...`)
    : callback(undefined, userFound);
};
