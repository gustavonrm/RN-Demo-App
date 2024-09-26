import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotel } from '../../types/hotel';
import { RootState } from '@reduxjs/toolkit/query';

type HotelState = Hotel[];
const initialState: HotelState = [];
// reducers
export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setHotels: (state, action: PayloadAction<Hotel[]>) => {
      return action.payload;
    },
  },
});

export const { setHotels } = hotelsSlice.actions;

export default hotelsSlice.reducer;

// selectors
export const selectHotels = (state: { hotels: Hotel[] }): Hotel[] | [] => state.hotels;
export const selectHotel =
  (id: number) =>
  (state: { hotels: Hotel[] | undefined }): Hotel | undefined =>
    state.hotels?.find((e) => e.id === id);
