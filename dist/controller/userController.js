"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUsers = void 0;
const userService_1 = require("../services/userService");
const fetchUsers = (req, res) => {
    const users = (0, userService_1.getUsers)();
    res.status(200).json({
        success: true,
        message: "Users fetched successfully",
        data: users
    });
};
exports.fetchUsers = fetchUsers;
