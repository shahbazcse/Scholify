import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterClass: "",
  filterGender: "",
  filterSortBy: "",
  filterQuery: "",
};

export const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      state.filterClass = action.payload.filterClass;
      state.filterGender = action.payload.filterGender;
      state.filterSortBy = action.payload.filterSortBy;
    },
    updateQuery: (state, action) => {
      state.filterQuery = action.payload;
    },
  },
});

export const { updateFilters, updateQuery } = classSlice.actions;

export default classSlice.reducer;
