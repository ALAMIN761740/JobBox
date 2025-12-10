import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../layout/MainLayout';
import home from '../pages/Home/home';
import Register from '../pages/Register';


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
      }
    ],
  },
]);

export default router;