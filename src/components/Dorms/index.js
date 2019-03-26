import React, { Component } from "react";
import { withAPI } from "../API";
import { RoomWrapper } from "./style";
import { Grid, Card } from "semantic-ui-react";
import FirstDorm from "../../static/firstDorm.JPG";
import SecondDorm from "../../static/secondDorm.JPG";

class Dorms extends Component {
  state = {};

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
                {/* {this.props.dormDb.dorms &&
                  this.props.dormDb.dorms.map((dorms, key) => {
                    return (
                      <React.Fragment key={key}>
                        <Card
                          raised
                          color="yellow"
                          image={FirstDorm}
                          onClick={() => this.props.setCurrentDorm(dorms.id)}
                          meta="г. Караганда, ул. Академическая 5"
                        />
                      </React.Fragment>
                    );
                  })} */}
                <Card
                  raised
                  color="yellow"
                  image={FirstDorm}
                  onClick={() => this.props.setCurrentDorm(1)}
                  meta="г. Караганда, ул. Академическая 5"
                />
                <Card
                  raised
                  color="yellow"
                  image={SecondDorm}
                  onClick={() => this.props.setCurrentDorm(2)}
                  meta="г. Караганда, ул. Академическая 5/1"
                />
                <Card
                  raised
                  color="yellow"
                  image="https://react.semantic-ui.com/images/wireframe/image.png"
                  onClick={() => this.props.setCurrentDorm(3)}
                  meta="г. Караганда, ул. Комиссарова 32"
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
