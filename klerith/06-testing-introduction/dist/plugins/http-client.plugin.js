"use strict";
// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/plugins/http-client.plugin.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientPlugin = void 0;
// --- Class 36: Adapter Pattern with FetchAPI ---
// --- Class 37: Axios, Promise based HTTP Client  ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 67: Testing http-client.plugin.ts script with Jest ---
// Import Axios for HTTP requests
const axios_1 = __importDefault(require("axios"));
/**
 * httpClientPlugin provides a simple adapter around Axios
 * exposing common HTTP methods (GET, POST, PUT, DELETE).
 */
exports.httpClientPlugin = {
    // GET method: performs a GET request and returns the response data
    get: async (url) => {
        const { data } = await axios_1.default.get(url);
        return data;
        // Alternative way to get pokemon data with Axios
        // const response = await axios.get(url);
        // return response.data;
    },
    // POST method: placeholder implementation throwing an error
    post: async (url, body) => {
        throw new Error("Not implemented");
    },
    // PUT method: placeholder implementation throwing an error
    put: async (url, body) => {
        throw new Error("Not implemented");
    },
    // DELETE method: placeholder implementation throwing an error
    delete: async (url) => {
        throw new Error("Not implemented");
    },
};
