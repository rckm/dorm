import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Button, Form as FormField } from "semantic-ui-react";
import { withAPI } from "../API";

class Form extends Component {
  state = {
    UIN: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.api.getUserByUIN(this.state.UIN).then(res => {
      this.props.setUser(res.data);
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <FormField size="big" onSubmit={this.handleSubmit}>
              <FormField.Field>
                <label>ИИН</label>
                <input
                  name="UIN"
                  onChange={this.handleChange}
                  placeholder="Введите ИИН"
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

export default withAPI(Form);
