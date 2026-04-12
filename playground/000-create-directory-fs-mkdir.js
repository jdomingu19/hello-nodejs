// Hello, Node.js! @jdomingu19
// Playground 000: Create a directory using fs.mkdir

// Import Node.js fs promises API and path resolver
import { promises as fs } from "node:fs";
import { resolve } from "node:path";

(() => {
  /**
   * Asynchronously creates a directory at the given path.
   *
   * @param dirPath - Relative or absolute path of the directory to create.
   * @returns Promise<void>
   *
   * @remarks
   * This function resolves the provided path to an absolute path and uses
   * Node.js `fs.promises.mkdir` with the `recursive` option to ensure that
   * nested subfolders are created automatically. If the directory already
   * exists, no error is thrown. Any errors encountered during creation are
   * logged to the console.
   */
  const createDirectoryAsync = async (dirPath) => {
    try {
      // Resolve the provided path to an absolute path
      const fullPath = resolve(dirPath);

      // Attempt to create the directory (including nested folders if needed)
      await fs.mkdir(fullPath, { recursive: true });

      // Confirm successful creation in the console
      console.log(`Directory created at: ${fullPath}`);
    } catch (error) {
      // Log any error encountered during directory creation
      console.log(`Error creating directory: ${error.message}`);
    }
  };

  // Execute the function to create a nested folder structure
  createDirectoryAsync("./myFolder/subFolder");
})();
