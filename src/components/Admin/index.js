import React from "react";
import AdminPanel from "./AdminPanel";
import withAdmin from "../hoc/withAdmin";
import { AdminComponent } from "./style";
import { Grid, Segment, Input, Button, Form } from "semantic-ui-react";

const Admin = props => {
  const { user } = props.state;
  if (user) {
    return <AdminPanel handleLogout={props.handleLogout} />;
  }

  return (
    <AdminComponent>
      <Grid container>
        <Grid.Row centered>
          <Grid.Column width={8}>
            <Form className="form" onSubmit={props.handleLogin}>
              <Segment>
                <h2 className="header">Панель администратора</h2>
                <Form.Field>
                  <label htmlFor="login">Логин</label>
                  <Input
                    value={props.state.login}
                    onChange={props.handleChange}
                    name="login"
                    type="text"
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="password">Пароль</label>
                  <Input
                    value={props.state.password}
                    onChange={props.handleChange}
                    name="password"
                    type="password"
                  />
                </Form.Field>
                <Button type="submit">Войти</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </AdminComponent>
  );
};

export default withAdmin(Admin);
