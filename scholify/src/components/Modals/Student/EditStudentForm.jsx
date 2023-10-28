import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStudentAsync } from "../../../features/students/studentsSlice";
import { GrUpdate } from "react-icons/gr";

function EditStudentForm({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(openModal.data);
  const handleUpdateStudent = () => {
    dispatch(
      updateStudentAsync({ id: editForm._id, updatedStudent: editForm })
    );
    setOpenModal({ ...openModal, data: editForm, formType: "StudentDetail" });
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
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            value={editForm.age}
            onChange={(e) =>
              setEditForm({ ...editForm, age: Number(e.target.value) })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
          <select
            onChange={(e) =>
              setEditForm({ ...editForm, gender: e.target.value })
            }
            value={editForm.gender}
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            onChange={(e) =>
              setEditForm({ ...editForm, grade: e.target.value })
            }
            value={editForm.grade}
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <input
            value={editForm.attendance}
            onChange={(e) =>
              setEditForm({ ...editForm, attendance: Number(e.target.value) })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
          <input
            value={editForm.marks}
            onChange={(e) =>
              setEditForm({ ...editForm, marks: Number(e.target.value) })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
        </div>
      </div>
      <div className="flex gap-8 mb-4">
        <div
          onClick={handleUpdateStudent}
          className="flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <GrUpdate />
          <span>Update</span>
        </div>
      </div>
    </div>
  );
}

export default EditStudentForm;
