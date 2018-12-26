import React, { Component } from "react";
import { Button, Grid, Form, Segment } from "semantic-ui-react";
import { withAPI } from "../API";
import { FormStyle } from "./style";

class FormComponent extends Component {
  state = {
    UIN: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.api
      .getUserByUIN(this.state.UIN)
      .then(res => {
        this.props.setUser(res.data);
      })
      .catch(e => {
        console.error(e.message);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <FormStyle>
        <Grid container>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <h1 className="title">oqu dorm</h1>
              <Segment inverted>
                <Form inverted size="big" onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>ИИН</label>
                    <input
                      name="UIN"
                      onChange={this.handleChange}
                      placeholder="Введите ИИН"
                    />
                  </Form.Field>
                  <Button type="submit">Submit</Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </FormStyle>
    );
  }
}

export default withAPI(FormComponent);
