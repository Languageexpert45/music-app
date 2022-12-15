import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DATA_TAG = { type: "tracks", id: "LIST" };

export const musicApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/",
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'catalog/track/all/',
    }),

    getSelections: builder.query({
      query:() => `catalog/selection/`,
    }),

    addUserSignUp: builder.mutation({
        query: regData => ({
            url: 'user/signup/',
            method: 'POST',
            body: regData
        })
    }),
    addActiveUser: builder.mutation({
        query: userData => ({
            url: 'user/login/',
            method: 'POST',
            body: userData
        })
    }),
    getUserToken: builder.mutation({
        query: userData => ({
            url: 'user/token/',
            method: 'POST',
            body: userData
        })
    })
  }),
});


export const { useGetAllTracksQuery, useGetSelectionsQuery, useAddUserSignUpMutation, useAddActiveUserMutation, useGetUserTokenMutation} = musicApi;