import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUserOrders } from './userAPI';

const initialState = {
    userOrders: null,
    status: 'idle',
};


export const fetchUserOrdersAsync = createAsyncThunk(
    'user/fetchUserOrders',
    async (userId) => {
        const response = await fetchUserOrders(userId);
        return response.data;
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUserOrdersAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchUserOrdersAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.userOrders = action.payload;
            })
    },
});

export const selectUserOrders = (state) => state.user.userOrders;

export default userSlice.reducer;