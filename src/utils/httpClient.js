import axios from "axios";

const httpClient = () => {
  const instance = axios.create({
    baseURL: "http://localhost:6060/api/v1"
  });

  return instance;
};
export default httpClient;
