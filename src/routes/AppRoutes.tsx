import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Index from "../pages/Index";

const AppRoutes: React.FC = () => {
  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Index /> },
        // { path: "/dashboard", element: <Dashboard /> },
        // Add other main app routes here
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
