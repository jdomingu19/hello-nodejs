# 🗂️ JSON Server Folder

This folder demonstrates how to set up and use **JSON Server** to quickly create a full fake REST API with minimal configuration. It is designed to simulate backend endpoints for testing, prototyping, and front‑end development without the need to implement a real database or server logic.

> By working with JSON Server, you can define your data in a simple `db.json` file and instantly expose RESTful routes such as `/posts`, `/comments`, or `/profile`. This makes it an excellent tool for practicing HTTP requests, building proof‑of‑concept applications, and validating client‑side integrations.

## 📦 Used Commands

> 1. **Initialize a new Node.js project**  
>    Creates a `package.json` file with default settings, preparing the folder for dependency management.
>
> ```bash
> npm init -y
> ```

> 2. **Install JSON Server dependency**  
>    Adds JSON Server to the project, enabling the creation of a fake REST API from a JSON file.
>
> ```bash
> npm install json-server
> ```

> 3. **Run JSON Server with db.json**  
>    Starts the server and watches the `db.json` file, automatically exposing REST endpoints based on its structure.
>
> ```bash
> json-server --watch db.json
> ```

> 4. **Start the project using npm script**  
>    Executes the predefined `start` script from `package.json`, typically used to run JSON Server with custom options.
>
> ```bash
> npm start
> ```

##

> Built with '\u{2665}' (♥) by Jesús Domínguez [@jdomingu19](https://github.com/jdomingu19/)
