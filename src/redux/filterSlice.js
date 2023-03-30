import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onChange(state, action) {
      return action.payload;
    },
  },
});

export const { onChange } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const getFilter = state => state.filter;
