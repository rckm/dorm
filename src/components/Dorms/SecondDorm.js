import React, { Component } from "react";
// import DormImage from "../../static/2.png";
import { DormStyle } from "./style";

class SecondDorm extends Component {
  state = {
    display: false
  };
  handleTooltip = () => {
    this.setState(prevState => ({
      display: !prevState.display
    }));
  };
  render() {
    return (
      <DormStyle>
        <h1>Second Dorm</h1>
      </DormStyle>
    );
  }
}

export default SecondDorm;
