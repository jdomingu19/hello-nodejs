// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/plugins/get-uuidv4.plugin.ts

// --- Class 31: Adapter Pattern ---
// --- Class 48: Migrate Project to TypeScript ---

// Import the v4 method from the uuid package
import { v4 as uuidv4 } from "uuid";

/**
 * Generates a unique identifier (UUID v4).
 *
 * @returns A string representing a UUID v4.
 *
 * @example
 * ```ts
 * const id = getUUIDV4();
 * console.log(id); // "550e8400-e29b-41d4-a716-446655440000"
 * ```
 */
export const getUUIDV4 = (): string => uuidv4();
