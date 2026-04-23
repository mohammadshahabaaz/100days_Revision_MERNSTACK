"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserById = exports.getUsers = void 0;
let users = [
    {
        id: 1,
        name: "Shahbaaz",
        role: "Future SDE-3",
        city: "Bangalore",
        email: "R@GMail.com"
    }
];
const getUsers = () => {
    return users;
};
exports.getUsers = getUsers;
const getUserById = (id) => {
    const user = users.find((user) => user.id === id);
    return user;
};
exports.getUserById = getUserById;
const createUser = (user) => {
    const newUser = Object.assign({ id: users.length + 1 }, user);
    users.push(newUser);
    return newUser;
};
exports.createUser = createUser;
