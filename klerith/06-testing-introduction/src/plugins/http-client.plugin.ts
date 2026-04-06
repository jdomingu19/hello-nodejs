// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/plugins/http-client.plugin.ts

// --- Class 36: Adapter Pattern with FetchAPI ---
// --- Class 37: Axios, Promise based HTTP Client  ---
// --- Class 48: Migrate Project to TypeScript ---

// Import Axios for HTTP requests
import axios from "axios";

/**
 * HTTP client plugin providing methods for common HTTP verbs.
 * Uses Axios under the hood to perform requests.
 */
export const httpClientPlugin = {
  /**
   * Performs a GET request to the specified URL.
   *
   * @param url - The endpoint to fetch data from.
   * @returns The response data from the server.
   *
   * @example
   * ```ts
   * const data = await httpClient.get("https://pokeapi.co/api/v2/pokemon/105");
   * console.log(data.name); // "marowak"
   * ```
   */
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;
    // Alternative way to get pokemon data with Axios
    // const response = await axios.get(url);
    // return response.data;
  },

  // Placeholder methods for other HTTP verbs
  post: async (url: string, body: any) => {},
  put: async (url: string, body: any) => {},
  delete: async (url: string) => {},
};
