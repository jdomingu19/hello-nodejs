"use strict";
// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/01-template.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTemplate = void 0;
// --- Class 23: imports & exports ---
// --- Class 24: nodemon, Third-Party Packages ---
// --- Class 48: Migrate Project to TypeScript ---
// Export a typed email template string with placeholders for dynamic values
exports.emailTemplate = `
<div>
  <h1>Hi, {{name}}!</h1>
  <p>Thank you for your order.</p>
  <p>Order ID: {{orderId}}</p>
</div>`;
