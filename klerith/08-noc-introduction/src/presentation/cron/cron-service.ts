// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// presentation/cron/cron-service.ts

// --- Class 112: CronService Setup and Configuration ---

// Import CronJob class from cron package to define scheduled jobs
import { CronJob } from "cron";

// Define type aliases for cron time and tick callback
type CronTimeType = string | Date;
type OnTickType = () => void;

/**
 * CronService class provides a utility
 * for creating and managing CronJob instances.
 */
export class CronService {
  /**
   * Creates and starts a CronJob with the given
   * schedule expression or Date and callback function.
   *
   * @param cronTime - Cron expression string or Date object
   * defining when the job should run.
   * @param onTick - Callback function executed
   * each time the job is triggered.
   * @returns A started CronJob instance.
   *
   */
  public static createJob(cronTime: CronTimeType, onTick: OnTickType): CronJob {
    const job = new CronJob(cronTime, onTick);

    // Start the CronJob execution immediately
    job.start();

    return job;
  }
}
