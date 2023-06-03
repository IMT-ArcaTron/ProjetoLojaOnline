import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../index.css";
import "../App.css";
import Login from "../components/Login";
import Register from "../components/Register";
import Products from "../components/Products";

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
