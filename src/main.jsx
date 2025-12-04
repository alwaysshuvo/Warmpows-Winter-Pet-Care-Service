import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css" ;
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import ThemeProvider from "./Provider/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center" reverseOrder={false} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
