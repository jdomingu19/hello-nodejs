// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/domain/use-cases/checks/checks-service.ts

// --- Class 113: CheckService, UseCase ---
// --- Class 115: Dependency Injection (DI) ---

// Define interface for CheckService use case
interface CheckServiceUseCaseInterface {
  execute(url: string): Promise<boolean>;
}

// Define type for success callback
type SuccessCallbackType = () => void;

// Define type for error callback
type ErrorCallbackType = (error: string) => void;

/**
 * CheckService class provides a use case
 * for verifying the availability of a given URL.
 * Success and error handling are injected via callbacks.
 */
export class CheckService implements CheckServiceUseCaseInterface {
  /**
   * Creates a new CheckService instance.
   *
   * @param successCallback - Function executed when the check succeeds.
   * @param errorCallback - Function executed when the check fails.
   */
  constructor(
    private readonly successCallback: SuccessCallbackType,
    private readonly errorCallback: ErrorCallbackType,
  ) {}

  /**
   * Executes a fetch request to the provided URL
   * and triggers the injected callbacks based on the result.
   *
   * @param url - The target URL to check.
   * @returns Promise resolving to true if the service is available,
   * false otherwise.
   *
   * @remarks
   * This method demonstrates Dependency Injection (DI),
   * allowing flexible handling of success and error cases.
   */
  public async execute(url: string): Promise<boolean> {
    try {
      const req: Response = await fetch(url);
      if (!req.ok) {
        throw new Error(`Failed to connect to '${url}'`);
      }

      this.successCallback();
      return true;
    } catch (error) {
      this.errorCallback(`${error}`);
      console.log(`${error}`);
      return false;
    }
  }
}
