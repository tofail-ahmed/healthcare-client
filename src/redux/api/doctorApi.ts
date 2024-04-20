import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
    }),
  }),
});
export const { useCreateDoctorMutation } = doctorApi;
