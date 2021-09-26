import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }

  getRhBoard() {
    return axios.get(API_URL + "rh", { headers: authHeader() });
  }

  getPpBoard() {
    return axios.get(API_URL + "pp", { headers: authHeader() });
  }

  
  getClientBoard() {
    return axios.get(API_URL + "client", { headers: authHeader() });
  }

}

export default new UserService();
