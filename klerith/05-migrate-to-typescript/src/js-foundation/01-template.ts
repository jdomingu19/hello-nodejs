// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/01-template.ts

// --- Class 23: imports & exports ---
// --- Class 24: nodemon, Third-Party Packages ---
// --- Class 48: Migrate Project to TypeScript ---

// Export a typed email template string with placeholders for dynamic values
export const emailTemplate: string = `
<div>
  <h1>Hi, {{name}}!</h1>
  <p>Thank you for your order.</p>
  <p>Order ID: {{orderId}}</p>
</div>`;
