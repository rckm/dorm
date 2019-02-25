import React, { Component } from "react";
import { withAPI } from "../API";
import { AdminPanel } from "./style";

class Admin extends Component {
  render() {
    return (
      <AdminPanel>
        <div>Hello</div>
      </AdminPanel>
    );
  }
}

export default withAPI(Admin);
