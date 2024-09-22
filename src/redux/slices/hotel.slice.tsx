import { createSlice } from '@reduxjs/toolkit';

export interface HotelState {
  value: number
}

const initialState: HotelState = {
  value: 0,
};

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    // TODO
  },
});

// Action creators are generated for each case reducer function
export const {  } = hotelSlice.actions;

export default hotelSlice.reducer;
