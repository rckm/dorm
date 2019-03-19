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

class API {
  constructor() {
    this.api = instance;
  }

  mother = null;
  father = null;

  //* get login and password of administrator
  getAuth = (login, password) => {
    return this.api.get(`auth?login=${login}&password=${password}`);
  };

  //* posting request to the server
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
  postReport = repValues => {
    const repOptions = {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
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

  //* get autocompleted word document of request
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
    group
  ) => {
    return this.api.get(
      `/doc/request?name_f=${name_f}&name_l=${name_l}&patronymic=${patronymic}&gender_id=${gender_id}&address=${address}&phone=${phone}&room_id=${room_id}&children=${children}&date_residence=${date_residence}&group=${group}`
    );
  };
}

export default API;