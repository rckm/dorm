import React, { Component, PureComponent } from "react";
import {
  Grid,
  Table,
  Segment,
  Modal,
  Button,
  Header,
  Icon,
  Form,
  Input
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

class FoundedRequestTable extends PureComponent {
  render() {
    if (this.props.foundError && this.props.searchValue) {
      return <div>Ничего не найдено</div>;
    }
    return (
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
            <Table.HeaderCell>Сколько детей в семье</Table.HeaderCell>
            <Table.HeaderCell>Дата начала проживания</Table.HeaderCell>
            <Table.HeaderCell>Номер комнаты</Table.HeaderCell>
            <Table.HeaderCell>Направление</Table.HeaderCell>
            <Table.HeaderCell>Скачать</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.foundedRequest.map((value, index) => {
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
                    open={this.props.openModal}
                    onClose={this.props.toggleModal}
                    dimmer="blurring"
                    size="fullscreen"
                    trigger={
                      <Button
                        onClick={() => this.props.handleTriggerButton(value)}
                      >
                        Создать направление
                      </Button>
                    }
                    closeIcon
                  >
                    <Header icon="archive" content="Создание направления" />
                    <Modal.Content>
                      <AdminDirection
                        openCurrentField={this.props.openCurrentField}
                        room_id={this.props.room_id}
                        handleCurrentFieldChange={this.props.handleChange}
                        handleCurrentFieldSelect={this.props.handleSelect}
                        handleCurrentFieldSubmitReport={
                          this.props.handleSubmitReport
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
                      <Button onClick={this.props.currentDataToDocument}>
                        Открыть направление
                      </Button>
                    }
                  >
                    <Header icon="file outline" content="Скачать направление" />
                    <Modal.Content>
                      <DownloadDoc
                        getRequestDocument={this.props.getRequestDocument}
                      />
                    </Modal.Content>
                  </Modal>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}

const FindRequest = props => {
  return (
    <Form onSubmit={props.handleSearch}>
      <Input
        label="Найти"
        size="large"
        onChange={props.handleSearchInput}
        value={props.searchValue}
        type="text"
        name="searchValue"
        placeholder={"Введите номер документа"}
      />
    </Form>
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
    foundedRequest: [],
    foundError: null
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

  toggleModal = () => {
    this.setState({
      openModal: false
    });
  };

  handleTriggerButton = value => {
    this.setState({
      openCurrentField: value,
      room_id: value.rooms.id,
      openModal: true
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
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      this.handleSearch
    );
  };

  handleSearch = e => {
    this.props.api
      .getRequestById(this.state.searchValue)
      .then(res => {
        if (!this.state.foundedRequest.length) {
          this.setState({
            foundedRequest: []
          });
        }
        this.setState(prevState => ({
          foundedRequest: [...prevState.foundedRequest, res.data],
          foundError: null
        }));
      })
      .catch(error => {
        this.setState({
          foundedRequest: [],
          foundError: true
        });
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
    return (
      <AdminRequestsStyle>
        <Grid.Row centered>
          <Grid.Column width={14}>
            {!this.state.loading ? (
              <Segment loading={this.state.loading}>
                <h1 style={{ textAlign: "center" }}>Заявления</h1>

                {/* Search input */}
                <FindRequest
                  handleSearchInput={this.handleSearchInput}
                  handleSearch={this.handleSearch}
                  searchValue={this.state.searchValue}
                />
                {/* Search input */}
                <FoundedRequestTable
                  foundedRequest={
                    this.state.foundedRequest.length
                      ? this.state.foundedRequest
                      : this.state.requests
                  }
                  searchValue={this.state.searchValue}
                  foundError={this.state.foundError}
                  openModal={this.state.openModal}
                  toggleModal={this.toggleModal}
                  handleTriggerButton={this.handleTriggerButton}
                  openCurrentField={this.state.openCurrentField}
                  room_id={this.state.room_id}
                  handleChange={this.handleChange}
                  handleSelect={this.handleSelect}
                  handleSubmitReport={this.handleSubmitReport}
                  getRequestDocument={this.getRequestDocument}
                />
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
