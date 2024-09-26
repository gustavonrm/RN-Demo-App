import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterState = {
  stars?: null | number;
};

const initialState: FilterState = {};

// reducers
export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction) => {
      return action.payload;
    },
  },
});

export const { setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;

// selectors
export const selectFilters = (state: { filters: object }): object => state.filters;
