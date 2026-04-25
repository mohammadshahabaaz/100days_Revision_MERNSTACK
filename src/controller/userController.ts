import { Request, Response } from "express";
import { getUsers, createUser, getUserById } from "../services/userService";
import { errorResponseHandler, successResponseHandler } from "../utils/responseHandler";
import { validateUser } from "../utils/validateUser";
import { errorHandler } from "../middleware/errorHandler";
import { CreateUserDTO } from "../dto/createUserDTO";

export const fetchUsers = (req: Request, res: Response): void => {
    const users = getUsers();
    successResponseHandler(res, "Successfully Fetched", users)
};

export const addUser = (req: Request, res: Response): void => {
    const validation = validateUser(req.body)
    console.log(validation)

    if (!validation.valid) {
        errorResponseHandler(res, validation.message || "Internal Server Error")
        return
    }
    const { name, email, password, role, city } = req.body as CreateUserDTO
    const newUser = createUser({ name, role, city, email, password });
    successResponseHandler(res, "User Added Successfully", newUser)
}

export const getUserByApplicationId = (req: Request, res: Response): void => {
    const id = Number(req.params.id);

    const user = getUserById(id);
    successResponseHandler(res, `Found the User with ${user?.id}`, user)
}