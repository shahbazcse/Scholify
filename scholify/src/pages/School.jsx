import React, { useEffect } from "react";
import SchoolCard from "../components/SchoolCard/SchoolCard";
import { useDispatch, useSelector } from "react-redux";
import {
  updatedSchoolStats,
  setTopStudent,
} from "../features/school/schoolSlice";

import img1 from "../assets/01.svg";
import img2 from "../assets/02.svg";
import img3 from "../assets/03.svg";
import img4 from "../assets/04.svg";

function School() {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.students);
  const { totalStudents, averageAttendance, averageMarks, topStudent } =
    useSelector((state) => state.school);

  useEffect(() => {
    const totalStudents = students.length;
    const averageAttendance =
      students.reduce((sum, { attendance }) => sum + attendance, 0) /
      students.length;
    const averageMarks =
      students.reduce((sum, { marks }) => sum + marks, 0) / students.length;
    const topStudent = students.reduce(
      (prev, curr) => (curr.marks > prev.marks ? curr : prev),
      { marks: 0 }
    );

    dispatch(
      updatedSchoolStats({
        totalStudents,
        averageAttendance,
        averageMarks,
        topStudent,
      })
    );
    dispatch(setTopStudent(topStudent));
  }, [students, dispatch]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-24 mt-14 mx-20">
      <SchoolCard
        label={"Total Students"}
        value={totalStudents}
        bannerImg={img1}
      />
      <SchoolCard
        label={"Average Attendance"}
        value={`${averageAttendance.toFixed(1)} %`}
        bannerImg={img2}
      />
      <SchoolCard
        label={"Average Marks"}
        value={averageMarks.toFixed(1)}
        bannerImg={img3}
      />
      <SchoolCard
        label={"Top Student"}
        value={`${topStudent?.name} - ${topStudent?.marks} Marks`}
        bannerImg={img4}
      />
    </div>
  );
}

export default School;
