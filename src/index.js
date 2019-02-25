import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import APIContext, { API } from "./components/API";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <APIContext.Provider value={new API()}>
      <App />
    </APIContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
