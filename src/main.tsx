import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
