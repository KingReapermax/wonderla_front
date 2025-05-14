// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind CSS import
import RidesSection from "./RidesSection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RidesSection />
  </React.StrictMode>
);
