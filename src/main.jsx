import React from "react";
import ReactDOM from "react-dom/client";
import Pokedex from "./Pokedex";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Pokedex />
  </React.StrictMode>
);
