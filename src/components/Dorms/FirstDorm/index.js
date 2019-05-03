import React from "react";
import { Grid, Segment, Form, Button } from "semantic-ui-react";
import { useField, useGetRooms } from "./FirstDorm.hooks";
import { FirstDormStyle } from "./style";
import { withAPI } from "../../API";
import Floors from "../Floors";

const FirstDorm = props => {
  const floors = props.dormDb.floors
    ? props.dormDb.floors.filter(dormId => {
        return dormId.dorm_id === props.currentDorm;
      })
    : [{}];

  const [currentFloor, setCurrentFloor] = useField(floors[0]);
  const [rooms, isLoading] = useGetRooms(currentFloor.id, props.api.getRooms);

  const handleChange = e => {
    const { value } = e.target;
    setCurrentFloor(floors[value]);
  };

  return (
    <FirstDormStyle>
      <div className="select-wrapper">
        <Form>
          <Form.Group>
            <Form.Field>
              <select onChange={handleChange} name="selectedFloor">
                <option disabled value="0">
                  Выберите этаж
                </option>
                {floors.map((floor, index) => {
                  return (
                    <React.Fragment key={index}>
                      <option value={index}>{floor.number} этаж</option>
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
                {!isLoading && (
                  <Floors
                    rooms={rooms}
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
                )}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </FirstDormStyle>
  );
};

export default withAPI(FirstDorm);
