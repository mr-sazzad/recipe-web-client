import { IResponse } from "@/types";
import axios from "axios";

export const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["accept"] = "application/json";
instance.defaults.timeout = 50000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor

instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    // Do something with response data
    const responseObject: IResponse = {
      data: response?.data?.data,
    };
    return responseObject;
  },

  function (error) {
    if (error?.response?.status === 403) {
    } else {
      let responseObject: any = {
        statusCode: error?.response?.status || 500,
        message: "something went wrong",
        success: false,
        errorMessages: [],
      };

      if (error?.response?.data) {
        responseObject.message =
          error?.response?.data?.message || responseObject.message;
        responseObject.success =
          error?.response?.data?.success || responseObject.success;

        if (error?.response?.data?.errorMessage) {
          responseObject.errorMessages.push(
            error?.response?.data?.errorMessage
          );
        }
      }
      return Promise.reject(responseObject);
    }
    // return Promise.reject(error);
  }
);
