import React, { Component } from "react";
import { Button, Grid, Form, Segment } from "semantic-ui-react";
// import { withAPI } from "../API";
import { FormStyle } from "./style";
import axios from "axios";
import qs from "querystring";

class FormComponent extends Component {
  state = {
    name_f: "",
    name_l: "",
    patronymic: "",
    uin: "",
    group: "",
    address: "",
    phone: "",
    children: "",
    room_id: "",
    gender_id: "",
    date_residence: ""
  };

  handleSubmit = e => {
    const {
      name_f,
      name_l,
      patronymic,
      uin,
      group,
      address,
      phone,
      children,
      room_id,
      gender_id,
      date_residence
    } = this.state;

    // const params = new URLSearchParams();
    // params.append("name_f", name_f);
    // params.append("name_l", name_l);
    // params.append("patronymic", patronymic);
    // params.append("uin", uin);
    // params.append("room_id", room_id);
    // params.append("address", address);
    // params.append("phone", phone);
    // params.append("group", group);
    // params.append("children", children);
    // params.append("date_residence", date_residence);
    // params.append("gender_id", gender_id);
    // axios.post("https://dorm-keu.herokuapp.com/api/request", params);

    const data = {
      name_f: name_f,
      name_l: name_l,
      patronymic: patronymic,
      uin: uin,
      group: group,
      address: address,
      phone: phone,
      children: children,
      room_id: room_id,
      gender_id: gender_id,
      date_residence: date_residence
    };
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
      url: "https://dorm-keu.herokuapp.com/api/request"
    };
    axios(options);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSelect = e => {
    this.setState({
      gender_id: e.target.value
    });
  };

  render() {
    return (
      <FormStyle>
        <Grid container>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <h1 className="title">Form</h1>
              <Segment inverted>
                <Form inverted size="big" onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label className="form-label">Фамилия</label>
                    <input
                      required
                      value={this.state.name_l}
                      type="text"
                      name="name_l"
                      onChange={this.handleChange}
                      placeholder="Введите фамилию"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label className="form-label">Имя</label>
                    <input
                      required
                      value={this.state.name_f}
                      type="text"
                      name="name_f"
                      onChange={this.handleChange}
                      placeholder="Введите имя"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label className="form-label">Отчество</label>
                    <input
                      required
                      value={this.state.patronymic}
                      type="text"
                      name="patronymic"
                      onChange={this.handleChange}
                      placeholder="Введите отчество"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label className="form-label">ИИН</label>
                    <input
                      required
                      value={this.state.uin}
                      type="text"
                      name="uin"
                      maxLength="12"
                      onChange={this.handleChange}
                      placeholder="Введите ИИН"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label className="form-label">Группа</label>
                    <input
                      required
                      value={this.state.group}
                      type="text"
                      name="group"
                      onChange={this.handleChange}
                      placeholder="Введите группу"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label className="form-label">Адрес проживания</label>
                    <input
                      required
                      value={this.state.address}
                      type="text"
                      name="address"
                      onChange={this.handleChange}
                      placeholder="Улица, дом, квартира"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label className="form-label">Номер телефона</label>
                    <input
                      required
                      pattern="((\+7)|[8])7[0-9]{9}$"
                      value={this.state.phone}
                      type="text"
                      name="phone"
                      onChange={this.handleChange}
                      placeholder="87081231212"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label className="form-label">
                      Количество детей в семье
                    </label>
                    <input
                      required
                      value={this.state.children}
                      type="text"
                      name="children"
                      onChange={this.handleChange}
                      placeholder="Введите количество детей в семье"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label className="form-label">Номер комнаты</label>
                    <input
                      required
                      value={this.state.room_id}
                      type="text"
                      name="room_id"
                      onChange={this.handleChange}
                      placeholder="Введите номер комнаты"
                    />
                  </Form.Field>
                  <Form.Field
                    onChange={this.handleSelect}
                    value={this.state.gender_id}
                    label="Пол"
                    placeholder="Выберите пол"
                    control="select"
                  >
                    <option disabled value="" />
                    <option value="1">Мужской</option>
                    <option value="2">Женский</option>
                  </Form.Field>
                  <Form.Field>
                    <label className="form-label">Дата заселения</label>
                    <input
                      required
                      value={this.state.date_residence}
                      type="date"
                      name="date_residence"
                      onChange={this.handleChange}
                      placeholder="гг-мм-дд"
                    />
                  </Form.Field>
                  <Button type="submit">Отправить заявление</Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </FormStyle>
    );
  }
}

export default FormComponent;
