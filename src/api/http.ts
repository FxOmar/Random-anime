import axios from "axios";

const instance = axios.create({
  baseURL: "https://kitsu.io/api/edge/",
  timeout: 1000,
  responseType: "json",
});

instance.interceptors.response.use(null, function (error) {
  return Promise.reject(error);
});

export default instance;
