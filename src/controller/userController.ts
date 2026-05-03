import { Request, Response } from "express";
import { getUsers, createUser, getUserById, deleteUser, updateUser } from "../services/userService";
import { errorResponseHandler, successResponseHandler } from "../utils/responseHandler";
import { validateUser } from "../utils/validateUser";
import { errorHandler } from "../middleware/errorHandler";
import { CreateUserDTO } from "../dto/createUserDTO";

export const fetchUsers = async (req: Request, res: Response) => {
    const { city, role, page, limit, sortBy, order } = req.query;
    const users = await getUsers({
        city: city as string,
        role: role as string,
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
        sortBy: sortBy as string,
        order: order as "asc" | "desc",
    });
    successResponseHandler(res, "Successfully Fetched", users)
};

export const addUser = async (req: Request, res: Response) => {
    const validation = validateUser(req.body)

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
export const updateUserById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { name, role, city, email } = req.body;
    const updated = await updateUser(id, { name, role, city, email });
    successResponseHandler(res, "User Updated Successfully", updated);
}

export const deleteUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedUser = await deleteUser(Number(id))
    successResponseHandler(res, "Deleted Successfully", deletedUser)
}