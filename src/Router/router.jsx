import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import MainLayout from "../MainLayout/MainLayout";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";

// Lazy Loaded Pages
const Home = lazy(() => import("../Pages/Home/Home"));
const Services = lazy(() => import("../Pages/Services/Services"));
const ServiceDetails = lazy(() => import("../Pages/ServiceDetails/ServiceDetails"));
const Profile = lazy(() => import("../Pages/Profile/Profile"));
const Login = lazy(() => import("../Pages/Login/Login"));
const Signup = lazy(() => import("../Pages/Signup/Signup"));
const About = lazy(() => import("../Pages/About/About"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const Support = lazy(() => import("../Pages/Support/Support"));

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
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          </Suspense>
        ),
      },

      {
        path: "/login",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <PublicRoute>
              <Login />
            </PublicRoute>
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <PublicRoute>
              <Signup />
            </PublicRoute>
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

      {
        path: "/about",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/support",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Support />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
