# 🗂️ Multiplication App Folder

This folder contains the implementation of a Node.js application designed to generate multiplication tables with configurable options. The project demonstrates how to structure a TypeScript application, parse command-line arguments using Yargs, and persist results to dynamically created output files. It also showcases clean architecture principles by separating concerns into domain use cases, configuration plugins, and presentation layers.

> The goal of this app is to provide a practical example of handling CLI arguments, validating input, and producing both console output and file-based results. It highlights how to extend functionality step by step, following professional development practices.

## 📦 Used Commands

Initialize a new Node.js project with default settings (`package.json` auto‑generated).

```bash
npm init -y
```

Install development dependencies for TypeScript workflow: compiler, Node.js type definitions, `ts-node` for execution, `nodemon` for live reload, and `rimraf` for clean builds.

```bash
npm i -D typescript @types/node ts-node nodemon rimraf
```

Generate a `tsconfig.json` file with output directory set to `dist/` and source directory set to `src/`.

```bash
npx tsc --init --outDir dist/ --rootDir src
```

Run the project in development mode using the script defined in `package.json` (typically with `ts-node`).

```bash
npm run dev
```

Run the project in development mode with `nodemon` for automatic restarts on file changes.

```bash
npm run dev:nodemon
```

Compile TypeScript files into JavaScript, outputting them into the `dist/` folder.

```bash
npm run build
```

Execute the compiled application entry point directly from the `dist/` folder.

```bash
node dist/index.js
```

Execute the compiled application with a custom argument (`--base 42`) to set the multiplication table base.

```bash
node dist/index.js --base 42
```

Install the latest stable version of the `yargs` package to enable command-line argument parsing.

```bash
npm i yargs
```

Install a specific version of `yargs` (`17.7.2`) to ensure compatibility and reproducibility across environments.

```bash
npm i yargs@17.7.2
```

Install the upcoming release candidate (`@next`) of Yargs for testing new features before they are officially released.

```bash
npm i yargs@next
```

Install the most recent version of Yargs (`@latest`) to always use the newest stable release available.

```bash
npm i yargs@latest
```

Install TypeScript type definitions for `yargs` as a development dependency to enable type safety and IntelliSense in TypeScript projects.

```bash
npm i @types/yargs --save-dev
```

Run the application entry point (`src/index.ts`) with `ts-node` and display the `yargs` help menu, showing available options and usage instructions.

```bash
npx ts-node src/index.ts --help
```

Run the application with a short flag `-b` to set the multiplication table base to 100.

```bash
npx ts-node src/index.ts -b 100
```

Run the application with an assignment syntax `-b=100` to set the multiplication table base to 100.

```bash
npx ts-node src/index.ts -b=100
```

Run the application with a long flag `--base` to set the multiplication table base to 100.

```bash
npx ts-node src/index.ts --base 100
```

Run the application with a long flag assignment `--base=100` to set the multiplication table base to 100.

```bash
npx ts-node src/index.ts --base=100
```

Run the application with short flags `-b` and `-l` to set the base to 5 and the limit to 15.

```bash
npx ts-node src/index.ts -b 5 -l 15
```

Run the application with short flag assignment syntax to set the base to 5 and the limit to 15.

```bash
npx ts-node src/index.ts -b=5 -l=15
```

Run the application with long flags `--base` and `--limit` to set the base to 5 and the limit to 15.

```bash
npx ts-node src/index.ts --base 5 --limit 15
```

Run the application with long flag assignment syntax to set the base to 5 and the limit to 15.

```bash
npx ts-node src/index.ts --base=5 --limit=15
```

Run the application with short flags `-b`, `-l`, and `-s` to set the base to 5, limit to 15, and enable display of the multiplication table.

```bash
npx ts-node src/index.ts -b 5 -l 15 -s
```

Run the application with short flags and explicit boolean value for `-s` to show the multiplication table.

```bash
npx ts-node src/index.ts -b 5 -l 15 -s true
```

Run the application with short flag assignment syntax to set base, limit, and show options explicitly.

```bash
npx ts-node src/index.ts -b=5 -l=15 -s=true
```

Run the application with long flags `--base`, `--limit`, and `--show` to configure arguments and enable table display.

```bash
npx ts-node src/index.ts --base 5 --limit 15 --show
```

Run the application with long flags and explicit boolean value for `--show` to display the multiplication table.

```bash
npx ts-node src/index.ts --base 5 --limit 15 --show true
```

Run the application with long flag assignment syntax to set base, limit, and show options explicitly.

```bash
npx ts-node src/index.ts --base=5 --limit=15 --show=true
```

Consectetur sunt in minim duis irure est nisi nostrud excepteur aliqua occaecat id ut laboris.

```bash
npm install -D jest @types/jest ts-jest supertest
```

Consectetur sunt in minim duis irure est nisi nostrud excepteur aliqua occaecat id ut laboris.

```bash
npx create-jest
```

Consectetur sunt in minim duis irure est nisi nostrud excepteur aliqua occaecat id ut laboris.

```bash
npm run test
```

Consectetur sunt in minim duis irure est nisi nostrud excepteur aliqua occaecat id ut laboris.

```bash
npm run test:watch
```

Consectetur sunt in minim duis irure est nisi nostrud excepteur aliqua occaecat id ut laboris.

```bash
npm run test:coverage
```

## 🟩 About Argv in Node.js

> When working with command-line arguments in Node.js, there are multiple syntaxes available to pass values. You can use short flags (`-a`), long flags (`--alias`), and assign values either with a space or with an equals sign. These variations are all interpreted by Node.js and libraries like Yargs, giving flexibility in how arguments are written and parsed.

**Common Argument Syntax Variations**

```bash
# Short flag with space
-a value

# Short flag with equals sign
-a=value

# Long flag with space
--alias value

# Long flag with equals sign
--alias=value
```

**Examples in Node.js Context**

```bash
# Short flag without value (boolean flag)
node dist/index.js -a

# Short flag with space to assign a value
node dist/index.js -a value

# Short flag with equals sign
node dist/index.js -a=value

# Long flag without value (boolean flag)
node dist/index.js --alias

# Long flag with space to assign a value
node dist/index.js --alias value

# Long flag with equals sign
node dist/index.js --alias=value
```

### 🎯 Command Examples

> The following examples demonstrate how to run the application with different configurations. Each command generates a multiplication table with a specific base, limit, and output settings. Custom file names (`-n`) and paths (`-p`) are used to organize the generated tables into the `named-times-tables` directory.

```bash
npx ts-node src/index.ts -b 1 -l 24 -s -n one-times-table -p named-times-tables
npx ts-node src/index.ts -b 2 -l 24 -s -n two-times-table -p named-times-tables
npx ts-node src/index.ts -b 3 -l 24 -s -n three-times-table -p named-times-tables
npx ts-node src/index.ts -b 4 -l 24 -s -n four-times-table -p named-times-tables
npx ts-node src/index.ts -b 5 -l 24 -s -n five-times-table -p named-times-tables
npx ts-node src/index.ts -b 6 -l 24 -s -n six-times-table -p named-times-tables
npx ts-node src/index.ts -b 7 -l 24 -s -n seven-times-table -p named-times-tables
npx ts-node src/index.ts -b 8 -l 24 -s -n eight-times-table -p named-times-tables
npx ts-node src/index.ts -b 9 -l 24 -s -n nine-times-table -p named-times-tables
npx ts-node src/index.ts -b 10 -l 24 -s -n ten-times-table -p named-times-tables
```

> Built with '\u{2665}' (♥) by Jesús Domínguez [@jdomingu19](https://github.com/jdomingu19/)
