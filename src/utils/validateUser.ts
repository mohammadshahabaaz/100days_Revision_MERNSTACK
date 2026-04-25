import { CreateUserDTO } from "../dto/createUserDTO";

export const validateUser = (data: any): { valid: boolean, message?: string } => {
    if (!data.name || data.name.length < 3) {
        return { valid: false, message: "Name is required and must be at least 3 characters long" };
    }
    if (!data.email || !data.email.includes("@")) {
        return { valid: false, message: "Email is required and must be a valid email address" };
    }
    if (!data.password || data.password.length < 8) {
        return { valid: false, message: "Password is required and must be at least 8 characters long" };
    }
    if (!data.role || !["admin", "Developer"].includes(data.role)) {
        data.role = "User"
    }
    if (!data.city) {
        return { valid: false, message: "City is required" };
    }
    return { valid: true };
}