import { Request, Response } from "express";
import { getUsers, createUser, getUserById } from "../services/userService";
import { successResponse } from "../utils/responseHandler";

export const fetchUsers = (req: Request, res: Response): void => {
    const users = getUsers();
    successResponse(res, "Successfully Fetched", users)
};

export const addUser = (req: Request, res: Response): void => {
    const { name, role, city, email } = req.body;

    if (!name) {
        throw new Error("Name is missing")
    }
    const newUser = createUser({ name, role, city, email });
    successResponse(res, "User Added Successfully", newUser)
}

export const getUserByApplicationId = (req: Request, res: Response): void => {
    const id = Number(req.params.id);

    const user = getUserById(id);
    successResponse(res, `Found the User with ${user?.id}`, user)
}