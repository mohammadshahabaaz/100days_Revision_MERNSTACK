"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.getUserByApplicationId = exports.addUser = exports.fetchUsers = void 0;
const userService_1 = require("../services/userService");
const responseHandler_1 = require("../utils/responseHandler");
const validateUser_1 = require("../utils/validateUser");
const fetchUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userService_1.getUsers)();
    console.log("Controller data", users);
    (0, responseHandler_1.successResponseHandler)(res, "Successfully Fetched", users);
});
exports.fetchUsers = fetchUsers;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validation = (0, validateUser_1.validateUser)(req.body);
    console.log(validation);
    if (!validation.valid) {
        (0, responseHandler_1.errorResponseHandler)(res, validation.message || "Internal Server Error");
        return;
    }
    const { name, email, password, role, city } = req.body;
    const newUser = yield (0, userService_1.createUser)({ name, role, city, email, password });
    (0, responseHandler_1.successResponseHandler)(res, "User Added Successfully", newUser);
});
exports.addUser = addUser;
const getUserByApplicationId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const user = yield (0, userService_1.getUserById)(id);
    (0, responseHandler_1.successResponseHandler)(res, `Found the User with ${user === null || user === void 0 ? void 0 : user.id}`, user);
});
exports.getUserByApplicationId = getUserByApplicationId;
const deleteUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const deletedUser = yield (0, userService_1.deleteUser)(id);
    (0, responseHandler_1.successResponseHandler)(res, "Deleted Successfully", deletedUser);
});
exports.deleteUserById = deleteUserById;
