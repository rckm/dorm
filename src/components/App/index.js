import React from "react";
import FormComponent from "../Form";
import Admin from "../Admin";
import { AppWrapper } from "./style";
import { Switch, Route } from "react-router-dom";
// import Preloader from "./Preloader";

const App = () => {
  return (
    <Switch>
      <AppWrapper>
        <Route exact path="/" component={FormComponent} />
        <Route exact path="/admin" component={Admin} />
      </AppWrapper>
    </Switch>
  );
};

export default App;
