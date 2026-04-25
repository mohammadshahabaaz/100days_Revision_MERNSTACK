import { Request, Response } from "express";
import { getUsers, createUser, getUserById, deleteUser } from "../services/userService";
import { errorResponseHandler, successResponseHandler } from "../utils/responseHandler";
import { validateUser } from "../utils/validateUser";
import { errorHandler } from "../middleware/errorHandler";
import { CreateUserDTO } from "../dto/createUserDTO";

export const fetchUsers = async (req: Request, res: Response) => {
    const users = await getUsers();
    console.log("Controller data", users)
    successResponseHandler(res, "Successfully Fetched", users)
};

export const addUser = async (req: Request, res: Response) => {
    const validation = validateUser(req.body)
    console.log(validation)

    if (!validation.valid) {
        errorResponseHandler(res, validation.message || "Internal Server Error")
        return
    }
    const { name, email, password, role, city } = req.body as CreateUserDTO
    const newUser = await createUser({ name, role, city, email, password });
    successResponseHandler(res, "User Added Successfully", newUser)
}

export const getUserByApplicationId = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await getUserById(id);
    successResponseHandler(res, `Found the User with ${user?.id}`, user)
}
export const deleteUserById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const deletedUser = await deleteUser(id)
    successResponseHandler(res, "Deleted Successfully", deletedUser)
}