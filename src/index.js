import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import APIContext, { API } from "./components/API";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <APIContext.Provider value={new API()}>
      <App />
    </APIContext.Provider>
  </HashRouter>,
  document.getElementById("root")
);
