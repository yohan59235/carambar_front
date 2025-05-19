import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "../UserContext";

import App from "./App";
import Home from "../src/Pages/Home/Home";
import JokesList from "../src/components/JokesList/JokesList";
import AddJokesForm from "./components/AddJokesForm/AddJokesForm";
import JokesCategory from "./components/JokesCategory/JokesCategory";
import JokesByCategory from "./components/JokesByCategory/JokesByCategory";
import JokesById from "./components/JokesById/JokesById";

const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/Blague", element: <JokesList /> },
        { path: "/Ajouter_une_blague", element: <AddJokesForm /> },
        { path: "/Catégorie", element: <JokesCategory /> },
        { path: "/categorie/:nom", element: <JokesByCategory /> },
        { path: "/Blague/id", element: <JokesById /> },
      ],
    },
  ],
  {
    basename: "/carambar_front",
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
