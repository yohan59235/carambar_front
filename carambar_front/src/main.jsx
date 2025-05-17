import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "../UserContext";

import App from "./App";
import Home from "../src/Pages/Home/Home";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
