import React, { Component } from "react";
import DormImage from "../../static/1.png";
import { DormStyle } from "./style";

class FirstDorm extends Component {
  state = {
    room: ""
  };
  handleTooltip = room => {
    this.setState({
      room: room
    });
  };
  render() {
    return (
      <DormStyle>
        <img src={DormImage} alt="Dorm" />
        <div className="show">
          <ul>
            <li>Инфо: Первая Общага</li>
            <li>Комната №: {this.state.room}</li>
            <li>Этаж: 1</li>
            <li>{this.props.currentdorm}</li>
            <li>
              <button onClick={() => this.props.setCurrentDorm(0)}>
                Назад
              </button>{" "}
            </li>
          </ul>
        </div>
        <svg className="svg">
          <rect
            className="rectangle"
            x="77.96"
            y="445.77"
            width="97.901"
            height="194.58"
            strokeWidth="7.5678"
            onClick={() => this.handleTooltip(101)}
          />
          <rect
            className="rectangle"
            x="182.45"
            y="445.67"
            width="97.11"
            height="194.67"
            strokeWidth="7.5391"
            onClick={() => this.handleTooltip(102)}
          />
          <rect
            className="rectangle"
            x="286.09"
            y="445.67"
            width="93.284"
            height="194.47"
            strokeWidth="7.3852"
            onClick={() => this.handleTooltip(103)}
          />
          <rect
            className="rectangle"
            x="385.61"
            y="445.67"
            width="87.893"
            height="194.67"
            strokeWidth="7.1724"
            onClick={() => this.handleTooltip(104)}
          />
          <rect
            className="rectangle"
            x="480.19"
            y="445.67"
            width="84.358"
            height="194.67"
            strokeWidth="7.0267"
            onClick={() => this.handleTooltip(105)}
          />
          <rect
            className="rectangle"
            x="570.94"
            y="445.67"
            width="86.548"
            height="194.67"
            strokeWidth="7.1173"
            onClick={() => this.handleTooltip(106)}
          />
          <rect
            className="rectangle"
            x="663.61"
            y="445.67"
            width="88.07"
            height="194.74"
            strokeWidth="7.1808"
            onClick={() => this.handleTooltip(107)}
          />
          <rect
            className="rectangle"
            x="757.94"
            y="445.66"
            width="78.877"
            height="194.74"
            strokeWidth="6.7958"
            onClick={() => this.handleTooltip(108)}
          />
          <rect
            className="rectangle"
            x="843.35"
            y="445.68"
            width="74.206"
            height="194.66"
            strokeWidth="6.5901"
            onClick={() => this.handleTooltip(109)}
          />
          <rect
            className="rectangle"
            x="923.60"
            y="445.67"
            width="79.424"
            height="194.62"
            strokeWidth="6.8172"
            onClick={() => this.handleTooltip(110)}
          />
        </svg>
      </DormStyle>
    );
  }
}

export default FirstDorm;
