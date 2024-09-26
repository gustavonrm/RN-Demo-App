import { configureStore, combineReducers } from '@reduxjs/toolkit';
import hotelsSlice from './slices/hotels.slice';
import { hotelsApi } from './apis/hotels.api';
import filtersSlice from './slices/filters.slice';

const rootReducer = combineReducers({
  hotels: hotelsSlice,
  filters: filtersSlice,
  [hotelsApi.reducerPath]: hotelsApi.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hotelsApi.middleware),
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
