"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Hello World from TypeScript backend");
});
app.get("/health", (req, res) => {
    res.send("Server is Running");
});
app.get("/user", (req, res) => {
    res.json({
        name: "Shahabaaz",
        role: "SDE-2",
        stack: "Node.js + Express + TypeScript"
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`);
});
