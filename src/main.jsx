import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider, { AuthContext } from "./Context/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
