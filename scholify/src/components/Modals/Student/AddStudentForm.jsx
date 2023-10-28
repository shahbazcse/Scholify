import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudentAsync } from "../../../features/students/studentsSlice";
import { BiCheck } from "react-icons/bi";

function AddStudentForm({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const [studentForm, setStudentForm] = useState({
    name: "",
    age: 0,
    gender: "",
    grade: "",
    attendance: 0,
    marks: 0,
  });
  const handleUpdateStudent = () => {
    dispatch(addStudentAsync(studentForm));
    setOpenModal({ ...openModal, showModal: false });
  };
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex gap-6 text-lg items-center justify-center">
        <div className="flex flex-col gap-6">
          <p>Name:</p>
          <p>Age:</p>
          <p>Gender:</p>
          <p>Grade:</p>
          <p>Attendance:</p>
          <p>Marks:</p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            value={studentForm.name}
            onChange={(e) =>
              setStudentForm({ ...studentForm, name: e.target.value })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            value={studentForm.age || ""}
            onChange={(e) =>
              setStudentForm({ ...studentForm, age: Number(e.target.value) })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
          <select
            onChange={(e) =>
              setStudentForm({ ...studentForm, gender: e.target.value })
            }
            value={studentForm.gender}
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            onChange={(e) =>
              setStudentForm({ ...studentForm, grade: e.target.value })
            }
            value={studentForm.grade}
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          >
            <option value=""></option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <input
            value={studentForm.attendance || ""}
            onChange={(e) =>
              setStudentForm({
                ...studentForm,
                attendance: Number(e.target.value),
              })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
          <input
            value={studentForm.marks || ""}
            onChange={(e) =>
              setStudentForm({ ...studentForm, marks: Number(e.target.value) })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
        </div>
      </div>
      <div
        onClick={handleUpdateStudent}
        className="flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 w-36 py-4 mb-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
      >
        <span>Add</span>
        <BiCheck className="h-6 w-6" />
      </div>
    </div>
  );
}

export default AddStudentForm;
