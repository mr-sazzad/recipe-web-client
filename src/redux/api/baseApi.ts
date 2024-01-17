import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "./tagTypes";
import axiosBaseQuery from "@/axios/axiosBaseQuery";

export const getBaseUrl = (): string => {
  return "https://recipe-web-server-xi.vercel.app/api/v1";
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({}),
  //  result cashing
  tagTypes: tagTypesList,
});
