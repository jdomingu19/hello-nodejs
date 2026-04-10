# Testing Introduction Folder

The `06-testing-introduction` folder is dedicated to exploring automated testing in Node.js using Jest and TypeScript. It provides a practical environment where different plugins (`get-age`, `get-uuidv4`, `httpClient`, and `logger`) are tested with clear, reproducible examples. Each test suite demonstrates how to apply the Arrange–Act–Assert pattern, how to mock system methods with `jest.spyOn`, and how to validate structured outputs with coverage reports.

> This folder also integrates testing into the build workflow. The `package.json` scripts ensure that all Jest tests must pass before TypeScript compilation proceeds, while `tsconfig.json` is configured with `rootDir` and `outDir` to maintain a clean separation between source (`src/`) and compiled output (`dist/`).
>
> A `.gitignore` entry excludes Jest coverage artifacts, keeping the repository lightweight and focused on source code and reproducible builds.

## 📦 Used Commands

Initialize a new Node.js project by creating a `package.json` file with metadata such as name, version, and scripts.

```bash
npm init
```

List all available scripts defined in the `package.json` file. Useful to see what commands can be executed with `npm run`.

```bash
npm run
```

Run the script named `start` from `package.json`. By convention, this is often used to start the main application.

```bash
npm start
```

Run the script named dev from `package.json`. Typically configured to start the application in development mode, often with tools like `nodemon`.

```bash
npm run dev
```

Run the script named `start:dev` from package.json. This is a custom script, usually set up to run the app in development mode with specific configurations.

```bash
npm run start:dev
```

Run the script named `start:stage` from `package.json`. Commonly used to start the application in a staging environment for testing before production.

```bash
npm run start:stage
```

Install `nodemon` as a development dependency. nodemon automatically restarts the Node.js application when file changes are detected.

```bash
npm install --save-dev nodemon
```

Alternative shorthand for installing `nodemon` as a development dependency. The `-D` flag is equivalent to `--save-dev`.

```bash
npm install -D nodemon
```

Install `uuid` and `get-age` as regular dependencies

- `uuid`: generates unique identifiers (UUID v4).

- `get-age`: calculates age from a given birthdate.

```bash
npm install uuid get-age
```

Install all dependencies listed in `package.json` into the local `node_modules` folder.

```bash
npm install
```

Shortcut for `npm install`; performs the same action of installing dependencies.

```bash
npm i
```

Install TypeScript and Node.js type definitions as development dependencies for compiling and type checking.

```bash
npm i -D typescript @types/node
```

Initialize a TypeScript configuration file (`tsconfig.json`) with custom output (`dist/`) and source (`src/`) directories.

```bash
npx tsc --init --outDir dist/ --rootDir src
```

Install `ts-node` (to run TypeScript directly without pre-compilation) and `nodemon` (to automatically restart the app on file changes) as development dependencies.

```bash
npm install -D ts-node nodemon
```

Install `rimraf`, a utility to recursively remove files and directories, typically used to clean the `dist/` folder before builds.

```bash
npm install -D rimraf
```

Install type definitions for the `uuid` package, enabling TypeScript to provide type safety and autocompletion when generating UUIDs.

```bash
npm i -D @types/uuid
```

Install Jest, its TypeScript type definitions, the `ts-jest` transformer, and Supertest as development dependencies. These packages provide the testing framework, type safety, and HTTP request testing utilities.

```bash
npm install -D jest @types/jest ts-jest supertest
```

Initialize a Jest configuration interactively. This command has been **deprecated**, but it was previously used to generate a `jest.config.js ` file with customizable options.

```bash
npx jest --init # deprecated
```

Create a Jest configuration using the modern setup command. This generates a `jest.config.ts` or `jest.config.js` file with sensible defaults for TypeScript projects.

```bash
npx create-jest
```

> Built with '\u{2665}' (♥) by Jesús Domínguez [@jdomingu19](https://github.com/jdomingu19/)
