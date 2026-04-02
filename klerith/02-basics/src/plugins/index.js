// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/plugins/index.js

// --- Class 31: Adapter Pattern ---

// Import adapter functions from individual plugin files
const { getUUIDV4 } = require("./get-uuidv4.plugin");
const { getAge } = require("./get-age.plugin");

// Export a unified interface for all plugins
module.exports = {
  getUUIDV4,
  getAge,
};
