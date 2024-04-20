import { IDoctor } from "@/types/doctor";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { IMeta } from "@/types/common";
const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
    getAllDoctors: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDoctor[], meta: IMeta) => {
        return {
          doctors: response,
          meta: meta,
        };
      },
      providesTags: [tagTypes.doctor],
    }),
     deleteDoctor: build.mutation({
      query: (id) => ({
        url: `/doctor/soft/${id}`,
        method: "DELETE",
        
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
  }),
});
export const { useCreateDoctorMutation,useGetAllDoctorsQuery,useDeleteDoctorMutation } = doctorApi;
