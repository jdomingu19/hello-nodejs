// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/06-promises.js

// --- Class 33: Promises ---

/**
 * Fetches a Pokémon by its ID using the PokéAPI.
 *
 * @param id - The numeric identifier of the Pokémon to fetch.
 * @param callback - A function that receives the Pokémon's name once retrieved.
 *
 * @remarks
 * - Demonstrates how to use Promises with the Fetch API.
 * - Handles asynchronous operations by chaining `.then()` and `.catch()`.
 * - Encapsulates API call logic and exposes a simple callback interface.
 */
// const getPokemonById = (id, callback) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//   fetch(url)
//     .then((response) => {
//       response.json().then((pokemon) => {
//         callback(pokemon.name);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// --- Class 34: Promise Chaining ---

/**
 * Fetches a Pokémon by its ID using the PokéAPI.
 *
 * @param id - The numeric identifier of the Pokémon to fetch.
 * @returns A Promise that resolves to the Pokémon's name.
 *
 * @remarks
 * - Demonstrates Promise chaining with the Fetch API.
 * - Uses `.then()` to transform the response step by step.
 * - Errors are handled with `.catch()`, and cleanup logic can be added with `.finally()`.
 */
const getPokemonById = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  return (
    fetch(url)
      .then((response) => response.json())
      // Example of forcing an error for demonstration:
      // .then(() => {
      //   throw new Error("Something went wrong...");
      // })
      .then((pokemon) => pokemon.name)
  );
};

// Export the function for use in other modules
module.exports = getPokemonById;
