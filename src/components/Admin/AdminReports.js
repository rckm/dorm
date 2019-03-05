import React, { Component } from "react";
import { Grid, Table, Checkbox, Segment } from "semantic-ui-react";
import { withAPI } from "../API";
import { AdminReportsStyle } from "./style";
import { gender } from "../../utils/util";

class AdminReports extends Component {
  state = {
    reports: []
  };

  componentDidMount = () => {
    if (this.state.reports.length) return;
    this.props.api.getReports().then(res => {
      this.setState({
        reports: res.data
      });
    });
  };

  render() {
    const loaded = this.state.reports.length ? false : true;
    return (
      <AdminReportsStyle>
        <Grid.Row centered>
          <Grid.Column>
            <h1>Созданные отчеты</h1>
            {!loaded ? (
              <Segment loading={loaded}>
                <Table sortable size="large" celled>
                  <Table.Header fullWidth>
                    <Table.Row>
                      <Table.HeaderCell>Фамилия</Table.HeaderCell>
                      <Table.HeaderCell>Имя</Table.HeaderCell>
                      <Table.HeaderCell>Отчество</Table.HeaderCell>
                      <Table.HeaderCell>Пол</Table.HeaderCell>
                      <Table.HeaderCell>ИИН</Table.HeaderCell>
                      <Table.HeaderCell>Адрес проживания</Table.HeaderCell>
                      <Table.HeaderCell>Телефон</Table.HeaderCell>
                      {/* <Table.HeaderCell>Сколько детей в семье</Table.HeaderCell> */}
                      <Table.HeaderCell>
                        Дата начала проживания
                      </Table.HeaderCell>
                      <Table.HeaderCell>Номер комнаты</Table.HeaderCell>
                      <Table.HeaderCell>Статус</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {this.state.reports.map((value, index) => {
                      return (
                        <Table.Row key={index}>
                          <Table.Cell>{value.name_l}</Table.Cell>
                          <Table.Cell>{value.name_f}</Table.Cell>
                          <Table.Cell>{value.patronymic}</Table.Cell>
                          <Table.Cell>{gender[value.gender_id]}</Table.Cell>
                          <Table.Cell>{value.uin}</Table.Cell>
                          <Table.Cell>{value.address}</Table.Cell>
                          <Table.Cell>{value.phone}</Table.Cell>
                          {/* <Table.Cell>{value.children}</Table.Cell> */}
                          <Table.Cell>{value.date_residence}</Table.Cell>
                          <Table.Cell>{value.number}</Table.Cell>
                          <Table.Cell>
                            <Checkbox slider />
                          </Table.Cell>
                        </Table.Row>
                      );
                    })}
                  </Table.Body>
                </Table>
              </Segment>
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
          </Grid.Column>
        </Grid.Row>
      </AdminReportsStyle>
    );
  }
}

export default withAPI(AdminReports);
