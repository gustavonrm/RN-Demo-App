import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Hotel } from '../../types/hotel';

export const hotelApi = createApi({
    reducerPath: 'hotelApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://run.mocky.io/v3/b4593f68-9e29-47a8-bb6d-8137a665ee15' }),
    endpoints: (builder) => ({
      getHotels: builder.query<Hotel[], void>({
        query: () => '',
      }),
    }),
});

export const { useGetHotelsQuery } = hotelApi;
