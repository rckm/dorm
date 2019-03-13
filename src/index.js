import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import APIContext, { API } from "./components/API";
// import createHistory from "history/createBrowserHistory";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

// const history = createHistory({
//   basename: process.env.PUBLIC_URL
// });

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <APIContext.Provider value={new API()}>
      <App />
    </APIContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
