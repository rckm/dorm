import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import APIContext, { API } from "./components/API";
ReactDOM.render(
  <APIContext.Provider value={new API()}>
    <App />
  </APIContext.Provider>,
  document.getElementById("root")
);
