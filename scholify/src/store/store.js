import { configureStore } from "@reduxjs/toolkit";
import { studentsSlice } from "../features/students/studentsSlice";
import { teachersSlice } from "../features/teachers/teachersSlice";
import { schoolSlice } from "../features/school/schoolSlice";
import { classSlice } from "../features/class/classSlice";

export default configureStore({
  reducer: {
    students: studentsSlice.reducer,
    teachers: teachersSlice.reducer,
    class: classSlice.reducer,
    school: schoolSlice.reducer,
  },
});
