import React, { Component } from "react";
import { withAPI } from "../API";
import AdminPanelStyle from "./AdminPanel";
import { AdminComponent } from "./style";
import { Grid, Segment, Input, Button, Form } from "semantic-ui-react";

class Admin extends Component {
  state = {
    login: "",
    password: "",
    user:
      localStorage.getItem("sesstionUser") &&
      localStorage.getItem("sesstionUser")
  };

  handleLogin = () => {
    this.props.api
      .getAuth(this.state.login, this.state.password)
      .then(res => {
        this.setState({
          user: res.data.token
        });
        localStorage.setItem("sesstionUser", res.data.token);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleLogout = () => {
    localStorage.removeItem("sesstionUser");
    this.setState({
      user: null
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  resetForm = () => {
    this.setState({
      login: "",
      password: ""
    });
  };

  render() {
    const { user } = this.state;
    if (user) {
      return <AdminPanelStyle handleLogout={this.handleLogout} />;
    }

    return (
      <AdminComponent>
        <Grid container>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <Form className="form" onSubmit={this.handleLogin}>
                <Segment inverted>
                  <Form.Field>
                    <label htmlFor="login">Login</label>
                    <Input
                      value={this.state.login}
                      onChange={this.handleChange}
                      name="login"
                      type="text"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="password">Password</label>
                    <Input
                      value={this.state.password}
                      onChange={this.handleChange}
                      name="password"
                      type="password"
                    />
                  </Form.Field>
                  <Button type="submit">Войти</Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </AdminComponent>
    );
  }
}

export default withAPI(Admin);
