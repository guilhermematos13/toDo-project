import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
