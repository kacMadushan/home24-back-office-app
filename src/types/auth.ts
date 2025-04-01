export interface User {
    email: string;
    password: string;
}

export interface AuthProps {
    user: User | null
    isAuthenticated: boolean;
    error: string | null;
}