// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// presentation/server.ts

// --- Class 110: ServerApp Setup and Configuration ---
// --- Class 111: CronJob & Cron Tasks ---
// --- Class 112: CronService Setup and Configuration ---

// Import CronJob class from cron package to schedule recurring tasks
import { CronService } from "./cron/cron-service";

/**
 * ServerApp class provides the entry point
 * for starting the application server and
 * registering scheduled background jobs.
 */
export class ServerApp {
  /**
   * Start method initializes the server,
   * logs a startup message, and registers
   * a recurring CronService job.
   *
   * @remarks
   * This method demonstrates how to delegate
   * cron-based scheduling to a dedicated service.
   */
  public static start(): void {
    console.log("Server started...");

    // Register a job that executes every 5 seconds
    CronService.createJob("*/5 * * * * *", () => {
      const date = new Date();
      console.log("Cron job executed every five seconds: ", date.toISOString());
    });
  }
}
