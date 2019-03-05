import React from "react";
import { Button, Segment, Form, Icon } from "semantic-ui-react";
import WithForm from "../hoc/withForm";
import { findName } from "../../utils/util";
import { AdminDirectionStyle } from "./style";

const AdminDirection = props => {
  return (
    <AdminDirectionStyle>
      <Segment raised>
        <Form size="big" onSubmit={props.handleSubmitReport}>
          <Form.Group widths="equal">
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
            <Form.Field
              className="status"
              name="status_id"
              onChange={props.handleSelect}
              value={props.state.status_id}
              label="Статус"
              control="select"
              required
            >
              <>
                <option disabled />
                {props.state.dormDb.status &&
                  props.state.dormDb.status.map(status => {
                    const name = findName(
                      props.state.dormDb.names,
                      status.name_id
                    );
                    return (
                      <option key={status.id} value={status.id}>
                        {name.name_ru}
                      </option>
                    );
                  })}
              </>
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field required>
              <label className="form-label">Номер телефона</label>
              <input
                required
                pattern="((\+7)|[8])7[0-9]{9}$"
                value={props.state.phone}
                type="text"
                name="phone"
                maxLength="11"
                onChange={props.handleChange}
                placeholder="87081231212"
              />
            </Form.Field>
            {/* <Form.Field required>
              <label className="form-label">Количество детей в семье</label>
              <input
                required
                value={props.state.children}
                type="number"
                name="children"
                onChange={props.handleChange}
                placeholder="Введите количество детей в семье"
              />
            </Form.Field> */}
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
              name="gender_id"
              onChange={props.handleSelect}
              value={props.state.gender_id}
              label="Пол"
              control="select"
              required
            >
              <>
                <option disabled />
                {props.state.dormDb.genders &&
                  props.state.dormDb.genders.map(gender => {
                    const name = findName(
                      props.state.dormDb.names,
                      gender.name_id
                    );
                    return (
                      <option key={gender.id} value={gender.id}>
                        {name.name_ru}
                      </option>
                    );
                  })}
              </>
            </Form.Field>
          </Form.Group>
          <Form.Field required>
            <label className="form-label">Дата заселения</label>
            <input
              required
              value={props.state.date_residence}
              type="date"
              name="date_residence"
              onChange={props.handleChange}
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
          <Button animated="fade" primary type="submit">
            <Button.Content visible>Создать направление</Button.Content>
            <Button.Content hidden>
              <Icon name="upload" />
            </Button.Content>
          </Button>
          <Button
            floated="right"
            animated="fade"
            secondary
            onClick={props.handleLogout}
          >
            <Button.Content visible>Выйти</Button.Content>
            <Button.Content hidden>
              <Icon name="sign-out" />
            </Button.Content>
          </Button>
        </Form>
      </Segment>
    </AdminDirectionStyle>
  );
};

export default WithForm(AdminDirection);
