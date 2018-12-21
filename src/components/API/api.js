import axios from "axios";

const instance = axios.create({
  baseURL: "https://oqu-dorm.herokuapp.com/api/",
  headers: {
    "Content-Type": "application/json"
  }
});

class API {
  constructor() {
    this.api = instance;
  }

  getUserByUIN = UIN => {
    return this.api.get(`auth?iin=${UIN}`);
  };

  getDormInfo = () => {
    return this.api.get(`db`);
  };
}

export default API;
