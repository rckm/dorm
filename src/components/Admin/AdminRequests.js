/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import { Grid, Table, Segment, Modal, Button, Header } from "semantic-ui-react";
import { withAPI } from "../API";
import { gender } from "../../utils/util";
import AdminDirection from "./AdminDirection";

import { AdminRequestsStyle } from "./style";

const DownloadDoc = props => {
  return (
    <Button onClick={props.getRequestDocument}>Скачать направление</Button>
  );
};

class AdminRequests extends Component {
  state = {
    requests: [],
    openCurrentField: null,
    currentDataToDocument: null
  };

  getRequestDocument = () => {
    return this.props.api
      .getRequestDocument(
        this.state.currentDataToDocument.name_f,
        this.state.currentDataToDocument.name_l,
        this.state.currentDataToDocument.patronymic,
        this.state.currentDataToDocument.gender_id,
        this.state.currentDataToDocument.address,
        this.state.currentDataToDocument.phone,
        this.state.currentDataToDocument.number,
        this.state.currentDataToDocument.children,
        this.state.currentDataToDocument.date_residence,
        this.state.currentDataToDocument.group
      )
      .then(res => {
        window.open(res.config.url);
      })
      .catch(error => {
        throw error;
      });
  };

  componentDidMount = () => {
    this.props.api
      .getRequests()
      .then(
        res => {
          this.setState({
            requests: res.data
          });
        },
        error => {
          if (error.response.status === 401) {
            return this.props.handleLogout();
          }
        }
      )
      .catch(error => {
        throw error;
      });
  };

  render() {
    const loaded = this.state.requests.length ? false : true;
    return (
      <AdminRequestsStyle>
        <Grid.Row centered>
          <Grid.Column width={16}>
            {!loaded ? (
              <Segment loading={loaded}>
                <Table fixed size="small" celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Фамилия</Table.HeaderCell>
                      <Table.HeaderCell>Имя</Table.HeaderCell>
                      <Table.HeaderCell>Отчество</Table.HeaderCell>
                      <Table.HeaderCell>Группа</Table.HeaderCell>
                      <Table.HeaderCell>Пол</Table.HeaderCell>
                      <Table.HeaderCell>ИИН</Table.HeaderCell>
                      <Table.HeaderCell>Адрес проживания</Table.HeaderCell>
                      <Table.HeaderCell>Телефон</Table.HeaderCell>
                      <Table.HeaderCell>Сколько детей в семье</Table.HeaderCell>
                      <Table.HeaderCell>
                        Дата начала проживания
                      </Table.HeaderCell>
                      <Table.HeaderCell>Номер комнаты</Table.HeaderCell>
                      <Table.HeaderCell>Направление</Table.HeaderCell>
                      <Table.HeaderCell>Скачать</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {this.state.requests.map((value, index) => {
                      return (
                        <Table.Row key={index}>
                          <Table.Cell>{value.name_l}</Table.Cell>
                          <Table.Cell>{value.name_f}</Table.Cell>
                          <Table.Cell>{value.patronymic}</Table.Cell>
                          <Table.Cell>{value.group}</Table.Cell>
                          <Table.Cell>{gender[value.gender_id]}</Table.Cell>
                          <Table.Cell>{value.uin}</Table.Cell>
                          <Table.Cell>{value.address}</Table.Cell>
                          <Table.Cell>{value.phone}</Table.Cell>
                          <Table.Cell>{value.children}</Table.Cell>
                          <Table.Cell>{value.date_residence}</Table.Cell>
                          <Table.Cell>{value.number}</Table.Cell>
                          <Table.Cell>
                            <Modal
                              dimmer="blurring"
                              size="fullscreen"
                              trigger={
                                <Button
                                  onClick={() =>
                                    this.setState({
                                      openCurrentField: value
                                    })
                                  }
                                >
                                  Создать направление
                                </Button>
                              }
                              closeIcon
                            >
                              <Header
                                icon="archive"
                                content="Создание направления"
                              />
                              <Modal.Content>
                                <AdminDirection
                                  openCurrentField={this.state.openCurrentField}
                                />
                              </Modal.Content>
                            </Modal>
                          </Table.Cell>
                          <Table.Cell>
                            <Modal
                              dimmer="blurring"
                              size="mini"
                              trigger={
                                <Button
                                  onClick={() => {
                                    this.setState({
                                      currentDataToDocument: value
                                    });
                                  }}
                                >
                                  Открыть направление
                                </Button>
                              }
                            >
                              <Header
                                icon="file outline"
                                content="Скачать направление"
                              />
                              <Modal.Content>
                                <DownloadDoc
                                  getRequestDocument={this.getRequestDocument}
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
              <Segment loading={loaded}>
                <Table>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Фамилия</Table.HeaderCell>
                      <Table.HeaderCell>Имя</Table.HeaderCell>
                      <Table.HeaderCell>Отчество</Table.HeaderCell>
                      <Table.HeaderCell>Группа</Table.HeaderCell>
                      <Table.HeaderCell>Пол</Table.HeaderCell>
                      <Table.HeaderCell>ИИН</Table.HeaderCell>
                      <Table.HeaderCell>Адрес проживания</Table.HeaderCell>
                      <Table.HeaderCell>Телефон</Table.HeaderCell>
                      <Table.HeaderCell>Сколько детей в семье</Table.HeaderCell>
                      <Table.HeaderCell>
                        Дата начала проживания
                      </Table.HeaderCell>
                      <Table.HeaderCell>Номер комнаты</Table.HeaderCell>
                      <Table.HeaderCell>Направление</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                </Table>
              </Segment>
            )}
          </Grid.Column>
        </Grid.Row>
      </AdminRequestsStyle>
    );
  }
}

export default withAPI(AdminRequests);
