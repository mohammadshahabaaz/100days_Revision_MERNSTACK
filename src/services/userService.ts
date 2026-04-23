export interface User {
    id: number,
    name: string,
    role: string,
    city: string,
    email: string
}

let users: User[] = [
    {
        id: 1,
        name: "Shahbaaz",
        role: "Future SDE-3",
        city: "Bangalore",
        email: "R@GMail.com"
    }
]

export const getUsers = (): User[] => {
    return users;
};
export const getUserById = (id: number) => {
    const user = users.find((user) => user.id === id);
    return user
}
export const createUser = (user: Omit<User, "id">): User => {
    const newUser: User = {
        id: users.length + 1,
        ...user
    };
    users.push(newUser);
    return newUser
}