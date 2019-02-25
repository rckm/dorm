import React, { Component } from "react";
import { withAPI } from "../API";

const WithForm = WrappedComponent => {
  class WithForm extends Component {
    state = {
      name_f: "",
      name_l: "",
      patronymic: "",
      uin: "",
      group: "",
      address: "",
      phone: "",
      children: "",
      room_id: "",
      gender_id: "",
      date_residence: ""
    };

    handleSubmit = () => {
      this.props.api.postRequest(this.state);
    };

    // handling for inputs
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    // handling for select and options
    handleSelect = e => {
      this.setState({
        gender_id: e.target.value
      });
    };

    render() {
      return (
        <WrappedComponent
          state={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleSelect={this.handleSelect}
          {...this.props}
        />
      );
    }
  }

  return withAPI(WithForm);
};

export default WithForm;
