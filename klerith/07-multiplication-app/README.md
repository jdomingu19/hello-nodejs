# Multiplication App Folder

Sit amet est velit laboris sint nostrud labore do cupidatat esse do ea sunt. Proident in ad cupidatat voluptate occaecat magna dolore aute ut. Et nostrud tempor ea amet labore cillum officia sint laborum. Nostrud ipsum aute nulla elit. Ex nostrud dolor nisi nulla sit ipsum commodo est nostrud ullamco anim.

> Qui exercitation sit laborum sunt id aliquip et aliquip. Cillum velit consectetur esse fugiat elit commodo exercitation nisi ut id exercitation occaecat consectetur amet. Id reprehenderit qui fugiat nisi veniam irure.

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

## About Argv in Node.js

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

> Built with '\u{2665}' (♥) by Jesús Domínguez [@jdomingu19](https://github.com/jdomingu19/)
