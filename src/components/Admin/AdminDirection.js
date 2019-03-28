import React, { PureComponent } from "react";
import { Button, Segment, Form } from "semantic-ui-react";
import { findName } from "../../utils/util";
import WithForm from "../hoc/withForm";

import { AdminDirectionStyle } from "./style";

class AdminDirection extends PureComponent {
  render() {
    return (
      <AdminDirectionStyle>
        <Segment raised>
          <Form size="big" onSubmit={this.props.handleCurrentFieldSubmitReport}>
            <Form.Group widths="equal">
              <Form.Field required>
                <label className="form-label">Фамилия</label>
                <input
                  required
                  value={this.props.openCurrentField.name_l}
                  type="text"
                  name="name_l"
                  onChange={this.props.handleCurrentFieldChange}
                  placeholder="Введите фамилию"
                />
              </Form.Field>
              <Form.Field required>
                <label className="form-label">Имя</label>
                <input
                  required
                  value={this.props.openCurrentField.name_f}
                  type="text"
                  name="name_f"
                  onChange={this.props.handleCurrentFieldChange}
                  placeholder="Введите имя"
                />
              </Form.Field>
              <Form.Field>
                <label className="form-label">Отчество</label>
                <input
                  value={this.props.openCurrentField.patronymic || ""}
                  type="text"
                  name="patronymic"
                  onChange={this.props.handleCurrentFieldChange}
                  placeholder="Введите отчество"
                />
              </Form.Field>

              <Form.Field required>
                <label className="form-label">ИИН</label>
                <input
                  required
                  value={this.props.openCurrentField.uin}
                  type="text"
                  name="uin"
                  maxLength="12"
                  onChange={this.props.handleCurrentFieldChange}
                  placeholder="Введите ИИН"
                />
              </Form.Field>
              <Form.Field
                className="status"
                name="status_id"
                onChange={this.props.handleCurrentFieldSelect}
                value={this.props.openCurrentField.status_id || "0"}
                label="Статус"
                control="select"
                required
              >
                <>
                  <option disabled value="0">
                    Статус заявки
                  </option>
                  {this.props.state.dormDb.status &&
                    this.props.state.dormDb.status.map(status => {
                      const name = findName(
                        this.props.state.dormDb.names,
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
                  value={this.props.openCurrentField.phone}
                  type="text"
                  name="phone"
                  maxLength="11"
                  onChange={this.props.handleCurrentFieldChange}
                  placeholder="87081231212"
                />
              </Form.Field>
              <Form.Field required>
                <label className="form-label">Количество детей в семье</label>
                <input
                  required
                  value={this.props.openCurrentField.children}
                  type="number"
                  name="children"
                  onChange={this.props.handleCurrentFieldChange}
                  placeholder="Введите количество детей в семье"
                />
              </Form.Field>
              <Form.Field required>
                <label className="form-label">Номер комнаты</label>
                <input
                  required
                  value={this.props.openCurrentField.rooms.id}
                  type="number"
                  name="room_id"
                  onChange={this.props.handleCurrentFieldChange}
                  placeholder="Введите номер комнаты"
                />
              </Form.Field>
              <Form.Field
                className="gender"
                name="gender_id"
                onChange={this.props.handleCurrentFieldChange}
                value={this.props.openCurrentField.gender_id}
                label="Пол"
                control="select"
                required
              >
                <>
                  <option defaultValue="" disabled>
                    Пол
                  </option>
                  {this.props.state.dormDb.genders &&
                    this.props.state.dormDb.genders.map(gender => {
                      const name = findName(
                        this.props.state.dormDb.names,
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
              <Form.Field required>
                <label className="form-label">Дата заселения</label>
                <input
                  required
                  value={this.props.openCurrentField.date_residence}
                  type="date"
                  name="date_residence"
                  onChange={this.props.handleCurrentFieldChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field required>
              <label className="form-label">E-Mail</label>
              <input
                required
                value={this.props.openCurrentField.email}
                type="email"
                name="email"
                onChange={this.props.handleCurrentFieldChange}
                placeholder="E-Mail"
              />
            </Form.Field>
            <Form.Field required>
              <label className="form-label">Адрес проживания</label>
              <input
                required
                value={this.props.openCurrentField.address}
                type="text"
                name="address"
                onChange={this.props.handleCurrentFieldChange}
                placeholder="Улица, дом, квартира"
              />
            </Form.Field>
            <Button primary type="submit">
              Создать направление
            </Button>
          </Form>
        </Segment>
      </AdminDirectionStyle>
    );
  }
}

export default WithForm(AdminDirection);
