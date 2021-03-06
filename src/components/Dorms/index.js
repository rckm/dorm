import React, { Component } from "react";
import { withAPI } from "../API";
import { RoomWrapper } from "./style";
import { Grid, Card, Image } from "semantic-ui-react";
import FirstDorm from "../../static/firstDorm.webp";
import SecondDorm from "../../static/secondDorm.webp";
import ThirdDorm from "../../static/thirdDorm.webp";

class Dorms extends Component {
  state = {};

  render() {
    return (
      <RoomWrapper>
        <Grid>
          <Grid.Row centered>
            <Grid.Column computer={14} mobile={14}>
              <h1 className="title">Общежития</h1>
              <p className="desc">Выберите корпус</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={14}>
              <Card.Group
                className="card-group"
                doubling
                stackable
                itemsPerRow={3}
                centered
              >
                <Card
                  raised
                  color="yellow"
                  onClick={() => this.props.setCurrentDorm(1)}
                >
                  <Image alt="First Dorm" src={FirstDorm} />
                  <Card.Content>
                    <Card.Meta>г. Караганда, ул. Академическая 5/1</Card.Meta>
                  </Card.Content>
                </Card>
                <Card
                  raised
                  color="yellow"
                  onClick={() => this.props.setCurrentDorm(2)}
                >
                  <Image alt="Second Dorm" src={SecondDorm} />
                  <Card.Content>
                    <Card.Meta>г. Караганда, ул. Академическая 5</Card.Meta>
                  </Card.Content>
                </Card>
                <Card
                  raised
                  color="yellow"
                  onClick={() => this.props.setCurrentDorm(3)}
                >
                  <Image alt="Third Dorm" src={ThirdDorm} />
                  <Card.Content>
                    <Card.Meta>г. Караганда, ул. Комиссарова 32</Card.Meta>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </RoomWrapper>
    );
  }
}

export default withAPI(Dorms);
