import React, { Component } from 'react';
import FirstDormScheme from '../../static/dormSchemes/1.webp';
import SecondDormScheme from '../../static/dormSchemes/2.webp';
import ThirdDormScheme from '../../static/dormSchemes/3.webp';
import { DormStyle } from '../Dorms/style';
import { SvgRect } from '../Dorms/style';
import { coordinatesDB } from '../../utils/util';

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

  const coordinatesByDormID = coordinatesDB[props.currentDormId];

  return (
    <DormStyle>
      {/* <nav className="info">
        <ul>
          <li>Общежитие №: {props.currentDormId} </li>
          <li>Комната №: {props.selectedRoom.number}</li>
          <li>Максимальное кол-во жителей: {props.selectedRoom.max}</li>
          <li>Сейчас проживает: {props.selectedRoom.amount} чел.</li>
          <li>Этаж: {props.selectedFloor || props.floors}</li>
        </ul>
      </nav> */}
      <img src={setCurrentScheme()} alt="Dorm" />
      <div className="svgwrapper">
        <svg className="svg">
          {props.rooms.map((room, index) => {
            return (
              <SvgRect
                key={room.id}
                onClick={() => props.handleSelectedRoom(room)}
                x={`${coordinatesByDormID.recCoordinates[index].x}`}
                y={`${coordinatesByDormID.recCoordinates[index].y}`}
                width={`${coordinatesByDormID.recCoordinates[index].width}`}
                height={`${coordinatesByDormID.recCoordinates[index].height}`}
                gender={props.genderColor(room.gender_id, room.amount)}
              />
            );
          })}
          {props.rooms.map((room, index) => (
            <text
              key={room.id}
              onClick={() => props.handleSelectedRoom(room)}
              className="text"
              height={`${coordinatesByDormID.recCoordinates[index].height}`}
              x={`${coordinatesByDormID.coordinates[index].x}`}
              y={`${coordinatesByDormID.coordinates[index].y}`}
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
      return '#E8F5E9';
    }
    switch (gender_id) {
      case 1:
        return '#E3F2FD';
      case 2:
        return '#FCE4EC';
      default:
        return '#E8F5E9';
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
