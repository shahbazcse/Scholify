import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterClass: "",
  filterGender: "",
  filterSortBy: "",
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
  },
});

export const { updateFilters } = classSlice.actions;

export default classSlice.reducer;
