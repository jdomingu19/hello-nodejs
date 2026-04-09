// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/plugins/logger.plugin.ts

// --- Class 42: Winston, Node.js Logger ---
// --- Class 43: Winston, Node.js Logger Part 2 ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 68: Testing logger.plugin.ts script with Jest ---

// Import Winston and its format utilities
import winston, { format } from "winston";

// Extract commonly used formatters from Winston
const { combine, timestamp, json } = format;

// Create a Winston logger instance with file transports
export const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
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
 * @returns An object with `log` and `error` methods for structured logging.
 *
 * @example
 * ```ts
 * const logger = buildLogger("auth.service");
 * logger.log("User authenticated successfully");
 * logger.error("Failed to authenticate user");
 * ```
 */
export const buildLogger = (service: string) => {
  return {
    log: (message: string) => {
      logger.log("info", {
        message,
        service,
      });
    },
    error: (message: string) => {
      logger.error("error", {
        message,
        service,
        at: new Date().toISOString(),
      });
    },
  };
};
