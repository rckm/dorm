import React, { Component } from "react";
import { withAPI } from "../API";

const WithAdmin = WrappedComponent => {
  class WithAdmin extends Component {
    state = {
      login: "",
      password: "",
      user:
        localStorage.getItem("sesstionUser") &&
        localStorage.getItem("sesstionUser")
    };

    //*get password and login for administrator
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

    //* function of logout administrator
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
