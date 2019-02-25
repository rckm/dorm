import axios from "axios";
import qs from "querystring";

const instance = axios.create({
  baseURL: "https://dorm-keu.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});

class API {
  constructor() {
    this.api = instance;
  }

  //* get login and password of administrator

  /**
   * @param login
   * @param password
   */
  getAuth = (login, password) => {
    return this.api.get(`auth?login=${login}&password=${password}`);
  };

  postRequest = values => {
    const options = {
      headers: { "content-type": "application/x-www-form-urlencoded" }
    };

    return this.api.post("/request", qs.stringify(values), options);
  };

  //* get rooms of dorm
  /**
   * @param id
   */
  getRoom = id => {
    return this.api.get(`room?id=${id}`);
  };
}

export default API;
