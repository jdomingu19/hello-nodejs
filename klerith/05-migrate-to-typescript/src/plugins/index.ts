// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/plugins/index.ts

// --- Class 31: Adapter Pattern ---
// --- Class 36: Adapter Pattern with FetchAPI ---
// --- Class 42: Winston, Node.js Logger ---
// --- Class 48: Migrate Project to TypeScript ---

// Export all plugins from a single entry point for easier imports
export { buildLogger } from "./logger.plugin";
export { getAge } from "./get-age.plugin";
export { getUUIDV4 } from "./get-uuidv4.plugin";
export { httpClientPlugin as httpClient } from "./http-client.plugin";
