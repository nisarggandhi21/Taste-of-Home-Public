import axios from "axios";

const URL = import.meta.env.VITE_BASEURL;
const newRequest = axios.create({
  baseURL: URL,
  withCredentials: true,
});

newRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default newRequest;
