import axios from "axios";

const instance = axios.create({
  baseURL: "https://dorm-keu.herokuapp.com/api/",
  headers: {
    "Content-Type": "application/json"
  }
});

class API {
  constructor() {
    this.api = instance;
  }

  getRoom = id => {
    return this.api.get(`room?id=${id}`);
  };
}

export default API;
