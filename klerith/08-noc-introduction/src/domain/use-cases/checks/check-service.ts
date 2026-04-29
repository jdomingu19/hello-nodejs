// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/domain/use-cases/checks/checks.ts

// --- Class 113: CheckService, UseCase ---

// Define interface for CheckService use case
interface CheckServiceUseCaseInterface {
  execute(url: string): Promise<boolean>;
}

/**
 * CheckService class provides a use case
 * for verifying the availability of a given URL.
 */
export class CheckService implements CheckServiceUseCaseInterface {
  /**
   * Executes a fetch request to the provided URL
   * and returns true if the response is successful.
   *
   * @param url - The target URL to check.
   * @returns Promise resolving to true if the service is available,
   * false otherwise.
   *
   * @remarks
   * This method logs the result to the console
   * and handles errors gracefully.
   */
  public async execute(url: string): Promise<boolean> {
    try {
      const req: Response = await fetch(url);
      if (!req.ok) {
        throw new Error(`Failed to connect to '${url}'`);
      }
      console.log(`Successfully connected to '${url}'`);
      return true;
    } catch (error) {
      console.log(`${error}`);
      return false;
    }
  }
}
