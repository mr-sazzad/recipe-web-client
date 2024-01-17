import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypes";

const recipeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createNewRecipe: build.mutation({
      query: (data) => ({
        url: `/recipes/create-new-recipe`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.recipe],
    }),

    getAllRecipes: build.query({
      query: () => ({
        url: `/recipes`,
        method: "GET",
      }),
      providesTags: [tagTypes.recipe],
    }),

    getSingleRecipe: build.query({
      query: (id) => ({
        url: `/recipes/single-recipe/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.recipe],
    }),

    updateSingleRecipe: build.mutation({
      query: ({ id, data }) => ({
        url: `/recipes/update-single-recipe/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.recipe],
    }),

    deleteSingleRecipe: build.mutation({
      query: (id) => ({
        url: `/recipes/delete-single-recipe/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.recipe],
    }),
  }),
});

export const {
  useCreateNewRecipeMutation,
  useGetAllRecipesQuery,
  useGetSingleRecipeQuery,
  useUpdateSingleRecipeMutation,
  useDeleteSingleRecipeMutation,
} = recipeApi;
