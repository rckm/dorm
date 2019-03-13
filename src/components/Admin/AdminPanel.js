import React from "react";
import AdminReports from "./AdminReports";
import AdminRequests from "./AdminRequests";
import { Grid } from "semantic-ui-react";
import { AdminPanelStyle } from "./style";

const AdminPanel = props => {
  return (
    <AdminPanelStyle>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <h1 className="title">Панель Администратора</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={14}>
            <AdminReports />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={14}>
            <AdminRequests handleLogout={props.handleLogout} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </AdminPanelStyle>
  );
};

export default AdminPanel;
