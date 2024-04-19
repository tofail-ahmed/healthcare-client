import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpeciality: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multipart/Form-data",
        data,
      }),
      invalidatesTags:[tagTypes.specialities]
    }),
    getAllSpecialities: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      providesTags:[tagTypes.specialities]
    }),
  }),
  
});

export const { useCreateSpecialityMutation,useGetAllSpecialitiesQuery } = specialtiesApi;
