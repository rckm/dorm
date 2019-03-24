import React, { Component } from "react";
// import DormImage from "../../static/3.png";
import { DormStyle } from "./style";

class ThirdDorm extends Component {
  state = {
    display: false
  };
  handleTooltip = () => {
    this.setState(prevState => ({
      display: !prevState.display
    }));
  };
  render() {
    return <DormStyle />;
  }
}

export default ThirdDorm;
