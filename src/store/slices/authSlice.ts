import { createSlice } from '@reduxjs/toolkit';

type User = {
    email: string;
    password: string;
    name: string;
}

export interface authSliceProps {
    user: User | null
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: authSliceProps = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.loading = true;
            state.user = action.payload;
            if (state.user?.email === "admin@example.com" && state.user.password === "password") {
                state.isAuthenticated = true;
                state.user = action.payload
                state.loading = false;
                state.error = null;
            } else {
                state.error = "Invalid credentials";
                state.loading = false;
                state.user = null;
            }
        }
    }
});

export default authSlice.reducer;
export const authActions = authSlice.actions;