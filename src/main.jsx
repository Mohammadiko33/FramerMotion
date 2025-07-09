import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./cssena/cssena.css";
import "./components/index.css";
import App from "./components/E18/App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
