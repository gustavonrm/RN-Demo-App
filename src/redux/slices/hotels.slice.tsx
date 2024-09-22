import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotel } from '../../types/hotel';

// typesHotel[]
type HotelState =  { hotels: Hotel[]}
const initialState: HotelState = {hotels: []};

// reducers
export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setHotels: (state, action: PayloadAction<Hotel[]>) =>{
      console.log(state);
      console.log(action.payload);
        state.hotels = action.payload;
    },
  },
});

export const { setHotels } = hotelsSlice.actions;

export default hotelsSlice.reducer;

// selectors
export const selectHotels = (state: HotelState) => state.hotels.hotels;
export const selectHotel = (id: number) => (state: HotelState) => state.hotels?.find((e) => e.id === id);
