// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// presentation/server.ts

// --- Class 110: ServerApp Setup and Configuration ---

// Import CronJob class from cron package to schedule recurring tasks
import { CronJob } from "cron";

/**
 * ServerApp class provides the entry point
 * for starting the application server and
 * configuring scheduled background jobs.
 */
export class ServerApp {
  /**
   * Start method initializes the server,
   * logs a startup message, and sets up
   * a CronJob that runs every 3 seconds.
   *
   * @remarks
   * This method demonstrates how to integrate
   * cron-based scheduling into a Node.js app.
   */
  public static start() {
    console.log("Server started...");

    // Create a CronJob scheduled to run every 3 seconds
    const job = new CronJob("*/3 * * * * *", () => {
      const date = new Date();
      console.log("You will see this message every three second!", date);
    });

    // Start the CronJob execution
    job.start();
  }
}
