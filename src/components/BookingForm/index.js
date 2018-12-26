import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Button, Form as MainForm } from "semantic-ui-react";
import { withAPI } from "../API";
import RoomScheme from "./roomScheme";

class BookingForm extends Component {
  state = {
    email: "",
    dorm: {}
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.props.api.getDormInfo().then(res => {
      this.setState({
        dorm: res.data
      });
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <MainForm onSubmit={this.handleSubmit} size="big">
              <MainForm.Field>
                <label>E-mail</label>
                <input
                  name="email"
                  onChange={this.handleChange}
                  placeholder="Введите почту"
                />
              </MainForm.Field>
              <MainForm.Field>
                <RoomScheme />
              </MainForm.Field>
              <Button type="submit">Submit</Button>
            </MainForm>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withAPI(BookingForm);
