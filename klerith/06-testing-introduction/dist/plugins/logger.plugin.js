"use strict";
// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/plugins/logger.plugin.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.logger = void 0;
// --- Class 42: Winston, Node.js Logger ---
// --- Class 43: Winston, Node.js Logger Part 2 ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 68: Testing logger.plugin.ts script with Jest ---
// Import Winston and its format utilities
const winston_1 = __importStar(require("winston"));
// Extract commonly used formatters from Winston
const { combine, timestamp, json } = winston_1.format;
// Create a Winston logger instance with file transports
exports.logger = winston_1.default.createLogger({
    level: "info",
    format: combine(timestamp(), json()),
    transports: [
        new winston_1.default.transports.File({ filename: "error.log", level: "error" }),
        new winston_1.default.transports.File({ filename: "combined.log" }),
    ],
});
// Add console transport to also log messages in the terminal
exports.logger.add(new winston_1.default.transports.Console({
    format: winston_1.default.format.simple(),
}));
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
const buildLogger = (service) => {
    return {
        log: (message) => {
            exports.logger.log("info", {
                message,
                service,
            });
        },
        error: (message) => {
            exports.logger.error("error", {
                message,
                service,
                at: new Date().toISOString(),
            });
        },
    };
};
exports.buildLogger = buildLogger;
