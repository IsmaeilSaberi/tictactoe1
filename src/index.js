import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>
);

reportWebVitals();
