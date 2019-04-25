import React, { useState } from "react";
import {
  Button,
  Grid,
  Form,
  Segment,
  Icon,
  Message,
  Input
} from "semantic-ui-react";
import WithForm from "../HOC/withForm";
import Dorms from "../Dorms";
import FirstDorm from "../Dorms/FirstDorm/";
import SecondDorm from "../Dorms/SecondDorm";
import ThirdDorm from "../Dorms/ThirdDorm";
import { FormStyle } from "./style";

import "./index.css";

const FormComponent = props => {
  const [currentDorm, setCurrentDorm] = useState(null);

  /**
   * This is for setting min date that student can reserve a room
   */
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let currDate = `${year}-0${month}-${day}`;

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

  const renderDorm = () => {
    switch (currentDorm) {
      case 1:
        return (
          <FirstDorm
            dormDb={props.state.dormDb}
            setCurrentDorm={setCurrentDorm}
            currentDorm={currentDorm}
            setSelectedRoom={props.handleParentsChange}
          />
        );
      case 2:
        return (
          <SecondDorm
            dormDb={props.state.dormDb}
            setCurrentDorm={setCurrentDorm}
            currentDorm={currentDorm}
            setSelectedRoom={props.handleParentsChange}
          />
        );
      case 3:
        return (
          <ThirdDorm
            dormDb={props.state.dormDb}
            setCurrentDorm={setCurrentDorm}
            currentDorm={currentDorm}
            setSelectedRoom={props.handleParentsChange}
          />
        );

      default:
        return (
          <Dorms
            dormDb={props.state.dormDb}
            setCurrentDorm={setCurrentDorm}
            currentDorm={currentDorm}
            setSelectedRoom={props.handleParentsChange}
          />
        );
    }
  };

  return (
    <FormStyle>
      <Segment>
        <Form
          success={
            props.state.responseStatus === 200 ||
            props.state.responseStatus === 201
          }
          error={props.state.error}
          loading={props.state.loading}
          size="large"
          onSubmit={props.handleSubmit}
          unstackable
        >
          <Grid relaxed="very" columns="3">
            <Grid.Row centered>
              <Grid.Column stretched width="7">
                <label className="form-label">ФИО</label>
                <Form.Group>
                  <Form.Field width="7" required>
                    <Input
                      required
                      type="text"
                      name="name_l"
                      pattern="[А-ЯЁ][а-яё]{1,39}$"
                      onChange={props.handleChange}
                      defaultValue={props.state.name_l}
                      label={{ icon: "asterisk", color: "black" }}
                      labelPosition="right corner"
                      placeholder="Фамилия"
                    />
                  </Form.Field>
                  <Form.Field width="7" required>
                    <Input
                      required
                      type="text"
                      name="name_f"
                      pattern="[А-ЯЁ][а-яё]{1,39}$"
                      onChange={props.handleChange}
                      defaultValue={props.state.name_f}
                      label={{ icon: "asterisk", color: "black" }}
                      labelPosition="right corner"
                      placeholder="Имя"
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field width="14">
                    <Input
                      required
                      type="text"
                      name="patronymic"
                      pattern="[А-ЯЁ][а-яё]{1,39}$"
                      onChange={props.handleChange}
                      defaultValue={props.state.patronymic}
                      label={{ icon: "asterisk", color: "black" }}
                      labelPosition="right corner"
                      placeholder="Отчество"
                    />
                  </Form.Field>
                </Form.Group>

                <label className="form-label">Личные данные</label>

                <Form.Group>
                  <Form.Field width="10" required>
                    <Input
                      required
                      type="text"
                      name="uin"
                      maxLength="12"
                      onChange={props.handleChange}
                      defaultValue={props.state.uin}
                      placeholder="ИИН"
                    />
                  </Form.Field>
                  <Form.Field
                    width="4"
                    className="gender"
                    name="gender_id"
                    onChange={props.handleSelect}
                    defaultValue={props.state.gender_id}
                    control="select"
                    required
                  >
                    <option value="" disabled>
                      Выберите пол
                    </option>
                    <option value="1">Мужской</option>
                    <option value="2">Женский</option>
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field width="10" required>
                    <Input
                      required
                      type="text"
                      name="address"
                      onChange={props.handleChange}
                      defaultValue={props.state.address}
                      placeholder="Адрес проживания"
                    />
                  </Form.Field>
                  <Form.Field width="4" required>
                    <Input
                      required
                      type="number"
                      name="children"
                      onChange={props.handleChange}
                      defaultValue={props.state.patronymic}
                      placeholder="Кол-во детей в семье"
                    />
                  </Form.Field>
                </Form.Group>

                <label className="form-label">Контакты</label>

                <Form.Group>
                  <Form.Field width="14" required>
                    <Input
                      type="number"
                      name="phone"
                      maxLength="11"
                      onChange={props.handleChange}
                      pattern="((\+7)|[8])7[0-9]{9}$"
                      defaultValue={props.state.phone}
                      icon="phone"
                      label={{ content: "Телефон", color: "black" }}
                      labelPosition="left"
                      placeholder="Начиная с 8"
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field width="14" required>
                    <Input
                      type="email"
                      name="email"
                      onChange={props.handleChange}
                      defaultValue={props.state.email}
                      icon="mail"
                      label={{ content: "E-mail", color: "black" }}
                      labelPosition="left"
                      placeholder="test@test.kz"
                    />
                  </Form.Field>
                </Form.Group>

                <label className="form-label">Другое</label>

                <Form.Group>
                  <Form.Field width="7" required>
                    <Input
                      type="text"
                      name="group"
                      onChange={props.handleChange}
                      defaultValue={props.state.group}
                      icon="group"
                      label={{ content: "Группа", color: "black" }}
                      labelPosition="left"
                      placeholder="ВТ-13С"
                    />
                  </Form.Field>
                  <Form.Field width="7" required>
                    <Input
                      type="date"
                      min={currDate}
                      name="date_residence"
                      onChange={props.handleChange}
                      defaultValue={props.state.date_residence}
                      icon="calendar"
                      label={{ content: "Дата заселения", color: "black" }}
                      labelPosition="left"
                      placeholder="test@test.kz"
                    />
                  </Form.Field>
                </Form.Group>
              </Grid.Column>

              <Grid.Column width="7">
                <label className="form-label">Родители</label>
                <Form.Group inline>
                  <Form.Field
                    width="16"
                    name="parents"
                    onChange={props.handleChange}
                    defaultValue={props.state.parents}
                    control="select"
                  >
                    <option value="" disabled>
                      Нет
                    </option>
                    <option value="both">Оба</option>
                    <option value="mother">Мама</option>
                    <option value="father">Папа</option>
                  </Form.Field>
                </Form.Group>
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
                          type="text"
                        />
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
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                {props.state.responseStatus === 200 ||
                  (props.state.responseStatus === 201 && (
                    <Message success header="Форма отправлена успешно!" />
                  ))}
                {props.state.error && (
                  <Message error header="Неправильно заполнена форма!" />
                )}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns="equal" centered>
              <Grid.Column width="4">progressbar</Grid.Column>
              <Grid.Column width="6" textAlign="center">
                <h2 className="questionnaire">Анкета</h2>
              </Grid.Column>
              <Grid.Column width="4" textAlign="right">
                <Button animated="fade" primary type="submit">
                  <Button.Content visible>Отправить заявку</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>
              <Grid.Column width="12">
                <div
                  onClick={() => window.scrollTo(0, 2000)}
                  className="icon-scroll2"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
      <Grid.Row centered>
        <Grid.Column width="14">
          <Segment>{renderDorm()}</Segment>
        </Grid.Column>
      </Grid.Row>
    </FormStyle>
  );
};

export default WithForm(FormComponent);

/* <Form.Field required>
    <label className="form-label">Номер комнаты</label>
    <input
      readOnly
      required
      value={props.state.room_id}
      type="number"
      name="room_id"
      onChange={props.handleChange}
      placeholder="Введите номер комнаты"
    />
    </Form.Field> */

/* <Form.Field required>
    <label className="form-label">Номер общежития</label>
    <input
      readOnly
      required
      value={props.state.dorm_id || ""}
      type="number"
      name="dorm_id"
      onChange={props.handleChange}
      placeholder="Номер общежития"
    />
    </Form.Field> */
