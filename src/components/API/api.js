import axios from "axios";
import qs from "querystring";

const instance = axios.create({
  baseURL: "https://dorm-keu.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem("sesstionUser");

  if (!token) return config;
  const newConfig = { ...config };
  newConfig.headers.Token = token;
  return newConfig;
});

class API {
  constructor() {
    this.api = instance;
  }

  //* get login and password of administrator
  getAuth = (login, password) => {
    return this.api.get(`auth?login=${login}&password=${password}`);
  };

  //* posting request to the server
  postRequest = reqValues => {
    const reqOptions = {
      headers: { "content-type": "application/x-www-form-urlencoded" }
    };

    return this.api.post("/request", qs.stringify(reqValues), reqOptions);
  };

  //* posting reports to the server
  postReport = repValues => {
    const repOptions = {
      headers: { "content-type": "application/x-www-form-urlencoded" }
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

  //* get rooms of dorm
  getRoom = id => {
    return this.api.get(`room?id=${id}`);
  };
}

export default API;
