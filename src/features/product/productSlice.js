import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductByFilters } from './productAPI';

const initialState = {
    products: [],
    totalItems: 0,
    totalPages: 1,
    status: 'idle'
};

export const fetchAllProductsAsync = createAsyncThunk(
    'product/fetchAllProducts',
    async () => {
        const response = await fetchAllProducts();
        return response.data;
    }
)

export const fetchProductByFilterAsync = createAsyncThunk(
    'product/fetchProductByFilter',
    async ({ filter, pagination }) => {
        const response = await fetchProductByFilters(filter, pagination);
        return response.data;
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProductByFilterAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchProductByFilterAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.products = action.payload.products;
                state.totalItems = action.payload.totalItems;
                state.totalPages = action.payload.totalPages;
            })
            .addCase(fetchProductByFilterAsync.rejected, (state, action) => {
                state.error = action.error.message;
            })
    },
});

export const { increment } = productSlice.actions;

export const selectProduct = (state) => state.product;
export const selectAllProducts = (state) => state.product.products;
export const selectTotalItems = (state) => state.product.totalItems;
export const selectTotalPages = (state) => state.product.totalPages;

export default productSlice.reducer;