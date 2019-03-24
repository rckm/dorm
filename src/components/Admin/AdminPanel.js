import React, { useState } from "react";
import AdminReports from "./AdminReports";
import AdminRequests from "./AdminRequests";
import { Grid, Menu, Segment } from "semantic-ui-react";

import { AdminPanelStyle } from "./style";

const AdminPanel = props => {
  const [routes, setRoutes] = useState(1);
  return (
    <AdminPanelStyle>
      <Grid>
        <Grid.Row centered>
          <Grid.Column>
            <Segment>
              <Menu fluid size="large" secondary>
                <Menu.Item className="header-name" icon="user" />
                <Menu.Item onClick={() => setRoutes(1)} name="Заявления" />
                <Menu.Item onClick={() => setRoutes(2)} name="Направления" />
                <Menu.Item
                  icon="sign out"
                  position="right"
                  onClick={props.handleLogout}
                  name="Выйти"
                />
              </Menu>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            <React.Fragment>
              {routes === 1 && (
                <AdminRequests handleLogout={props.handleLogout} />
              )}
              {routes === 2 && <AdminReports />}
            </React.Fragment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </AdminPanelStyle>
  );
};

export default AdminPanel;
