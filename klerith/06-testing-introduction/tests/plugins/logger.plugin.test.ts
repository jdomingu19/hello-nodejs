// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// tests/plugins/logger.plugin.test.ts

// --- Class 42: Winston, Node.js Logger ---
// --- Class 43: Winston, Node.js Logger Part 2 ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 68: Testing logger.plugin.ts script with Jest ---

// Import the buildLogger factory function and the base Winston logger instance
import { buildLogger, logger as winstonLogger } from "../../src/plugins";

// Define the test suite for the logger.plugin.ts script
describe("plugins/logger.plugin.ts", () => {
  // Test case: verify that buildLogger returns a logger object with log and error methods
  test("buildLogger() should return a function logger", () => {
    // Act: create a new logger instance for the 'test' service
    const logger = buildLogger("test");

    // Assert: validate that the logger exposes log and error functions
    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  // Test case: verify that logger.log delegates to the underlying Winston logger
  test("logger.log should log a message", () => {
    // Arrange: spy on the base Winston logger's log method
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");

    // Act: build a logger for a test service and log a message
    const message = "test message";
    const service = "test service";
    const logger = buildLogger(service);
    logger.log(message);

    // Assert: validate that the Winston logger was called with expected arguments
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        level: expect.any(String),
        message: expect.any(String),
        service: expect.any(String),
        timestamp: expect.any(String),
      }),
    );
  });
});
