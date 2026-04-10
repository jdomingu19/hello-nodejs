"use strict";
// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/plugins/get-age.plugin.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
// --- Class 31: Adapter Pattern ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 65: SpyOn (Object Methods) ---
/**
 * Calculates the age based on a given birthdate string.
 *
 * @param birthdate - The birthdate in string format (e.g., "1995-01-01").
 * @returns The age in years as a number.
 *
 * @example
 * ```ts
 * const age = getAge("1995-01-01");
 * console.log(age); // 31
 * ```
 */
const getAge = (birthdate) => {
    // console.log({ currentYear: new Date().getFullYear() });
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
exports.getAge = getAge;
