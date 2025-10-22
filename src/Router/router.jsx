import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import Profile from '../Pages/Profile/Profile';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import MainLayout from '../MainLayout/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
  {
    index: true,
    element: <Home />,
    loader : ()=> fetch('/services.json')

  },
  {
  path: "/services",
  element: <Services />,
  loader: () => fetch('/services.json'),
},
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
    ]
    
  },

]);

export default router;
