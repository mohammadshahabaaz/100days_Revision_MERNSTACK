import { Request, Response } from "express";
import { getUsers, getProfile } from "../services/userService";

export const fetchUsers = (req: Request, res: Response): void => {
    const users = getUsers();
    res.status(200).json({
        success: true,
        message: "Users fetched successfully",
        data: users
    });
};

export const profileUsers = (req: Request, res: Response): void => {
    const profile = getProfile();
    res.status(200).json({
        success: true,
        message: "User profile fetched successfully",
        data: profile
    });
}