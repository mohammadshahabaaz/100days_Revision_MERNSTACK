export interface User {
    id: number,
    name: string,
    role: string,
    city: string,
}

export const getUsers = (): User[] => {
    return [
        {
            id: 1,
            name: "Shahabaaz",
            role: "SDE-3",
            city: "Bangalore"
        },
        {
            id: 2,
            name: "Shammi",
            role: "SDE-2",
            city: "USA"
        },
        {
            id: 3,
            name: "Sana",
            role: "Founder",
            city: "Hyderabad"
        }
    ];
};
export const getProfile = (): User[] => {
    return [
        {
            id: 1,
            name: "Shahabaaz",
            role: "SDE-3",
            city: "Bangalore"
        }
    ]
}