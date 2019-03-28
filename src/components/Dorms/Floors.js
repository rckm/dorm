import React, { Component } from "react";
import FirstFloor from "../../static/firstDorm/1.webp";
import { DormStyle } from "../Dorms/style";
import { SvgRect } from "../Dorms/style";

const coordinates = [120, 221, 320, 416, 505, 596, 692, 779, 859, 943];
const reqCoordinates = [
  { x: 86.989, width: 96.972 },
  { x: 188.99, width: 96.972 },
  { x: 290.99, width: 92.218 },
  { x: 388.99, width: 87.465 },
  { x: 480.99, width: 83.187 },
  { x: 570.99, width: 85.563 },
  { x: 660.99, width: 87.244 },
  { x: 754.99, width: 77.262 },
  { x: 837.46, width: 73.228 },
  { x: 916.78, width: 77.598 }
];

class Floor extends Component {
  state = {
    selectedRoom: {},
    gender_id: null
  };

  handleSelectedRoom = room => {
    this.setState({
      selectedRoom: room
    });
  };

  genderColor = (gender_id, amount) => {
    if (amount === 0) {
      return "#E8F5E9";
    }
    switch (gender_id) {
      case 1:
        return "#E3F2FD";
      case 2:
        return "#FCE4EC";
      default:
        return "#E8F5E9";
    }
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.selectedRoom !== this.state.selectedRoom) {
      this.props.setSelectedRoom(
        this.state.selectedRoom.id,
        this.props.currentDormId
      );
    }
  };

  sortReports = rooms => {
    for (let i = 0, endI = rooms.length - 1; i < endI; i++) {
      let wasSwap = false;

      for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (rooms[j].id > rooms[j + 1].id) {
          [rooms[j], rooms[j + 1]] = [rooms[j + 1], rooms[j]];
          wasSwap = true;
        }
      }

      if (!wasSwap) break;
    }

    return rooms;
  };

  render() {
    const { rooms } = this.props;
    this.sortReports(rooms);
    const { selectedRoom } = this.state;
    this.genderColor();
    console.log(this.state.gender_id);
    return (
      <DormStyle>
        <img src={FirstFloor} alt="Dorm" />
        <div className="show">
          <ul>
            <li>Общежитие №: {this.props.currentDormId} </li>
            <li>Комната №: {selectedRoom.number}</li>
            <li>Максимальное кол-во жителей: {selectedRoom.max}</li>
            <li>Сейчас проживает: {selectedRoom.amount} чел.</li>
            <li>Этаж: {this.props.selectedFloor}</li>
          </ul>
        </div>
        <svg className="svg">
          {rooms.map((room, index) => {
            console.log(room);
            return (
              <SvgRect
                key={room.id}
                onClick={() => this.handleSelectedRoom(room)}
                x={`${reqCoordinates[index].x}`}
                y="444.01"
                width={`${reqCoordinates[index].width}`}
                height="191.57"
                gender={this.genderColor(room.gender_id, room.amount)}
              />
            );
          })}
          {rooms.map((room, index) => (
            <text
              key={room.id}
              onClick={() => this.handleSelectedRoom(room)}
              className="text"
              height="191.57"
              x={`${coordinates[index]}`}
              y="556"
            >
              {room.number}
            </text>
          ))}
        </svg>
      </DormStyle>
    );
  }
}

export default Floor;
