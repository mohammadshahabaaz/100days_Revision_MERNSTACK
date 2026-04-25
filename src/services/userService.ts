import { IUser, UserModel } from "../models/userModel";


export const getUsers = async () => {
    return await UserModel.find();
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