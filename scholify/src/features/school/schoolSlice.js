import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalStudents: 0,
  averageAttendance: 0,
  averageMarks: 0,
  topStudent: null
};

export const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    updatedSchoolStats: (state, action) => {
      state.totalStudents = action.payload.totalStudents;
      state.averageAttendance = action.payload.averageAttendance;
      state.averageMarks = action.payload.averageMarks;
      state.topStudent = action.payload.topStudent;
    },
    setTopStudent: (state, action) => {
      state.topStudent = action.payload;
    }
  }
});

export const { updatedSchoolStats, setTopStudent } = schoolSlice.actions;

export default schoolSlice.reducer;