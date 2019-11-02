import axios from "axios";

const httpClient = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_AP_URL
  });

  return instance;
};
export default httpClient;
