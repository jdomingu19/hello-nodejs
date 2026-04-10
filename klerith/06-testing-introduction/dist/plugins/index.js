"use strict";
// Hello, Node.js! @jdomingu19
// Udemy Course by @Klerith (2023)
// src/plugins/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = exports.getUUIDV4 = exports.getAge = exports.logger = exports.buildLogger = void 0;
// --- Class 31: Adapter Pattern ---
// --- Class 36: Adapter Pattern with FetchAPI ---
// --- Class 42: Winston, Node.js Logger ---
// --- Class 48: Migrate Project to TypeScript ---
// --- Class 68: Testing logger.plugin.ts script with Jest ---
// Export all plugins from a single entry point for easier imports
var logger_plugin_1 = require("./logger.plugin");
Object.defineProperty(exports, "buildLogger", { enumerable: true, get: function () { return logger_plugin_1.buildLogger; } });
Object.defineProperty(exports, "logger", { enumerable: true, get: function () { return logger_plugin_1.logger; } });
var get_age_plugin_1 = require("./get-age.plugin");
Object.defineProperty(exports, "getAge", { enumerable: true, get: function () { return get_age_plugin_1.getAge; } });
var get_uuidv4_plugin_1 = require("./get-uuidv4.plugin");
Object.defineProperty(exports, "getUUIDV4", { enumerable: true, get: function () { return get_uuidv4_plugin_1.getUUIDV4; } });
var http_client_plugin_1 = require("./http-client.plugin");
Object.defineProperty(exports, "httpClient", { enumerable: true, get: function () { return http_client_plugin_1.httpClientPlugin; } });
