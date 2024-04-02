import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchBrands, fetchCategories, fetchProductByFilters, fetchProductById } from './productAPI';

const initialState = {
    products: [],
    totalItems: 0,
    totalPages: 1,
    status: 'idle',
    brands: [],
    categories: [],
    selectedProduct: null,
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

export const fetchCategoriesAsync = createAsyncThunk(
    'product/fetchCategories',
    async () => {
        const response = await fetchCategories();
        return response.data;
    }
)

export const fetchBrandsAsync = createAsyncThunk(
    'product/fetchBrands',
    async () => {
        const response = await fetchBrands();
        return response.data;
    }
)

export const fetchProductByIdAsync = createAsyncThunk(
    'product/fetchProductById',
    async (id) => {
        const response = await fetchProductById(id);
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
            .addCase(fetchCategoriesAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.categories = action.payload;
            })
            .addCase(fetchBrandsAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.brands = action.payload;
            })
            .addCase(fetchProductByIdAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.selectedProduct = action.payload;
            })
    },
});

export const { increment } = productSlice.actions;

export const selectProduct = (state) => state.product;
export const selectAllProducts = (state) => state.product.products;
export const selectTotalItems = (state) => state.product.totalItems;
export const selectTotalPages = (state) => state.product.totalPages;
export const selectCategories = (state) => state.product.categories;
export const selectBrands = (state) => state.product.brands;
export const selectProductById = (state) => state.product.selectedProduct

export default productSlice.reducer;