/**
 * @file This file includes all api requests like GET,POST and etc.
 */

import axios from "axios";
import qs from "qs";

const instance = axios.create({
  baseURL: "https://www.keu.kz:5555/api",
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

class API {
  constructor() {
    this.api = instance;
  }

  /**
   * Posting request to the server
   * @param {} reqValues The Request data that will be sended
   */
  postRequest = reqValues => {
    console.log(reqValues);
    const reqOptions = {
      headers: {
        "content-type": "application/x-www-form-urlencoded" //x-www-form-urlencoded
      }
    };
    return this.api.post("/request", qs.stringify(reqValues), reqOptions);
  };

  /**
   * Posting reports to the serverz
   * @param {} repValues The Report data that will be sended
   */
  postReport = ({ mother, father, ...repValues }) => {
    const repOptions = {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    };

    return this.api.post("/report", qs.stringify(repValues), repOptions);
  };

  /**
   * Get login and password of administrator
   * @param {string} login The login of admin
   * @param {string} password The password of admin
   */
  getAuth = (login, password) => {
    return this.api.get(`auth?login=${login}&password=${password}`);
  };

  /**
   * Get data from dorm database
   */
  getDormDb = () => {
    return this.api.get("/db");
  };

  /**
   * Get all reports
   */
  getReports = () => {
    return this.api.get("/report");
  };

  /**
   * Get all requests
   */
  getRequests = () => {
    return this.api.get("/request");
  };

  /**
   * This function is showing rooms leaning on current floor
   * @param {number} floor_id The id of the floor
   */
  getRooms = floor_id => {
    return this.api.get(`/room?id=${floor_id}`);
  };

  /**
   * This function is for showing 1 request by entered id
   * @param {number} requestId This is the id of the request
   */
  getRequestById = requestId => {
    return this.api.get(`/search/request?id=${requestId}`);
  };

  /**
   * Get autocompleted word document of request
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
    father,
    id
  ) => {
    const reqDocOptions = {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    };
    return this.api.get(
      `/doc/request?name_f=${name_f}&name_l=${name_l}&patronymic=${patronymic}&gender_id=${gender_id}&address=${address}&phone=${phone}&room_id=${room_id}&children=${children}&date_residence=${date_residence}&group=${group}&id=${id}&mother={"name_l":${
        mother.name_l
      },"name_f":${mother.name_f}, "patronymic":${mother.patronymic}, "phone":${
        mother.phone
      }}&father={"name_l":${father.name_l},"name_f":${
        father.name_f
      },"patronymic":${father.patronymic}, "phone":${father.phone}}`,
      reqDocOptions
    );
  };

  /**
   * Changing status of report
   * @param {number} id The id of report
   * @param {number} status_id The status (1,2,3,4)
   */
  putStatus = (id, status_id) => {
    return this.api.put(`/status?id=${id}&status_id=${status_id}`);
  };
}

export default API;
