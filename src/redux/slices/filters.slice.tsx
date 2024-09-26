import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filter } from '../../types/Filter';
import { RootState } from '@reduxjs/toolkit/query';

type FilterState = {
  stars: number | null;
};

const initialState: FilterState = {
  stars: null,
};
// reducers
export const FiltersSlice = createSlice({
  name: 'Filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setFilters } = FiltersSlice.actions;

export default FiltersSlice.reducer;

// selectors
// export const selectFilters = (state: { Filters: Filter[] }): Filter[] | [] => state.Filters;
// export const selectFilter =
//   (id: number) =>
//   (state: { Filters: Filter[] | undefined }): Filter | undefined =>
//     state.Filters?.find((e) => e.id === id);
