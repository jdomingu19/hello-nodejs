// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/plugins/http-client.plugin.js

// --- Class 36: Adapter Pattern with FetchAPI ---

/**
 * HTTP client adapter wrapping Fetch API.
 *
 * @remarks
 * - Provides a consistent interface (`get`, `post`, `put`, `delete`) for HTTP requests.
 * - Decouples application logic from direct Fetch API usage.
 * - Makes it easier to replace or extend the HTTP client in the future.
 */
// const httpClientPlugin = {
//   /**
//    * Performs a GET request to the given URL.
//    *
//    * @param url - The resource endpoint to fetch.
//    * @returns A Promise resolving to the parsed JSON response.
//    */
//   get: async (url) => {
//     const response = await fetch(url);
//     return await response.json();
//   },

//   // Placeholder methods for other HTTP verbs
//   post: async (url, body) => {},
//   put: async (url, body) => {},
//   delete: async (url) => {},
// };

// --- Class 37: Axios, Promise based HTTP Client  ---

// Import the Axios library for HTTP requests
const axios = require("axios");

/**
 * HTTP client adapter wrapping Axios.
 *
 * @remarks
 * - Provides a consistent interface (`get`, `post`, `put`, `delete`) for HTTP requests.
 * - Uses Axios under the hood, which simplifies request/response handling compared to Fetch.
 * - Decouples application logic from direct Axios usage, following the Adapter Pattern.
 */
const httpClientPlugin = {
  /**
   * Performs a GET request to the given URL.
   *
   * @param url - The resource endpoint to fetch.
   * @returns A Promise resolving to the parsed JSON response.
   */
  get: async (url) => {
    // Perform GET request using Axios
    const { data } = await axios.get(url);

    // Return the parsed JSON response
    return data;

    // Alternative way to get pokemon data with Axios
    // const response = await axios.get(url);
    // return response.data;
  },

  // Placeholder methods for other HTTP verbs
  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url) => {},
};

// Export the HTTP client adapter
module.exports = {
  httpClientPlugin,
};
