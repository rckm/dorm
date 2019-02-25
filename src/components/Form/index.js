import React from "react";
import { Button, Grid, Form, Segment } from "semantic-ui-react";
import WithForm from "../hoc/withForm";
import Dorms from "../Dorms";
import { FormStyle } from "./style";

const FormComponent = props => {
  return (
    <FormStyle>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={4}>
            <h1 className="title">Form</h1>
            <Segment inverted>
              <Form inverted size="big" onSubmit={props.handleSubmit}>
                <Form.Field required>
                  <label className="form-label">Фамилия</label>
                  <input
                    required
                    value={props.state.name_l}
                    type="text"
                    name="name_l"
                    onChange={props.handleChange}
                    placeholder="Введите фамилию"
                  />
                </Form.Field>
                <Form.Field required>
                  <label className="form-label">Имя</label>
                  <input
                    required
                    value={props.state.name_f}
                    type="text"
                    name="name_f"
                    onChange={props.handleChange}
                    placeholder="Введите имя"
                  />
                </Form.Field>
                <Form.Field>
                  <label className="form-label">Отчество</label>
                  <input
                    value={props.state.patronymic}
                    type="text"
                    name="patronymic"
                    onChange={props.handleChange}
                    placeholder="Введите отчество"
                  />
                </Form.Field>
                <Form.Field required>
                  <label className="form-label">ИИН</label>
                  <input
                    required
                    value={props.state.uin}
                    type="text"
                    name="uin"
                    maxLength="12"
                    onChange={props.handleChange}
                    placeholder="Введите ИИН"
                  />
                </Form.Field>
                <Form.Field required>
                  <label className="form-label">Группа</label>
                  <input
                    required
                    value={props.state.group}
                    type="text"
                    name="group"
                    onChange={props.handleChange}
                    placeholder="Введите группу"
                  />
                </Form.Field>
                <Form.Field required>
                  <label className="form-label">Адрес проживания</label>
                  <input
                    required
                    value={props.state.address}
                    type="text"
                    name="address"
                    onChange={props.handleChange}
                    placeholder="Улица, дом, квартира"
                  />
                </Form.Field>
                <Form.Field required>
                  <label className="form-label">Номер телефона</label>
                  <input
                    required
                    pattern="((\+7)|[8])7[0-9]{9}$"
                    value={props.state.phone}
                    type="text"
                    name="phone"
                    onChange={props.handleChange}
                    placeholder="87081231212"
                  />
                </Form.Field>
                <Form.Field required>
                  <label className="form-label">Количество детей в семье</label>
                  <input
                    required
                    value={props.state.children}
                    type="number"
                    name="children"
                    onChange={props.handleChange}
                    placeholder="Введите количество детей в семье"
                  />
                </Form.Field>
                <Form.Field required>
                  <label className="form-label">Номер комнаты</label>
                  <input
                    required
                    value={props.state.room_id}
                    type="number"
                    name="room_id"
                    onChange={props.handleChange}
                    placeholder="Введите номер комнаты"
                  />
                </Form.Field>
                <Form.Field
                  className="gender"
                  onChange={props.handleSelect}
                  value={props.state.gender_id}
                  label="Пол"
                  control="select"
                  required
                >
                  <option disabled />
                  <option value="1">Мужской</option>
                  <option value="2">Женский</option>
                </Form.Field>
                <Form.Field required>
                  <label className="form-label">Дата заселения</label>
                  <input
                    required
                    value={props.state.date_residence}
                    type="date"
                    name="date_residence"
                    onChange={props.handleChange}
                    placeholder="гг-мм-дд"
                  />
                </Form.Field>
                <Button type="submit">Отправить заявление</Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <Dorms />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </FormStyle>
  );
};

export default WithForm(FormComponent);
