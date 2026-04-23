"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
const PORT = 4000;
app.use(express_1.default.json());
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
        stack: "Node.js + Express + TypeScript",
        age: 32,
        city: "Bangalore",
        LearningGoal: "top Coder"
    });
});
app.get("/products", (req, res) => {
    const data = [{ id: 1, name: "Laptop" }, { id: 2, name: "Phone" }];
    res.json(data);
});
app.use("/users", userRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`);
});
