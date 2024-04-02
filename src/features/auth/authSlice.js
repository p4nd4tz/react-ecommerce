import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser } from './authAPI';

const initialState = {
    user: null,
    error: null,
};


export const createUserAsync = createAsyncThunk(
    'user/createUser',
    async (user) => {
        const response = await createUser(user);
        return response.data;
    }
)

export const checkUserAsync = createAsyncThunk(
    'user/checkUser',
    async (user) => {
        const response = await checkUser(user);
        return response.data;
    }
)

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(createUserAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(createUserAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.user = action.payload;
            })
            .addCase(checkUserAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(checkUserAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.user = action.payload;
            })
            .addCase(checkUserAsync.rejected, (state, action) => {
                state.status = 'idle'
                state.error = action.error;
            })
    },
});

export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;