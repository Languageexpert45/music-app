import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TOKEN_TAG = 'Tokens';

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online/',
  }),
  tagTypes: [TOKEN_TAG],

  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: 'user/signup/',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: 'user/login/',
        method: 'POST',
        body,
      }),
    }),
    token: builder.mutation({
      query: (body) => ({
        url: 'user/token/',
        method: 'POST',
        body,
      }),
    }),

    refresh: builder.mutation({
      query: (body) => ({
        url: 'user/token/refresh/',
        method: 'POST',
        body,
      }),
    }),
  }),
});


export const {  useSignupMutation, useLoginMutation, useTokenMutation, useRefreshMutation,} = userApi;