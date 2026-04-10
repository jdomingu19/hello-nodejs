"use strict";
// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/05-factory-functions.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
/**
 * Factory function builder that creates a `makePerson` function.
 *
 * @param getUUIDV4 - Function to generate a unique identifier.
 * @param getAge - Function to calculate age from birthdate.
 * @returns A function that builds a person object with id, name, birthdate, and age.
 */
const buildMakePerson = ({ getUUIDV4, getAge, }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUIDV4(),
            name,
            birthdate,
            age: getAge(birthdate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
