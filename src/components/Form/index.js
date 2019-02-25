import React, { Component } from "react";
import { Button, Grid, Form, Segment } from "semantic-ui-react";
import { withAPI } from "../API";
import { FormStyle } from "./style";

class FormComponent extends Component {
  state = {
    firstName: "",
    secondName: "",
    patronymic: "",
    group: ""
  };

  handleSubmit = e => {
    const { firstName, secondName, patronymic, group } = this.state;
    alert(
      `The user is ${secondName} ${firstName} ${patronymic} from ${group} group`
    );
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { firstName, secondName, group } = this.state;
    const validate =
      firstName.length > 0 && secondName.length > 0 && group.length > 0;
    const formReset = { type: "reset" };
    return (
      <FormStyle>
        <Grid container>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <h1 className="title">Form</h1>
              <Segment inverted>
                <Form inverted size="big" onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>Фамилия</label>
                    <input
                      required
                      value={this.state.secondName}
                      type="text"
                      name="secondName"
                      onChange={this.handleChange}
                      placeholder="Введите фамилию"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Имя</label>
                    <input
                      required
                      value={this.state.firstName}
                      type="text"
                      name="firstName"
                      onChange={this.handleChange}
                      placeholder="Введите имя"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Отчество</label>
                    <input
                      required
                      value={this.state.patronymic}
                      type="text"
                      name="patronymic"
                      onChange={this.handleChange}
                      placeholder="Введите отчество"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Группа</label>
                    <input
                      required
                      value={this.state.group}
                      type="text"
                      name="group"
                      onChange={this.handleChange}
                      placeholder="Введите группу"
                    />
                  </Form.Field>
                  <Button type="submit" disabled={!validate} {...formReset}>
                    Отправить заявление
                  </Button>
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
