import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./Style/index.css";
import "./Style/navBar.css";
import "./Style/bod.css";
import "./Style/input.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
