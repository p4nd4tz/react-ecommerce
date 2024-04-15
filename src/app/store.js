import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
import orderReducer from '../features/order/orderSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    auth: authReducer,
    order: orderReducer,
  },
});