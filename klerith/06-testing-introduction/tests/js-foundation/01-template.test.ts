// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// tests/js-foundation/01-template.test.ts

// --- Class 23: imports & exports ---
// --- Class 24: nodemon, Third-Party Packages ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 58: Testing 01-template.ts script with Jest ---

// test("Hello, Jest!", () => {});

// Import the emailTemplate string from the source module
import { emailTemplate } from "../../src/js-foundation/01-template";

// Define the test suite for the 01-template.ts script
describe("js-foundation/01-template.ts", () => {
  // Test case: verify that the template contains basic greeting and order information
  test("emailTemplate should contain a greeting", () => {
    // Assertions: check for expected static text fragments
    expect(emailTemplate).toContain("Hi,");
    expect(emailTemplate).toContain("Thank you");
    expect(emailTemplate).toContain("Order ID");
  });

  // Test case: verify that the template includes placeholders for dynamic values
  test("emailTemplate should contain {{name}} and {{orderId}}", () => {
    // Assertions: check using regex to ensure placeholders exist
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
    // Assertions: check using string containment for clarity
    expect(emailTemplate).toContain("{{name}}");
    expect(emailTemplate).toContain("{{orderId}}");
  });
});
