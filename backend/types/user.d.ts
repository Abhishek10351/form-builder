interface User {
    id: number;
    name: string;
    email: string;
    password?: string; // Optional, as it might not be needed in all scenarios
}

export default User;
