import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetail from './features/product/components/ProductDetail';
import ProductList from './features/product/components/ProductList';
import Protected from './features/auth/components/Protected';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import PageNotFound from './pages/404'
import OrderSuccessPage from './pages/OrderSuccessPage';
import User from './pages/User'
import UserOrders from './features/user/components/UserOrders';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AdminProductList from './features/admin/components/AdminProductList';
import ProductForm from './features/admin/components/ProductForm';
import AdminOrders from './features/admin/components/AdminOrders';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Protected>
        <Home />
      </Protected>
    ,
    children: [
      { index: true, element: <ProductList /> },
      { path: "/products/:id", element: <ProductDetail /> }
    ]
  },
  {
    path: "/admin",
    element:
      <ProtectedAdmin>
        <Home />
      </ProtectedAdmin>
    ,
    children: [
      { index: true, element: <AdminProductList /> },
      { path: "product-form", element: <ProductForm /> },
      { path: "product-form/edit/:id", element: <ProductForm /> },
      { path: "orders", element: <AdminOrders /> },
    ]
  },
  {
    path: "/user",
    element:
      <Protected>
        <User />
      </Protected>
    ,
    children: [
      { index: true, element: <ProductList /> },
      { path: "orders", element: <UserOrders /> }
    ]
  },
  {
    path: "login",
    element:
      <LoginPage />
    ,
  },
  {
    path: "logout",
    element:
      <Logout />
    ,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "cart",
    element: <Protected>
      <CartPage />
    </Protected>
    ,
  },
  {
    path: "checkout",
    element: <Protected>
      <CheckoutPage />
    </Protected>
  },
  {
    path: "*",
    element: <PageNotFound />
  },
  {
    path: "order-success",
    element: <Protected>
      <OrderSuccessPage />
    </Protected>
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;