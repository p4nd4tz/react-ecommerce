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
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import PageNotFound from './pages/404'
import OrderSuccessPage from './pages/OrderSuccessPage';

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
    path: "login",
    element:
      <LoginPage />
    ,
  },
  {
    path: "signup",
    element: <SignupPage />,
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
  const user = useSelector(selectUser);

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