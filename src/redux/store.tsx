import { configureStore } from '@reduxjs/toolkit';
import hotelSlice from './slices/hotel.slice';

export const store = configureStore({
  reducer: {
    hotel: hotelSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
