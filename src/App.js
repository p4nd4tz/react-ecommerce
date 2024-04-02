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
import { fetchItemsByUserId } from './features/cart/cartAPI';
import { selectUser } from './features/auth/authSlice';

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
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserId(user.id));
    }
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;