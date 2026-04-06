// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/05-factory-functions.ts

// --- Class 29: Factory Functions Introduction ---
// --- Class 30: Factory Functions Need ---
// --- Class 31: Adapter Pattern ---
// --- Class 32: Applying Factory Constructor ---
// --- Class 48: Migrate Project to TypeScript ---

// Define the interface for utility functions required by the factory
interface BuildMakePersonPropertiesInterface {
  getUUIDV4: () => string;
  getAge: (birthdate: string) => number;
}

// Define the interface for person properties passed to the factory
interface PersonPropertiesInterface {
  name: string;
  birthdate: string;
}

/**
 * Factory function builder that creates a `makePerson` function.
 *
 * @param getUUIDV4 - Function to generate a unique identifier.
 * @param getAge - Function to calculate age from birthdate.
 * @returns A function that builds a person object with id, name, birthdate, and age.
 */
export const buildMakePerson = ({
  getUUIDV4,
  getAge,
}: BuildMakePersonPropertiesInterface) => {
  return ({ name, birthdate }: PersonPropertiesInterface) => {
    return {
      id: getUUIDV4(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};
