import React, { Component } from "react";
import FirstFloor from "./FirstFloor";
import SecondFloor from "./SecondFloor";
import ThirdFloor from "./ThirdFloor";

class FirstDorm extends Component {
  state = {
    selectedFloor: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const floors = this.props.dormDb.floors.filter(dormId => {
      return dormId.dorm_id === this.props.currentDorm;
    });
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          height: "300px",
          margin: "0 auto"
        }}
      >
        <select onChange={this.handleChange} name="selectedFloor">
          <option selected disabled value="0">
            Выберите этаж
          </option>
          {floors.map((floor, key) => {
            return (
              <React.Fragment key={key}>
                <option value={floor.number}>{floor.number} этаж</option>
              </React.Fragment>
            );
          })}
        </select>
        <div>
          {this.state.selectedFloor === "1" && (
            <FirstFloor
              selectedFloor={this.state.selectedFloor}
              setCurrentDorm={this.props.setCurrentDorm}
            />
          )}
          {this.state.selectedFloor === "2" && (
            <SecondFloor
              selectedFloor={this.state.selectedFloor}
              setCurrentDorm={this.props.setCurrentDorm}
            />
          )}
          {this.state.selectedFloor === "3" && (
            <ThirdFloor
              selectedFloor={this.state.selectedFloor}
              setCurrentDorm={this.props.setCurrentDorm}
            />
          )}
        </div>
      </div>
    );
  }
}

export default FirstDorm;
