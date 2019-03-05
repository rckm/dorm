import React, { Component } from "react";
import { Grid, Table, Segment } from "semantic-ui-react";
import { withAPI } from "../API";
import { AdminRequestsStyle } from "./style";
import { gender } from "../../utils/util";

class AdminRequests extends Component {
  state = {
    requests: []
  };

  componentDidMount = () => {
    this.props.api
      .getRequests()
      .then(res => {
        this.setState({
          requests: res.data
        });
      })
      .catch(error => {
        throw error;
      });
  };

  render() {
    const loaded = this.state.requests.length ? false : true;
    return (
      <AdminRequestsStyle>
        <h1>Поданные заявления</h1>
        {!loaded ? (
          <Grid.Row centered>
            <Grid.Column>
              <Segment loading={loaded}>
                <Table sortable size="large" celled>
                  <Table.Header fullWidth>
                    <Table.Row>
                      <Table.HeaderCell>Фамилия</Table.HeaderCell>
                      <Table.HeaderCell>Имя</Table.HeaderCell>
                      <Table.HeaderCell>Отчество</Table.HeaderCell>
                      {/* <Table.HeaderCell>Группа</Table.HeaderCell> */}
                      <Table.HeaderCell>Пол</Table.HeaderCell>
                      <Table.HeaderCell>ИИН</Table.HeaderCell>
                      <Table.HeaderCell>Адрес проживания</Table.HeaderCell>
                      <Table.HeaderCell>Телефон</Table.HeaderCell>
                      {/* <Table.HeaderCell>Сколько детей в семье</Table.HeaderCell> */}
                      <Table.HeaderCell>
                        Дата начала проживания
                      </Table.HeaderCell>
                      <Table.HeaderCell>Номер комнаты</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {this.state.requests.map((value, index) => {
                      return (
                        <Table.Row key={index}>
                          <Table.Cell>{value.name_l}</Table.Cell>
                          <Table.Cell>{value.name_f}</Table.Cell>
                          <Table.Cell>{value.patronymic}</Table.Cell>
                          {/* <Table.Cell>{value.group}</Table.Cell> */}
                          <Table.Cell>{gender[value.gender_id]}</Table.Cell>
                          <Table.Cell>{value.uin}</Table.Cell>
                          <Table.Cell>{value.address}</Table.Cell>
                          <Table.Cell>{value.phone}</Table.Cell>
                          {/* <Table.Cell>{value.children}</Table.Cell> */}
                          <Table.Cell>{value.date_residence}</Table.Cell>
                          <Table.Cell>{value.number}</Table.Cell>
                        </Table.Row>
                      );
                    })}
                  </Table.Body>
                </Table>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        ) : (
          <div
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontSize: "24px"
            }}
          >
            Пусто.
          </div>
        )}
      </AdminRequestsStyle>
    );
  }
}

export default withAPI(AdminRequests);
