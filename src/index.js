import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Apps from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Apps />
  </StrictMode>
);
