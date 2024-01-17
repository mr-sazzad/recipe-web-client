import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypes";

const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createNewFeedback: build.mutation({
      query: (data) => ({
        url: `/feedbacks/create-feedback`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
    getAllFeedbacks: build.query({
      query: (data) => ({
        url: `/feedbacks`,
        method: "GET",
        data,
      }),
      providesTags: [tagTypes.feedback],
    }),
  }),
});

export const { useCreateNewFeedbackMutation, useGetAllFeedbacksQuery } =
  feedbackApi;
