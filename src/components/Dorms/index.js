import React, { Component } from "react";
import { withAPI } from "../API";
import { RoomWrapper } from "./style";
import { Grid, Card, Image } from "semantic-ui-react";

class Dorms extends Component {
  state = {};

  // componentDidMount = () => {
  //   this.props.api
  //     .getRoom(1)
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  render() {
    return (
      <RoomWrapper>
        <Grid container>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <h1 className="title">Dorms</h1>
              <p className="desc">Choose dorm</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3} centered>
            <Grid.Column>
              <Card>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </RoomWrapper>
    );
  }
}

export default withAPI(Dorms);
