import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder } from './orderAPI';

const initialState = {
    orders: [],
    status: 'idle'
};

export const createOrderAsync = createAsyncThunk(
    'order/createOrder',
    async () => {
        const response = await createOrder();
        return response.data;
    }
)

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(createOrderAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(createOrderAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.orders.push(action.payload);
            })
    },
});

export const { increment } = orderSlice.actions;

export const selectOrder = (state) => state.order;
export const selectOrders = (state) => state.order.orders;

export default orderSlice.reducer;