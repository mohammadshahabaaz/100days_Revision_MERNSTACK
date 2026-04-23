import { Request, Response } from "express";
import { getUsers, createUser, getUserById } from "../services/userService";

export const fetchUsers = (req: Request, res: Response): void => {
    const users = getUsers();
    res.status(200).json({
        success: true,
        message: "Users fetched successfully",
        data: users
    });
};

export const addUser = (req: Request, res: Response): void => {
    const { name, role, city, email } = req.body;

    if (!name || !role || !city) {
        res.status(400).json({
            success: false,
            message: "All fields are required",
        });
        return
    }

    const newUser = createUser({ name, role, city, email });

    res.status(201).json({
        success: true,
        message: "Successfully Created",
        data: newUser
    })
}

export const getUserByApplicationId = (req: Request, res: Response): void => {
    const id = Number(req.params.id);

    const user = getUserById(id)

    res.status(200).json({
        success: true,
        message: `Find the data if applicationId ${id}`,
        data: user
    })
}