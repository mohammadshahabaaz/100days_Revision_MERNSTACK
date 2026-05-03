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
exports.deleteUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const userModel_1 = require("../models/userModel");
const getUsers = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    if (filter === null || filter === void 0 ? void 0 : filter.city) {
        query.city = filter.city;
    }
    if (filter === null || filter === void 0 ? void 0 : filter.role) {
        query.role = filter.role;
    }
    const page = (filter === null || filter === void 0 ? void 0 : filter.page) || 1;
    const limit = (filter === null || filter === void 0 ? void 0 : filter.limit) || 10;
    const skip = (page - 1) * limit;
    const users = yield userModel_1.UserModel.find(query).skip(skip).limit(limit);
    const total = yield userModel_1.UserModel.countDocuments(query);
    return {
        users,
        pagination: {
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        }
    };
});
exports.getUsers = getUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield userModel_1.UserModel.findOne({ id });
});
exports.getUserById = getUserById;
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const last = yield userModel_1.UserModel.findOne().sort({ id: -1 });
    const nextId = last ? last.id + 1 : 1;
    const newUser = new userModel_1.UserModel(Object.assign({ id: nextId }, user));
    return yield newUser.save();
});
exports.createUser = createUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield userModel_1.UserModel.deleteOne({ id });
});
exports.deleteUser = deleteUser;
