import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotel } from '../../types/hotel';

interface HotelState {
  hotels: Hotel[]
}

const initialState: HotelState = {
    hotels: [],
};

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setHotels: (state, action: PayloadAction<Hotel[]>) =>{
        state.hotels = action.payload;
    },
  },
});

export const { setHotels } = hotelSlice.actions;

export default hotelSlice.reducer;
