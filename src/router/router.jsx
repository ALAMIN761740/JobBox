import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../layout/MainLayout';
import home from '../pages/Home/home';
import Register from '../pages/Register';
import length from '../pages/Login';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component:home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: length,
      }
    ],
  },
]);

export default router;