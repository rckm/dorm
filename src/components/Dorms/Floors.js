import React, { Component } from "react";
import { DormStyle, SvgRect } from "../Dorms/style";
import { coordinatesDB } from "../../utils/util";
import FirstDormScheme from "../../static/dormSchemes/1.webp";
import SecondDormScheme from "../../static/dormSchemes/2.webp";
import ThirdDormScheme from "../../static/dormSchemes/3.webp";

const FloorComponent = props => {
  const setCurrentScheme = () => {
    if (props.currentDormId === 1) {
      return FirstDormScheme;
    } else if (props.currentDormId === 2) {
      return SecondDormScheme;
    } else {
      return ThirdDormScheme;
    }
  };

  const coordinatesByDormID = coordinatesDB[
    props.currentDormId
  ].coordinates.find(data => {
    return Array.isArray(data.floor)
      ? data.floor.includes(Number(props.selectedFloor.number))
      : data.floor === Number(props.selectedFloor.number);
  });
  const recCoordinatesByDormID = coordinatesDB[
    props.currentDormId
  ].recCoordinates.find(data => {
    return Array.isArray(data.floor)
      ? data.floor.includes(Number(props.selectedFloor.number))
      : data.floor === Number(props.selectedFloor.number);
  });
  return (
    <DormStyle>
      <div className="tooltip">
        <div className="first-block">
          <span>Общежитие № {props.currentDormId}</span>
          <span>
            Проживает {props.selectedRoom.amount}/{props.selectedRoom.max}
          </span>
          <span>Этаж № {props.selectedFloor.number}</span>
        </div>
        <div className="center-block">
          <span>Выбрана комната {props.selectedRoom.number}</span>
        </div>
        <div className="last-block">
          <div className="free">СВОБОДНАЯ</div>
          <div className="male">МУЖСКАЯ</div>
          <div className="female">ЖЕНСКАЯ</div>
        </div>
      </div>
      <img alt="Dorm Schemes" src={setCurrentScheme()} />
      <div className="svgwrapper">
        <svg className="svg">
          {props.rooms.map((room, index) => {
            return (
              <SvgRect
                key={room.id}
                onClick={() => props.handleSelectedRoom(room)}
                x={`${recCoordinatesByDormID.data[index] &&
                  recCoordinatesByDormID.data[index].x}`}
                y={`${recCoordinatesByDormID.data[index] &&
                  recCoordinatesByDormID.data[index].y}`}
                width={`${recCoordinatesByDormID.data[index] &&
                  recCoordinatesByDormID.data[index].width}`}
                height={`${recCoordinatesByDormID.data[index] &&
                  recCoordinatesByDormID.data[index].height}`}
                gender={props.genderColor(room.gender_id, room.amount)}
              />
            );
          })}
          {props.rooms.map((room, index) => (
            <text
              key={room.id}
              onClick={() => props.handleSelectedRoom(room)}
              className="text"
              height={`${recCoordinatesByDormID.data[index] &&
                recCoordinatesByDormID.data[index].height}`}
              x={`${coordinatesByDormID.data[index] &&
                coordinatesByDormID.data[index].x}`}
              y={`${coordinatesByDormID.data[index] &&
                coordinatesByDormID.data[index].y}`}
            >
              {room.number}
            </text>
          ))}
        </svg>
      </div>
    </DormStyle>
  );
};

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
    return (
      <FloorComponent
        currentDormId={this.props.currentDormId}
        selectedRoom={selectedRoom}
        selectedFloor={this.props.selectedFloor}
        rooms={rooms}
        handleSelectedRoom={this.handleSelectedRoom}
        genderColor={this.genderColor}
      />
    );
  }
}

export default Floor;
