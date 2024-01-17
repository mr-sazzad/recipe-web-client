import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypes";

const commentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createNewComment: build.mutation({
      query: (data) => ({
        url: `/comments/create-new-comment`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.comment],
    }),
    getAllComments: build.query({
      query: (id) => ({
        url: `/comments/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.comment],
    }),
  }),
});

export const { useCreateNewCommentMutation, useGetAllCommentsQuery } =
  commentApi;
