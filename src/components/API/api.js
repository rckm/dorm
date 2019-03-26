/**
 * @file This file includes all api requests like GET,POST and etc.
 */

import axios from "axios";
import qs from "querystring";

const instance = axios.create({
  baseURL: "https://dorm-keu.herokuapp.com/api",
  headers: {
    "content-type": "application/x-www-form-urlencoded"
  }
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem("sessionUser");

  if (!token) return config;
  const newConfig = { ...config };
  newConfig.headers.Token = token;
  return newConfig;
});

/**
 * @this {API}
 */
class API {
  constructor() {
    this.api = instance;
  }

  //* get login and password of administrator
  /**
   * @param {string} login The login of admin
   * @param {string} password The password of admin
   */
  getAuth = (login, password) => {
    return this.api.get(`auth?login=${login}&password=${password}`);
  };

  //* posting request to the server
  /**
   * @param {} reqValues The Request data that will be sended
   */
  postRequest = reqValues => {
    const reqOptions = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        mother:
          '{ "name_f":"' +
          encodeURI(reqValues.mother.name_f) +
          '","name_l":"' +
          encodeURI(reqValues.mother.name_l) +
          '",  "patronymic":"' +
          encodeURI(reqValues.mother.patronymic) +
          '", "phone":"' +
          encodeURI(reqValues.mother.phone) +
          '"}',
        father:
          '{ "name_f":"' +
          encodeURI(reqValues.father.name_f) +
          '","name_l":"' +
          encodeURI(reqValues.father.name_l) +
          '",  "patronymic":"' +
          encodeURI(reqValues.father.patronymic) +
          '", "phone":"' +
          encodeURI(reqValues.father.phone) +
          '"}'
      }
    };
    return this.api.post("/request", qs.stringify(reqValues), reqOptions);
  };

  //* posting reports to the server
  /**
   * @param {} repValues The Report data that will be sended
   */
  postReport = ({ mother, father, ...repValues }) => {
    console.log(mother, father);
    const repOptions = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        mother:
          '{ "name_f":"' +
          encodeURI(mother.name_f || "") +
          '","name_l":"' +
          encodeURI(mother.name_l || "") +
          '",  "patronymic":"' +
          encodeURI(mother.patronymic || "") +
          '", "phone":"' +
          encodeURI(mother.phone || "") +
          '"}',
        father:
          '{ "name_f":"' +
          encodeURI(father.name_f || "") +
          '","name_l":"' +
          encodeURI(father.name_l || "") +
          '",  "patronymic":"' +
          encodeURI(father.patronymic || "") +
          '", "phone":"' +
          encodeURI(father.phone || "") +
          '"}'
      }
    };

    return this.api.post("/report", qs.stringify(repValues), repOptions);
  };

  //* get dorm database
  getDormDb = () => {
    return this.api.get("/db");
  };

  //* get all reports
  getReports = () => {
    return this.api.get("/report");
  };

  //*get all request
  getRequests = () => {
    return this.api.get("/request");
  };

  //* get rooms by floor id
  getRooms = floor_id => {
    return this.api.get(`/room?id=${floor_id}`);
  };

  //* get autocompleted word document of request
  /**
   * @param {string} name_f Firstname of student
   * @param {string} name_l Lastname of student
   * @param {string} patronymic Patronymic of student
   * @param {string} gender_id Gender
   * @param {string} address Address of living of student
   * @param {string} phone Phone of student
   * @param {number} room_id Which room he selected
   * @param {number} children How many childrens he has in family
   * @param {date} date_residence On which date he reserved a room
   * @param {string} group In which group he joined
   */
  getRequestDocument = (
    name_f,
    name_l,
    patronymic,
    gender_id,
    address,
    phone,
    room_id,
    children,
    date_residence,
    group,
    mother,
    father
  ) => {
    const reqDocOptions = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        mother:
          '{ "name_f":"' +
          encodeURI(mother.name_f || "") +
          '","name_l":"' +
          encodeURI(mother.name_l || "") +
          '",  "patronymic":"' +
          encodeURI(mother.patronymic || "") +
          '", "phone":"' +
          encodeURI(mother.phone || "") +
          '"}',
        // `'{ "name_f": "${encodeURI(reqValues.mother.name_f)}", "name_l": "${encodeURI(reqValues.mother.name_l)}", "patronymic": "${encodeURI(reqValues.mother.patronymic)}", "phone": "${encodeURI(reqValues.mother.phone)}"'`
        father:
          '{ "name_f":"' +
          encodeURI(father.name_f || "") +
          '","name_l":"' +
          encodeURI(father.name_l || "") +
          '",  "patronymic":"' +
          encodeURI(father.patronymic || "") +
          '", "phone":"' +
          encodeURI(father.phone || "") +
          '"}'
      }
    };
    return this.api.get(
      `/doc/request?name_f=${name_f}&name_l=${name_l}&patronymic=${patronymic}&gender_id=${gender_id}&address=${address}&phone=${phone}&room_id=${room_id}&children=${children}&date_residence=${date_residence}&group=${group}`,
      reqDocOptions
    );
  };
}

export default API;
