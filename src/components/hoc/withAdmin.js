/**
 * @file This HOC is for auth for admin
 */

import React, { Component } from "react";
import { withAPI } from "../API";

const WithAdmin = WrappedComponent => {
  class WithAdmin extends Component {
    state = {
      login: "",
      password: "",
      user:
        localStorage.getItem("sessionUser") &&
        localStorage.getItem("sessionUser")
    };

    //*get password and login for administrator
    handleLogin = () => {
      this.props.api
        .getAuth(this.state.login, this.state.password)
        .then(res => {
          this.setState({
            user: res.data.token
          });
          localStorage.setItem("sessionUser", res.data.token);
        })
        .catch(error => {
          throw error;
        });
    };

    //* function of logout administrator
    handleLogout = () => {
      localStorage.removeItem("sessionUser");
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
      return (
        <WrappedComponent
          state={this.state}
          handleChange={this.handleChange}
          handleLogout={this.handleLogout}
          handleLogin={this.handleLogin}
          {...this.props}
        />
      );
    }
  }
  return withAPI(WithAdmin);
};

export default WithAdmin;
