import { IUser, UserModel } from "../models/userModel";

interface UserFilter {
    city?: string;
    role?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: "asc" | "desc";
}

export const getUsers = async (filter?: UserFilter) => {
    const query: Record<string, string> = {};
    if (filter?.city) query.city = filter.city;
    if (filter?.role) query.role = filter.role;

    const page = filter?.page || 1;
    const limit = filter?.limit || 10;
    const skip = (page - 1) * limit;
    const sortField = filter?.sortBy || "createdAt";
    const sortOrder = filter?.order === "asc" ? 1 : -1;

    const users = await UserModel.find(query).sort({ [sortField]: sortOrder }).skip(skip).limit(limit);
    const total = await UserModel.countDocuments(query);
    return {
        users,
        pagination: {
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        }
    }
};
export const getUserById = async (id: number): Promise<IUser | null> => {
    return await UserModel.findOne({ id });
}

export const createUser = async (user: {
    name: string;
    role: string;
    city: string;
    email: string;
    password: string;
}): Promise<IUser> => {
    const last = await UserModel.findOne().sort({ id: -1 });
    const nextId = last ? last.id + 1 : 1;
    const newUser = new UserModel({ id: nextId, ...user });
    return await newUser.save();
}

export const deleteUser = async (id: number) => {
    return await UserModel.deleteOne({ id })
}