import { configureStore } from '@reduxjs/toolkit';
import hotelsSlice from './slices/hotels.slice';
import { hotelsApi } from './apis/hotels.api';

export const store = configureStore({
  reducer: {
    hotels: hotelsSlice,
    [hotelsApi.reducerPath]: hotelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
