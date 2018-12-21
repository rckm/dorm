import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Button, Form as FormField } from "semantic-ui-react";
import { withAPI } from "../API";

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
            <FormField onSubmit={this.handleSubmit} size="big">
              <FormField.Field>
                <label>E-mail</label>
                <input
                  name="email"
                  onChange={this.handleChange}
                  placeholder="Введите почту"
                />
              </FormField.Field>
              <Button type="submit">Submit</Button>
            </FormField>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withAPI(BookingForm);
