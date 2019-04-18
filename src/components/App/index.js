import React from "react";
import FormComponent from "../Form";
import Admin from "../Admin";
import Overlay from "../Overlay";
import { AppWrapper } from "./style";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <AppWrapper>
        <div className="app">
          <Route exact path="/" component={Overlay} />
          <Route exact path="/form" component={FormComponent} />
          <Route exact path="/admin" component={Admin} />
        </div>
      </AppWrapper>
    </Switch>
  );
};

export default App;
