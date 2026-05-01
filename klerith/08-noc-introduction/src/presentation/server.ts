// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// presentation/server.ts

// --- Class 110: ServerApp Setup and Configuration ---
// --- Class 111: CronJob & Cron Tasks ---
// --- Class 112: CronService Setup and Configuration ---
// --- Class 113: CheckService, UseCase ---
// --- Class 114: JSON Server ---
// --- Class 115: Dependency Injection (DI) ---

// Import CronService utility to manage recurring tasks
import { CronService } from "./cron/cron-service";

// Import CheckService use case to verify external services
import { CheckService } from "../domain/use-cases/checks/check-service";

/**
 * ServerApp class provides the entry point
 * for starting the application server and
 * registering scheduled background jobs.
 */
export class ServerApp {
  /**
   * Start method initializes the server,
   * logs a startup message, and registers
   * a recurring job that checks service availability.
   *
   * @remarks
   * This demonstrates integration of domain use cases
   * (CheckService) with infrastructure scheduling (CronService).
   */
  public static start(): void {
    console.log("Server started...");

    // Register a job that executes every 5 seconds
    // and checks the availability of Google
    CronService.createJob("*/5 * * * * *", () => {
      const url = "https://google.com/";

      // Inject success and error callbacks into CheckService
      new CheckService(
        () => console.log(`Successfully connected to '${url}'`),
        (error) => console.log(error),
      ).execute(url);

      // Example use case: check local JSON Server running on port 3000
      // new CheckService(
      //   () => console.log("Local JSON Server is available"),
      //   (error) => console.error(`Local JSON Server error: ${error}`),
      // ).execute("http://localhost:3000/");
    });
  }
}
