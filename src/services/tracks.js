import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DATA_TAG = { type: "tracks", id: "LIST" };

export const tracksApi = createApi({
  reducerPath: "tracks",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/",
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'catalog/track/all/',
    }),

    addTrackToFavorite: builder.mutation({
        query: trackId => ({
            url: `catalog/track/${trackId}/favorite`,
            method: 'POST',
            body: trackId,
        })
    }),
  }),
});


export const {useAddTrackToFavoriteMutation, useGetAllTracksQuery} = tracksApi;