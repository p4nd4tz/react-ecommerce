import React from 'react';
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
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;