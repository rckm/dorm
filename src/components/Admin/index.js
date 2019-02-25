import React, { Component } from "react";
import { withAPI } from "../API";
import { AdminComponent } from "./style";

const AdminPanel = props => {
  return (
    <div>
      <p>Admin panel</p>
      <button onClick={props.handleLogout}>Выйти</button>
    </div>
  );
};

class Admin extends Component {
  state = {
    login: "",
    password: "",
    user:
      localStorage.getItem("sesstionUser") &&
      localStorage.getItem("sesstionUser")
  };

  handleLogin = e => {
    this.props.api
      .getAuth(this.state.login, this.state.password)
      .then(res => {
        this.setState({
          user: res.data
        });
        localStorage.setItem("sesstionUser", res.data);
      })
      .catch(error => {
        console.log(error);
      });

    e.preventDefault();
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

  render() {
    const { user } = this.state;
    if (user) {
      return <AdminPanel handleLogout={this.handleLogout} />;
    }

    return (
      <AdminComponent>
        <form onSubmit={this.handleLogin}>
          <label htmlFor="login">Login</label>
          <input
            value={this.state.login}
            onChange={this.handleChange}
            name="login"
            type="text"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            type="password"
          />
          <br />
          <button type="submit">Войти</button>
          <br />
        </form>
      </AdminComponent>
    );
  }
}

export default withAPI(Admin);
