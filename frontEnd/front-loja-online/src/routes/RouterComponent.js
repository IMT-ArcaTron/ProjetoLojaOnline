import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../index.css";
import "../App.css";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Products from "../pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

export default function RouterComponent() {
  return <RouterProvider router={router} />;
}
