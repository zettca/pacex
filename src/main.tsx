import React from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "./routes";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Routes
      basename={import.meta.env.DEV ? import.meta.env.BASE_URL : "/pacex/"}
    />
  </React.StrictMode>,
);
