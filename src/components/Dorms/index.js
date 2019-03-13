import React, { Component } from "react";
import { withAPI } from "../API";
import { RoomWrapper } from "./style";
import { Grid, Card } from "semantic-ui-react";

class Dorms extends Component {
  render() {
    return (
      <RoomWrapper>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <h1 className="title">Общежития</h1>
              <p className="desc">Выберите корпус</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={14}>
              <Card.Group itemsPerRow={4} centered>
                <Card
                  raised
                  color="yellow"
                  image="https://react.semantic-ui.com/images/wireframe/image.png"
                  onClick={() => this.props.setCurrentDorm(1)}
                  meta="г. Караганда, ул. Академическая 5"
                />
                <Card
                  raised
                  color="yellow"
                  image="https://react.semantic-ui.com/images/wireframe/image.png"
                  href="#"
                  meta="г. Караганда, ул. Академическая 5"
                />
                <Card
                  raised
                  color="yellow"
                  image="https://react.semantic-ui.com/images/wireframe/image.png"
                  href="#"
                  meta="г. Караганда, ул. Академическая 5"
                />
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </RoomWrapper>
    );
  }
}

export default withAPI(Dorms);
