import { createSlice } from '@reduxjs/toolkit';
import { MOCK_USER } from '../../utils/constants';
import { AuthProps } from '../../types/auth';

const initialState: AuthProps = {
    user: null,
    isAuthenticated: false,
    error: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload;
            if (state.user?.email === MOCK_USER.email && state.user.password === MOCK_USER.password) {
                state.isAuthenticated = true;
                state.user = action.payload
                state.error = null;
            } else {
                state.error = "Invalid credentials";
                state.user = null;
            }
        }
    }
});

export default authSlice.reducer;
export const authActions = authSlice.actions;