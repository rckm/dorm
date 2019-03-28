import React, { Component } from "react";
import {
  Grid,
  Table,
  Form,
  Segment,
  Button,
  Header,
  Icon,
  Modal
} from "semantic-ui-react";
import { withAPI } from "../API";
import { gender, findName } from "../../utils/util";

import { AdminReportsStyle } from "./style";

const ChangeStatusModal = props => {
  const changeStatus = () => {
    props.putStatus(props.report_id, props.status_id);
  };

  return (
    <Form onSubmit={changeStatus}>
      <Form.Field
        className="status"
        name="status_id"
        onChange={props.handleChange}
        value={props.status_id || "0"}
        control="select"
        required
      >
        <>
          <option disabled value="0">
            Статус заявки
          </option>
          {props.dormDb.status &&
            props.dormDb.status.map(status => {
              const name = findName(props.dormDb.names, status.name_id);
              return (
                <option key={status.id} value={status.id}>
                  {name.name_ru}
                </option>
              );
            })}
        </>
      </Form.Field>
      <Button primary type="submit">
        Изменить
      </Button>
    </Form>
  );
};

class AdminReports extends Component {
  state = {
    reports: [],
    status_id: "",
    report_id: "",
    dormDb: {},
    openModal: false
  };

  componentDidMount = () => {
    if (this.state.reports.length) return;
    this.props.api.getReports().then(res => {
      this.setState({
        reports: res.data
      });
    });
    if (this.state.dormDb.length) return;
    this.props.api.getDormDb().then(res => {
      this.setState({
        dormDb: res.data
      });
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const loaded = this.state.reports.length ? false : true;
    return (
      <AdminReportsStyle>
        <Grid.Row centered>
          <Grid.Column>
            {!loaded ? (
              <Segment loading={loaded}>
                <h1>Направления</h1>
                <Table size="large" celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Фамилия</Table.HeaderCell>
                      <Table.HeaderCell>Имя</Table.HeaderCell>
                      <Table.HeaderCell>Отчество</Table.HeaderCell>
                      <Table.HeaderCell>Пол</Table.HeaderCell>
                      <Table.HeaderCell>ИИН</Table.HeaderCell>
                      <Table.HeaderCell>Адрес проживания</Table.HeaderCell>
                      <Table.HeaderCell>Телефон</Table.HeaderCell>
                      <Table.HeaderCell>Сколько детей в семье</Table.HeaderCell>
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
                          <Table.Cell>{value.children}</Table.Cell>
                          <Table.Cell>{value.date_residence}</Table.Cell>
                          <Table.Cell>{value.rooms.number}</Table.Cell>
                          <Table.Cell>
                            <Modal
                              open={this.state.openModal}
                              onClose={() =>
                                this.setState({
                                  openModal: false
                                })
                              }
                              dimmer="blurring"
                              size="fullscreen"
                              trigger={
                                <Button
                                  onClick={() =>
                                    this.setState({
                                      report_id: value.id,
                                      openModal: true
                                    })
                                  }
                                >
                                  Изменить статус
                                </Button>
                              }
                              closeIcon
                            >
                              <Header
                                icon="archive"
                                content="Изменение статуса"
                              />
                              <Modal.Content>
                                <ChangeStatusModal
                                  handleChange={this.handleChange}
                                  status_id={this.state.status_id}
                                  report_id={this.state.report_id}
                                  dormDb={this.state.dormDb}
                                  putStatus={this.props.api.putStatus}
                                />
                              </Modal.Content>
                            </Modal>
                          </Table.Cell>
                        </Table.Row>
                      );
                    })}
                  </Table.Body>
                </Table>
              </Segment>
            ) : (
              <Segment
                loading={this.state.reports.length ? false : true}
                placeholder
              >
                <Header icon>
                  <Icon name="file outline" />
                  <br />
                  Список направлений пуст.
                </Header>
              </Segment>
            )}
          </Grid.Column>
        </Grid.Row>
      </AdminReportsStyle>
    );
  }
}

export default withAPI(AdminReports);
