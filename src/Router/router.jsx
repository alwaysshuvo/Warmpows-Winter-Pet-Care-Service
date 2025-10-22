import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner"; 

import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import MainLayout from "../MainLayout/MainLayout";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/services/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ServiceDetails />
          </Suspense>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Signup />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
