import axios from "axios";

const instance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json"
  }
});

class API {
  constructor() {
    this.api = instance;
  }

  // getUserByUIN = UIN => {
  //   return this.api.get(`auth?uin=${UIN}`);
  // };

  // getDormInfo = () => {
  //   return this.api.get(`db`);
  // };
}

export default API;
