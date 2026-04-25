import mongoose, { Schema, Document } from "mongoose";
import { timeStamp } from "node:console";

export interface IUser extends Document {
    id: number;
    name: string;
    role: string;
    city: string;
    email: string;
    password: string;

}

const userSchema = new Schema<IUser>({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String, required: true, enum: ["admin", "Developer", "User"] },
    city: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

}, { timestamps: true })

export const UserModel = mongoose.model<IUser>("User", userSchema)