import axios from "axios";
import { toQueryString } from "./common.utils";
import { setAccessToken } from "@/auth/auth.slice";
import { setIsExpired } from "@/auth/login/login.slice";
// config
import { HOST_API } from "../../config";
import { PATH_AUTH } from "../routes/path";
import { store } from "../redux/store";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API,
  paramsSerializer: (param) => toQueryString(param),
});
const axiosInstance2 = axios.create({
  baseURL: HOST_API,
});
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;
    const refreshToken = store.getState()?.authLogin.refreshToken;
    if (response?.status === 4001) {
      axiosInstance2
        .post<unknown, { accessToken: string }>("/account/refresh-token", {
          refreshToken: refreshToken,
        })
        .then((res: any) => {
          store.dispatch(setAccessToken("Bearer " + res?.accessToken));
        })
        .catch(() => {
          store.dispatch(setIsExpired(true));
          window.location.href = PATH_AUTH.login;
        });
    }
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.request.use(async (config) => {
  const token = store.getState()?.authLogin.accessToken;
  if (token) {
    try {
      // @ts-ignore
      config.headers = {
        ...config.headers,
        authorization: token,
      };
    } catch (e) {
      console.log(e);
    }
  }
  try {
    // @ts-ignore
    config.headers = {
      ...config.headers,
    };
  } catch (err) {
    console.log(err);
  }
  return {
    ...config,
  };
});

export default axiosInstance;
