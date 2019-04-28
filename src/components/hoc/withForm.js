/**
 * @file This HOC includes all input fields and its state.
 * @file This HOC only for components that have input fields.
 * This HOC includes functions like POST Request [handleSubmit], GET Request [getDormDb], and handlers for inputs.
 */

import React, { Component } from "react";
import { withAPI } from "../API";
import { withoutFields } from "../../utils/util";
const fields = {
  name_f: "",
  name_l: "",
  patronymic: "",
  residence_permit: {
    city: "",
    country_id: "",
    address: ""
  },
  citizenship: {
    number: " ",
    country_id: ""
  },
  shelter: {
    parent_mother: {
      name_l: "",
      name_f: "",
      patronymic: "",
      phone: ""
    },
    parent_father: {
      name_l: "",
      name_f: "",
      patronymic: "",
      phone: ""
    },
    guardian: {
      name_l: "",
      name_f: "",
      patronymic: "",
      phone: ""
    },
    orphanage: {
      address: "",
      phone: ""
    }
  },
  eduactional_form_id: "",
  group: "",
  address: "",
  phone: "",
  children: "",
  room_id: "",
  gender_id: "",
  status_id: "",
  dorm_id: "",
  email: "",
  date_residence: ""
};
const WithForm = WrappedComponent => {
  class WithForm extends Component {
    state = {
      ...fields,
      responseStatus: "",
      error: null,
      parents: "",
      loading: false,
      dormDb: {}
    };

    /**
     * @function resetForm This function for clearing inputs fields
     */
    resetForm = () => {
      this.setState({ ...fields });
    };

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

    /**
     * Handling for posting requests
     */
    handleSubmit = e => {
      const state = { ...this.state };
      const values = withoutFields(
        state,
        "status_id",
        "dormDb",
        "parents",
        "responseStatus",
        "loading",
        "error"
      );
      this.setState({
        loading: true
      });
      this.props.api
        .postRequest(values)
        .then(res => {
          this.setState({
            responseStatus: res.status,
            loading: false,
            error: null
          });
        })
        .catch(error => {
          this.setState({
            error: error,
            loading: false
          });
        });
      this.resetForm();
    };

    /**
     * Handling for inputs
     */
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    /**
     * Handling for mother and father inputs
     */
    handleParentsChange = callback => {
      this.setState(callback);
    };

    /**
     * Handling for select and options
     */
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
          handleParentsChange={this.handleParentsChange}
          {...this.props}
        />
      );
    }
  }

  return withAPI(WithForm);
};

export default WithForm;
