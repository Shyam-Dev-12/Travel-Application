import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice= createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        credentials: 'include',
    }),
    tagTypes:['User'],   
    
    endpoints: (builder) => ({}),
})

