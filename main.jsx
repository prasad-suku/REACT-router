import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { StrictMode } from "react";
import App from "./App";
import Clonequiz from "./Clonequiz";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App></App> */}
    <Clonequiz></Clonequiz>
  </StrictMode>
);
