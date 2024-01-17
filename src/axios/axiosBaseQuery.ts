import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosError, AxiosRequestConfig } from "axios";
import { instance as axiosInstance } from "./axiosInstance";

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      contentType?: string;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, contentType }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          "Content-Type": contentType || "application/json",
        },
      });
      return result;
    } catch (axiosError) {
      let err = axiosError as AxiosError & {
        statusCode: number;
        message: string;
        success: boolean;
        errorMessages: Array<any>;
      };
      const error = {
        status: err.response?.status || err.statusCode || 400,
        data: err.response?.data || err.message,
        message: err.response?.data || err.message,
        success: err?.success,
        errorMessages: err?.errorMessages,
      };
      return {
        error: error,
      };
    }
  };

export default axiosBaseQuery;
