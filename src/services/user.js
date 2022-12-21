import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DATA_TAG = { type: "tracks", id: "LIST" };

export const userApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/",
  }),
  endpoints: (builder) => ({

    signup: builder.mutation({
        query: regData => ({
            url: 'user/signup/',
            method: 'POST',
            body: regData
        })
    }),
    login: builder.mutation({
        query: userData => ({
            url: 'user/login/',
            method: 'POST',
            body: userData
        })
    }),
    token: builder.mutation({
        query: userData => ({
            url: 'user/token/',
            method: 'POST',
            body: userData
        })
    }),

    refresh: builder.mutation({
        query: refreshToken => ({
            url: 'user/token/refresh/',
            method: 'POST',
            body: refreshToken
        })
    }),
  }),
});


export const {  useSignupMutation, useLoginMutation, useTokenMutation, useRefreshMutation,} = userApi;