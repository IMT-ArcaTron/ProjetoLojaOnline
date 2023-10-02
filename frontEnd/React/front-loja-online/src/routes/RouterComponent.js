import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../index.css";
import "../App.css";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Products from "../pages/Products/Products";
import CarShop from "../pages/CarShop/CarShop";
import AboutUs from "../pages/AboutUs/AboutUs";
import Success from "../pages/Success/Success";

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
  {
    path: "/carshop",
    element: <CarShop />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);

export default function RouterComponent() {
  return <RouterProvider router={router} />;
}
