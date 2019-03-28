import React, { useEffect, useState } from "react";
import { Grid, Segment, Form, Button } from "semantic-ui-react";
import { FirstDormStyle } from "./style";
import { withAPI } from "../../API";
import Floors from "../Floors";

/**
 *
 * @param {string} selectedFloor Comes from select
 * @param {*} getRooms This is just API
 *
 */
const getRooms = (selectedFloor, getRooms) => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setLoading] = useState(false);
  /**
   * useEffect тригеррится только тогда когда меняется 2-ой аргумент [selectedFloor]
   */
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getRooms(selectedFloor);
      setRooms(response.data);
      setLoading(false);
    })();
  }, [selectedFloor]); // Триггеры на которые будут дергаться API

  return [rooms, isLoading];
};

const useField = defaultValue => {
  const [value, handleChange] = useState(defaultValue);
  return [value, handleChange];
};

const FirstDorm = props => {
  const [currentDorm, setCurrentDorm] = useField("1");

  const [rooms, isLoading] = getRooms(currentDorm, props.api.getRooms);

  const handleChange = e => {
    const { value } = e.target;
    setCurrentDorm(value);
  };

  const floors = props.dormDb.floors.filter(dormId => {
    return dormId.dorm_id === props.currentDorm;
  });

  return (
    <FirstDormStyle>
      <div className="select-wrapper">
        <Form>
          <Form.Group>
            <Form.Field>
              <select
                value={currentDorm}
                onChange={handleChange}
                name="selectedFloor"
              >
                <option disabled value="0">
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
                  selectedFloor={currentDorm}
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
