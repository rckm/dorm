import React, { Component } from "react";
import axios from "axios";
import qs from "querystring";

const WithForm = WrappedComponent => {
  return class WithForm extends Component {
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
      const {
        name_f,
        name_l,
        patronymic,
        uin,
        group,
        address,
        phone,
        children,
        room_id,
        gender_id,
        date_residence
      } = this.state;

      const data = {
        name_f: name_f,
        name_l: name_l,
        patronymic: patronymic,
        uin: uin,
        group: group,
        address: address,
        phone: phone,
        children: children,
        room_id: room_id,
        gender_id: gender_id,
        date_residence: date_residence
      };
      const options = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: qs.stringify(data),
        url: "https://dorm-keu.herokuapp.com/api/request"
      };
      axios(options);
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
  };
};

export default WithForm;
