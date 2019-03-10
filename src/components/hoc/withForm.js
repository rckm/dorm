import React, { Component } from "react";
import { withAPI } from "../API";
import { withoutFields } from "../../utils/util";
const fields = {
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
  date_residence: "",
  status_id: ""
};
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
      date_residence: "",
      status_id: "",
      dormDb: {}
    };

    //* reset form fields
    resetForm = () => {
      this.setState({ ...fields });
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
      this.resetForm();
    };

    //* handling for posting reports
    handleSubmitReport = () => {
      const state = { ...this.state };
      const values = withoutFields(state, "group", "dormDb");
      this.props.api.postReport(values);
      this.resetForm();
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
