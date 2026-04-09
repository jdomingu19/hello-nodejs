// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// tests/plugins/http-client.plugin.test.ts

// --- Class 36: Adapter Pattern with FetchAPI ---
// --- Class 37: Axios, Promise based HTTP Client  ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 67: Testing http-client.plugin.ts script with Jest ---

// Import the httpClient plugin from the plugins module
import { httpClient } from "../../src/plugins";

// Define the test suite for the http-client.plugin.ts script
describe("plugins/http-client.plugin.ts", () => {
  // Test case: verify that httpClient.get returns structured JSON data
  test("httpClient.get() should return a string", async () => {
    // Act: perform a GET request to a sample API endpoint
    const data = await httpClient.get(
      "https://jsonplaceholder.typicode.com/todos/27",
    );

    // Assert: validate that the response matches the expected object shape
    expect(data).toEqual({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      completed: expect.any(Boolean),
    });
  });

  // Test case: verify that httpClient exposes CRUD methods
  test("httpClient should have GET, POST, PUT and DELETE methods", () => {
    // Assert: validate that each method exists and is a function
    expect(typeof httpClient.get).toBe("function");
    expect(typeof httpClient.post).toBe("function");
    expect(typeof httpClient.put).toBe("function");
    expect(typeof httpClient.delete).toBe("function");
  });
});
