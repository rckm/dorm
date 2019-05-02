import React, { Component } from "react";
import {
  Grid,
  Table,
  Segment,
  Modal,
  Button,
  Header,
  Icon,
  Form
} from "semantic-ui-react";
import { withAPI } from "../API";
import { gender } from "../../utils/util";
import AdminDirection from "./AdminDirection";
import { withoutFields } from "../../utils/util";

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
    room_id: null,
    currentDataToDocument: null,
    openModal: false,
    loading: true,
    searchValue: "",
    foundedRequest: []
  };

  handleSubmitReport = e => {
    const room_id = this.state.room_id;
    const state = { ...this.state.openCurrentField, room_id };
    const value = withoutFields(state, "id", "active", "rooms");
    this.props.api.postReport(value).then(() => {
      this.setState({
        openModal: false
      });
    });
  };

  handleChange = e => {
    this.setState({
      openCurrentField: {
        ...this.state.openCurrentField,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSearchInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSearch = e => {
    this.props.api
      .getRequestById(this.state.searchValue)
      .then(res => {
        if (this.state.foundedRequest) {
          this.setState({
            foundedRequest: []
          });
        }
        this.setState(prevState => ({
          foundedRequest: [...prevState.foundedRequest, res.data]
        }));
      })
      .catch(error => {
        throw error;
      });
  };

  handleSelect = e => {
    this.setState({
      openCurrentField: {
        ...this.state.openCurrentField,
        [e.target.name]: e.target.value
      }
    });
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
        this.state.currentDataToDocument.rooms.id,
        this.state.currentDataToDocument.children,
        this.state.currentDataToDocument.date_residence,
        this.state.currentDataToDocument.group,
        this.state.currentDataToDocument.mother,
        this.state.currentDataToDocument.father,
        this.state.currentDataToDocument.id
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
            requests: res.data,
            loading: false
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
    console.log(this.state.requests);
    return (
      <AdminRequestsStyle>
        <Grid.Row centered>
          <Grid.Column width={14}>
            {!this.state.loading ? (
              <Segment loading={this.state.loading}>
                <h1 style={{ textAlign: "center" }}>Заявления</h1>
                <Form onSubmit={this.handleSearch}>
                  <Form.Field inline>
                    <label>
                      <Icon corner="bottom left" name="search" />
                    </label>
                    <input
                      onChange={this.handleSearchInput}
                      value={this.state.searchValue}
                      type="text"
                      name="searchValue"
                      className="searchInput"
                    />
                    <Button primary type="submit">
                      Найти
                    </Button>
                  </Form.Field>
                </Form>
                {this.state.foundedRequest.length ? (
                  <Table size="small" compact celled>
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
                        <Table.HeaderCell>
                          Сколько детей в семье
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                          Дата начала проживания
                        </Table.HeaderCell>
                        <Table.HeaderCell>Номер комнаты</Table.HeaderCell>
                        <Table.HeaderCell>Направление</Table.HeaderCell>
                        <Table.HeaderCell>Скачать</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {this.state.foundedRequest.map((value, index) => {
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
                                        openCurrentField: value,
                                        room_id: value.rooms.id,
                                        openModal: true
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
                                    openCurrentField={
                                      this.state.openCurrentField
                                    }
                                    room_id={this.state.room_id}
                                    handleCurrentFieldChange={this.handleChange}
                                    handleCurrentFieldSelect={this.handleSelect}
                                    handleCurrentFieldSubmitReport={
                                      this.handleSubmitReport
                                    }
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
                ) : (
                  <p />
                )}
                <hr />
                <Table compact={true} size="small" celled>
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
                                      openCurrentField: value,
                                      room_id: value.rooms.id,
                                      openModal: true
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
                                  room_id={this.state.room_id}
                                  handleCurrentFieldChange={this.handleChange}
                                  handleCurrentFieldSelect={this.handleSelect}
                                  handleCurrentFieldSubmitReport={
                                    this.handleSubmitReport
                                  }
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
              <Segment loading={!this.state.requests.length} placeholder>
                <Header icon>
                  <Icon name="file outline" />
                  <br />
                  Список заявлений пуст.
                </Header>
              </Segment>
            )}
          </Grid.Column>
        </Grid.Row>
      </AdminRequestsStyle>
    );
  }
}

export default withAPI(AdminRequests);
