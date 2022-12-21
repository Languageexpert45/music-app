import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DATA_TAG = { type: "tracks", id: "LIST" };

export const selectionsApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/",
  }),
  endpoints: (builder) => ({

    getSelections: builder.query({
      query:(id) => `catalog/selection/`,
    }),
  }),
});


export const {useGetSelectionsQuery} = selectionsApi;