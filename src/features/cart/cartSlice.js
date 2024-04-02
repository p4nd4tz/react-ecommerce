import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart, deleteItemFromCart, fetchItemsByUserId, updateCart } from './cartAPI';

const initialState = {
    items: []
};

export const addToCartAsync = createAsyncThunk(
    'cart/addToCart',
    async (item) => {
        const response = await addToCart(item);
        return response.data;
    }
)

export const deleteItemFromCartAsync = createAsyncThunk(
    'cart/deleteItemFromCart',
    async (itemId) => {
        const response = await deleteItemFromCart(itemId);
        return response.data;
    }
);

export const updateCartAsync = createAsyncThunk(
    'cart/updateCart',
    async (update) => {
        const response = await updateCart(update);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const fetchItemsByUserIdAsync = createAsyncThunk(
    'cart/fetchItemsByUserId',
    async () => {
        const response = await fetchItemsByUserId();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(addToCartAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(addToCartAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.items.push(action.payload);
            })
            .addCase(deleteItemFromCartAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                const index = state.items.findIndex(item => item.id === action.payload.id)
                state.items.splice(index, 1);
            })
            .addCase(updateCartAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateCartAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                const index = state.items.findIndex(item => item.id === action.payload.id)
                state.items[index] = action.payload;
            })
            .addCase(fetchItemsByUserIdAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.items = action.payload;
            })
    },
});


export const { } = cartSlice.actions;

export const selectCart = (state) => state.cart;
export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;