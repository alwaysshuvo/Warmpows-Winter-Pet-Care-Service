import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import MainLayout from "../MainLayout/MainLayout";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";

const Home = lazy(() => import("../Pages/Home/Home"));
const Services = lazy(() => import("../Pages/Services/Services"));
const ServiceDetails = lazy(() => import("../Pages/ServiceDetails/ServiceDetails"));
const Profile = lazy(() => import("../Pages/Profile/Profile"));
const Login = lazy(() => import("../Pages/Login/Login"));
const Signup = lazy(() => import("../Pages/Signup/Signup"));


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
        loader: async () => {
          const res = await fetch("/services.json");
          return res.json();
        },
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
        ),
        loader: async () => {
          const res = await fetch("/services.json");
          return res.json();
        },
      },
      {
        path: "/services/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ServiceDetails />
          </Suspense>
        ),
        loader: async () => {
          const res = await fetch("/services.json");
          return res.json();
        },
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
      {
        path: "/forgot-password",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ForgotPassword />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
