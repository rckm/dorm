import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import FirstFloor from "../../static/firstDorm/1.png";
import { DormStyle } from "../Dorms/style";

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
    selectedRoom: {}
  };

  handleSelectedRoom = room => {
    this.setState({
      selectedRoom: room
    });
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.selectedRoom !== this.state.selectedRoom) {
      this.props.setSelectedRoom(this.state.selectedRoom.number);
    }
  };

  render() {
    const { rooms } = this.props;
    const { selectedRoom } = this.state;
    return (
      <DormStyle>
        <img src={FirstFloor} alt="Dorm" />
        <div className="show">
          <ul>
            <li>Инфо: Первое общежитие </li>
            <li>Комната №: {selectedRoom.number}</li>
            <li>Максимальное кол-во жителей: {selectedRoom.max}</li>
            <li>Сейчас проживает: {selectedRoom.amount} чел.</li>
            <li>Этаж: {selectedRoom.floor_id}</li>
            <li>
              <Button secondary onClick={() => this.props.setCurrentDorm(null)}>
                Назад
              </Button>
            </li>
          </ul>
        </div>
        <svg className="svg">
          {rooms.map((room, index) => {
            console.log(room);
            return (
              <rect
                key={room.id}
                onClick={() => this.handleSelectedRoom(room)}
                className="rectangle"
                x={`${reqCoordinates[index].x}`}
                y="444.01"
                width={`${reqCoordinates[index].width}`}
                height="191.57"
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
