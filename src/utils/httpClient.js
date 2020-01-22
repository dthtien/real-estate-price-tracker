import axios from "axios";

const httpClient = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  return instance;
};
export default httpClient;
