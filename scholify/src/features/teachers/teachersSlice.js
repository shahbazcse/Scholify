import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://scholifybackend.shahbazahmad12.repl.co/teachers";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async () => {
    const response = await axios.get(API);
    return response.data.teachers;
  }
);

const initialState = {
  teachers: [],
  status: "idle",
  error: null,
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTeachers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTeachers.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers = action.payload;
    },
    [fetchTeachers.rejected]: (state, action) => {
      state.status = "error";
      console.log(action.error.message);
      state.error = action.error.message;
    },
  },
});

export default teachersSlice.reducer;
