import React, { Component } from "react";
import FormComponent from "../Form";
import Dorms from "../Dorms";
import { AppWrapper } from "./style";

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <FormComponent />
        <Dorms />
      </AppWrapper>
    );
  }
}

export default App;
