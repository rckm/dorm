import React, { Component } from "react";
import DormImage from "../../static/1.png";
import { DormStyle } from "./style";

class FirstDorm extends Component {
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
        <img src={DormImage} alt="Dorm" />
        <div className={this.state.display ? "show" : "hide"}>
          <ul>
            <li>Info: dasdasd</li>
            <li>Room: 214</li>
            <li>Floor: 2</li>
            <li>
              <button onClick={() => this.props.setCurrentDorm(null)}>
                Назад
              </button>
            </li>
          </ul>
        </div>
        <svg className="svg">
          <rect
            className="rectangle"
            x="757.94"
            y="445.66"
            width="78.877"
            height="194.74"
            strokeWidth="6.7958"
            onClick={this.handleTooltip}
          />
          <rect
            className="rectangle"
            x="77.96"
            y="445.77"
            width="97.901"
            height="194.58"
            strokeWidth="7.5678"
          />
          <rect
            className="rectangle"
            x="182.45"
            y="445.67"
            width="97.11"
            height="194.67"
            strokeWidth="7.5391"
          />
          <rect
            className="rectangle"
            x="286.09"
            y="445.67"
            width="93.284"
            height="194.47"
            strokeWidth="7.3852"
          />
          <rect
            className="rectangle"
            x="385.61"
            y="445.67"
            width="87.893"
            height="194.67"
            strokeWidth="7.1724"
          />
          <rect
            className="rectangle"
            x="663.61"
            y="445.67"
            width="88.07"
            height="194.74"
            strokeWidth="7.1808"
          />
          <rect
            className="rectangle"
            x="480.19"
            y="445.67"
            width="84.358"
            height="194.67"
            strokeWidth="7.0267"
          />
          <rect
            className="rectangle"
            x="843.35"
            y="445.68"
            width="74.206"
            height="194.66"
            strokeWidth="6.5901"
          />
          <rect
            className="rectangle"
            x="570.94"
            y="445.67"
            width="86.548"
            height="194.67"
            strokeWidth="7.1173"
          />
          <rect
            className="rectangle"
            x="923.60"
            y="445.67"
            width="79.424"
            height="194.62"
            strokeWidth="6.8172"
          />
        </svg>
      </DormStyle>
    );
  }
}

export default FirstDorm;
