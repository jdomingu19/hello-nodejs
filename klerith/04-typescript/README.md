# TypeScript Folder

Magna et eiusmod veniam aliqua do id. Consequat reprehenderit cupidatat est proident anim proident amet commodo proident occaecat ipsum ad occaecat. Est tempor officia labore laborum amet fugiat esse. Deserunt consequat mollit occaecat reprehenderit ut velit Lorem.

> Eu proident et eiusmod aute in veniam duis anim magna. Anim culpa proident irure irure nisi cillum ut dolore exercitation ullamco exercitation enim qui. Id aute consequat officia laborum eu proident sit ea deserunt esse nostrud proident aliquip.

## 📦 Used Commands

Initialize a new Node.js project with default settings and generate a `package.json` file.

```bash
npm init -y
```

Run the JavaScript entry file directly with Node.js.

```bash
node src/index.js
```

Run the entry file without specifying the `.js` extension (Node.js automatically resolves it).

```bash
node src/index
```

Start the application with automatic restart on file changes using `nodemon`.

```bash
npx nodemon src/index.js
```

Install TypeScript and Node.js type definitions as development dependencies.

```bash
npm i -D typescript @types/node
```

Initialize a TypeScript configuration file (`tsconfig.json`) with custom output and source directories.

```bash
npx tsc --init --outDir dist/ --rootDir src
```

Run the TypeScript compiler in watch mode to recompile automatically on file changes.

```bash
npx tsc --watch
```

Execute the compiled JavaScript output with `nodemon` to enable hot reload.

```bash
npx nodemon dist/index.js
```

Install `ts-node` (to run TypeScript directly) and `nodemon` (for hot reload) as development dependencies.

```bash
npm install -D ts-node nodemon
```

Run the project in development mode using the `dev` script defined in `package.json`.

```bash
npm run dev
```

Install `rimraf`, a utility to remove files and folders (used to clean the `dist/` directory before builds).

```bash
npm install -D rimraf
```

> Built with '\u{2665}' (♥) by Jesús Domínguez [@jdomingu19](https://github.com/jdomingu19/)
