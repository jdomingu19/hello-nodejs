// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/js-foundation/01-email-template.js

// --- Class 23: imports & exports ---

// Define a reusable HTML email template as a string
// const emailTemplate = `
// <div>
//   <h1>Hi, {{name}}!</h1>
//   <p>Thank you for your order.</p>
// </div>`;

// console.log(emailTemplate);

// --- Class 24: nodemon, Third-Party Packages ---

// Define a reusable HTML email template as a string
const emailTemplate = `
<div>
  <h1>Hi, {{name}}!</h1>
  <p>Thank you for your order.</p>
  <p>Order ID: {{orderId}}</p>
</div>`;

// Export the template so it can be imported in other files
module.exports = {
  emailTemplate,
};
