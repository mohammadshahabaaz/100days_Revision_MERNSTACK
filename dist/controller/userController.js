"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByApplicationId = exports.addUser = exports.fetchUsers = void 0;
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
const addUser = (req, res) => {
    const { name, role, city, email } = req.body;
    if (!name || !role || !city) {
        res.status(400).json({
            success: false,
            message: "All fields are required",
        });
        return;
    }
    const newUser = (0, userService_1.createUser)({ name, role, city, email });
    res.status(201).json({
        success: true,
        message: "Successfully Created",
        data: newUser
    });
};
exports.addUser = addUser;
const getUserByApplicationId = (req, res) => {
    const id = Number(req.params.id);
    const user = (0, userService_1.getUserById)(id);
    res.status(200).json({
        success: true,
        message: `Find the data if applicationId ${id}`,
        data: user
    });
};
exports.getUserByApplicationId = getUserByApplicationId;
