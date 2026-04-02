# Basics Folder

In non consectetur sint consequat id. In proident non dolore do elit. Eiusmod anim mollit non voluptate dolor minim et.

> Do cillum Lorem deserunt culpa consequat et aliqua incididunt veniam quis consequat excepteur. Sunt excepteur enim cillum incididunt laboris irure excepteur.

## 📦 Commands Used

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

> Built with '\u{2665}' (♥) by Jesús Domínguez [@jdomingu19](https://github.com/jdomingu19/)
