import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-vertical-timeline-component/style.min.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
