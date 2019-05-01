import React from "react";
import { Grid, Segment, Form, Button } from "semantic-ui-react";
import { useField, useGetRooms } from "./FirstForm.hooks";
import { FirstDormStyle } from "./style";
import { withAPI } from "../../API";
import Floors from "../Floors";

const FirstDorm = props => {
  const floors = props.dormDb.floors
    ? props.dormDb.floors.filter(dormId => {
        return dormId.dorm_id === props.currentDorm;
      })
    : [{}];

  const [currentFloor, setCurrentFloor] = useField("");
  const [rooms, isLoading] = useGetRooms(
    currentFloor || floors[0].id,
    props.api.getRooms
  );

  const handleChange = e => {
    const { value } = e.target;
    setCurrentFloor(value);
  };

  return (
    <FirstDormStyle>
      <div className="select-wrapper">
        <Form>
          <Form.Group>
            <Form.Field>
              <select
                value={currentFloor}
                onChange={handleChange}
                name="selectedFloor"
              >
                <option disabled value="0">
                  Выберите этаж
                </option>
                {floors.map((floor, key) => {
                  return (
                    <React.Fragment key={key}>
                      <option value={floor.id}>{floor.number} этаж</option>
                    </React.Fragment>
                  );
                })}
              </select>
            </Form.Field>
            <Form.Field>
              <Button onClick={() => props.setCurrentDorm(null)}>Назад</Button>
            </Form.Field>
          </Form.Group>
        </Form>
      </div>
      <div>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={16}>
              <Segment className="firstDorm" loading={isLoading}>
                <Floors
                  rooms={rooms}
                  floors={floors[0].number}
                  selectedFloor={currentFloor}
                  currentDormId={props.currentDorm}
                  setCurrentDorm={props.setCurrentDorm}
                  setSelectedRoom={(selectedRoom, selectedDorm) =>
                    props.setSelectedRoom(state => ({
                      ...state,
                      room_id: selectedRoom,
                      dorm_id: selectedDorm
                    }))
                  }
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </FirstDormStyle>
  );
};

export default withAPI(FirstDorm);
