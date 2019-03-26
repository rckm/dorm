import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import FirstFloor from "../../../static/firstDorm/1.png";
import { DormStyle } from "../style";

class FirstDorm extends Component {
  state = {};

  render() {
    return (
      <DormStyle>
        <img src={FirstFloor} alt="Dorm" />
        <div className="show">
          <ul>
            <li>Инфо: Первое общежитие</li>
            <li>Комната №:</li>
            <li>Этаж: {this.props.selectedFloor}</li>
            <li>
              <Button secondary onClick={() => this.props.setCurrentDorm(0)}>
                Назад
              </Button>
            </li>
          </ul>
        </div>
        <svg className="svg">
          <rect className="rectangle" x="86.989" y="444.01" width="96.972" height="191.57"/>
          <rect className="rectangle" x="188.99" y="444.01" width="96.972" height="191.57"/>
          <rect className="rectangle" x="290.99" y="444.01" width="92.218" height="191.57"/>
          <rect className="rectangle" x="388.99" y="444.01" width="87.465" height="191.57"/>
          <rect className="rectangle" x="480.99" y="444.01" width="83.187" height="191.57"/>
          <rect className="rectangle" x="570.99" y="444.01" width="85.563" height="191.57"/>
          <rect className="rectangle" x="660.99" y="444.01" width="87.244" height="191.57"/>
          <rect className="rectangle" x="754.99" y="444.01" width="77.262" height="191.57"/>
          <rect className="rectangle" x="837.46" y="444.01" width="73.228" height="191.57"/>
          <rect className="rectangle" x="916.78" y="444.01" width="77.598" height="191.57"/>
          <text className="text" x="120" y="556">201</text>
          <text className="text" x="221" y="556">202</text>
          <text className="text" x="320" y="556">203</text>
          <text className="text" x="416" y="556">204</text>
          <text className="text" x="505" y="556">205</text>
          <text className="text" x="596" y="556">206</text>
          <text className="text" x="692" y="556">207</text>
          <text className="text" x="779" y="556">208</text>
          <text className="text" x="859" y="556">209</text>
          <text className="text" x="937" y="556">210</text>
        </svg>
      </DormStyle>
    );
  }
}

export default FirstDorm;
