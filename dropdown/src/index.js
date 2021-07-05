import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  applyPolyfills,
  defineCustomElements,
} from "stencil-custom-dropdown/loader";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
