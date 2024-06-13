import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <App c="green" t="22px" />
    <App c="red" t="20px" />
  </div>
);
