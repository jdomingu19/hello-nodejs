// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/plugins/logger.plugin.js

// --- Class 42: Winston, Node.js Logger ---

// Import the Winston logging library
const winston = require("winston");

// Create a Winston logger instance with configuration
const logger = winston.createLogger({
  // Minimum log level to capture (info and above)
  level: "info",

  // Format logs as JSON objects
  format: winston.format.json(),

  // defaultMeta: { service: "user-service" },

  // Define transports (destinations for logs)
  transports: [
    //
    // - Write all logs with importance level of `error` or higher to `error.log`
    //   (i.e., error, fatal, but not other levels)
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    //
    // - Write all logs with importance level of `info` or higher to `combined.log`
    //   (i.e., fatal, error, warn, and info, but not trace)
    //
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

// Add console transport to also log messages in the terminal
logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  }),
);

/**
 * Builds a logger scoped to a specific service.
 *
 * @param service - The name of the service or module using the logger.
 * @returns An object exposing a `log` method for info-level logging.
 */
module.exports = function buildLogger(service) {
  return {
    log: (message) => {
      logger.log("info", { message, service });
    },
  };
};
