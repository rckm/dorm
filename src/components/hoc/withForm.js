import React, { Component } from "react";
import { withAPI } from "../API";
import { withoutFields } from "../../utils/util";

const WithForm = WrappedComponent => {
  class WithForm extends Component {
    state = {
      name_f: "",
      name_l: "",
      patronymic: "",
      uin: "",
      group: "ВТ-13С",
      address: "",
      phone: "",
      children: "1",
      room_id: "",
      gender_id: "",
      date_residence: "",
      status_id: "",
      dormDb: {}
    };

    //* get from the api the dorm database info
    componentDidMount() {
      if (this.state.dormDb.length) return;

      this.props.api
        .getDormDb()
        .then(res => {
          this.setState({
            dormDb: res.data
          });
        })
        .catch(error => {
          throw error;
        });
    }

    //* handling for postring requests
    handleSubmit = () => {
      const state = { ...this.state };
      const values = withoutFields(state, "status_id", "dormDb");
      this.props.api.postRequest(values);
    };

    //* handling for posting reports
    handleSubmitReport = () => {
      const state = { ...this.state };
      const values = withoutFields(state, "group", "dormDb");
      this.props.api.postReport(values);
    };

    //* handling for inputs
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    //* handling for select and options
    handleSelect = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    render() {
      return (
        <WrappedComponent
          state={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleSelect={this.handleSelect}
          handleSubmitReport={this.handleSubmitReport}
          {...this.props}
        />
      );
    }
  }

  return withAPI(WithForm);
};

export default WithForm;
