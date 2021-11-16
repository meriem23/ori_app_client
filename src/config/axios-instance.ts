import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    // "http://localhost:5000/api/",
    // process.env.NODE_ENV === "development"
    //   ? process.env.REACT_APP_API_URL
    //   : process.env.REACT_APP_API_URL_PROD,
    process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response && error.response.status) {
      switch (error.response.status) {
        case 401:
          break;
        default:
          break;
      }
    }
    // do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
