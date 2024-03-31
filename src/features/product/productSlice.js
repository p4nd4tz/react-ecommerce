import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductByFilters } from './productAPI';

const initialState = {
    products: [],
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
    async (filter) => {
        const response = await fetchProductByFilters(filter);
        return response.data;
    }
)
export const productSlice = createSlice({
    name: 'product',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(fetchAllProductsAsync.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(fetchProductByFilterAsync.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(fetchProductByFilterAsync.rejected, (state, action) => {
                state.error = action.error.message;
            })
    },
});

export const { increment } = productSlice.actions;

export const selectProduct = (state) => state.product;
export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;
