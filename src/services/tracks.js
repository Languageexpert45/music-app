import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TRACK_TAG = 'Tracks';

export const tracksApi = createApi({
  reducerPath: "tracks",
  tagTypes: [TRACK_TAG],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/",
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'catalog/track/all/',
    }),
     
  }),
});


export const {useGetAllTracksQuery} = tracksApi;