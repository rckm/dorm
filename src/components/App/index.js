import React from "react";
import FormComponent from "../Form";
import Admin from "../Admin";
import { AppWrapper } from "./style";
import { Switch, Route } from "react-router-dom";
import Preloader from "./Preloader";

const App = () => {
  return (
    <Switch>
      {setTimeout(() => {
        return <Preloader />;
      }, 5000)}
      <AppWrapper>
        <Route exact path="/" component={FormComponent} />
        <Route path="/admin" component={Admin} />
      </AppWrapper>
    </Switch>
  );
};

export default App;
