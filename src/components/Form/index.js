import React, { useState } from "react";
import { Button, Grid, Form, Segment, Icon, Message } from "semantic-ui-react";
import WithForm from "../hoc/withForm";
import Dorms from "../Dorms";
import FirstDorm from "../Dorms/FirstDorm";
import { FormStyle } from "./style";

const FormComponent = props => {
  const [currentDorm, setCurrentDorm] = useState(null);
  
  function handleParentsChange(e) {
    const { value } = e.target;
    const [parentType, name] = e.target.name.split(".");
    props.handleParentsChange(state => ({
      ...state,
      [parentType]: {
        ...state[parentType],
        [name]: value
      }
    }));
  }
  return (
    <FormStyle>
      <Grid>
        <Grid.Row centered>
          <Grid.Column computer={14} mobile={10}>
            <h1 className="title">Dorm</h1>
            <Segment raised>
              <Form success={props.state.responseStatus === 200 || props.state.responseStatus === 201} error={props.state.responseStatus === 400 || props.state.responseStatus === 401} size="large" onSubmit={props.handleSubmit}>
                <Form.Group widths="equal">
                  <Form.Field required>
                    <label className="form-label">Фамилия</label>
                    <input
                      pattern="[А-ЯЁ][а-яё]{1,39}$"
                      variant="outlined"
                      required
                      value={props.state.name_l}
                      type="text"
                      name="name_l"
                      onChange={props.handleChange}
                      placeholder="Заглавная буква,кириллица"
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label className="form-label">Имя</label>
                    <input
                      pattern="[А-ЯЁ][а-яё]{1,39}$"
                      required
                      value={props.state.name_f}
                      type="text"
                      name="name_f"
                      onChange={props.handleChange}
                      placeholder="Заглавная буква,кириллица"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label className="form-label">Отчество</label>
                    <input
                      pattern="[А-ЯЁ][а-яё]{1,39}$"
                      value={props.state.patronymic}
                      type="text"
                      name="patronymic"
                      onChange={props.handleChange}
                      placeholder="Заглавная буква,кириллица"
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
                      placeholder="Только цифры"
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label className="form-label">Группа</label>
                    <input
                      pattern="[\-А-ЯЁ0-9 ]{2,12}$"
                      required
                      value={props.state.group}
                      type="text"
                      name="group"
                      onChange={props.handleChange}
                      placeholder="С заглавной буквы, кириллица"
                    />
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
                      placeholder="Начиная с 8"
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label className="form-label">
                      Количество детей в семье
                    </label>
                    <input
                      required
                      value={props.state.children}
                      type="number"
                      name="children"
                      onChange={props.handleChange}
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
                    name="gender_id"
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
                    />
                  </Form.Field>
                </Form.Group>
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
                <Form.Field
                  name="parents"
                  onChange={props.handleChange}
                  value={props.state.parents}
                  label="Родители"
                  control="select"
                >
                  <option value="">Нет</option>
                  <option value="both">Оба</option>
                  <option value="mother">Мама</option>
                  <option value="father">Папа</option>
                </Form.Field>
                <Form.Group>
                  {(props.state.parents === "mother" ||
                    props.state.parents === "both") && (
                    <React.Fragment>
                      <Form.Field>
                        <label>Фамилия</label>
                        <input
                          name="mother.name_l"
                          value={props.state.mother.name_l || ""}
                          onChange={handleParentsChange}
                          placeholder="Фамилия матери"
                          type="text"
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Имя</label>
                        <input
                          name="mother.name_f"
                          value={props.state.mother.name_f || ""}
                          onChange={handleParentsChange}
                          placeholder="Имя матери"
                          type="text"
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Отчество</label>
                        <input
                          name="mother.patronymic"
                          value={props.state.mother.patronymic || ""}
                          onChange={handleParentsChange}
                          placeholder="Отчество матери"
                          type="text"
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Номер телефона</label>
                        <input
                          name="mother.phone"
                          value={props.state.mother.phone || ""}
                          onChange={handleParentsChange}
                          placeholder="Номер телефона матери"
                          type="text"
                        />
                      </Form.Field>
                    </React.Fragment>
                  )}
                </Form.Group>
                <Form.Group>
                  {(props.state.parents === "father" ||
                    props.state.parents === "both") && (
                    <React.Fragment>
                      <Form.Field>
                        <label>Фамилия</label>
                        <input 
                        name="father.name_l"
                        value={props.state.father.name_l || ""}
                        onChange={handleParentsChange}
                        placeholder="Фамилия отца"
                        type="text" />
                      </Form.Field>
                      <Form.Field>
                        <label>Имя</label>
                        <input 
                          name="father.name_f"
                          value={props.state.father.name_f || ""}
                          onChange={handleParentsChange}
                          placeholder="Имя отца"
                          type="text"
                          />
                      </Form.Field>
                      <Form.Field>
                        <label>Отчество</label>
                        <input 
                          name="father.patronymic"
                          value={props.state.father.patronymic || ""}
                          onChange={handleParentsChange}
                          placeholder="Отчество отца"
                          type="text"
                          />
                      </Form.Field>
                      <Form.Field>
                        <label>Номер телефона</label>
                        <input 
                          name="father.phone"
                          value={props.state.father.phone || ""}
                          onChange={handleParentsChange}
                          placeholder="Номер телефона отца"
                          type="text"
                          />
                      </Form.Field>
                    </React.Fragment>
                  )}
                </Form.Group>
                <Message success header="Форма отправлена успешно"/>
                <Button animated="fade" primary type="submit">
                  <Button.Content visible>Отправить заявление</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {currentDorm ? (
              <FirstDorm setCurrentDorm={setCurrentDorm} />
            ) : (
              <Dorms setCurrentDorm={setCurrentDorm} />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </FormStyle>
  );
};

export default WithForm(FormComponent);