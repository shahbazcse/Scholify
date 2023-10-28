import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeacherAsync } from "../../../features/teachers/teachersSlice";
import { BiCheck } from "react-icons/bi";

function AddTeacherForm({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const [teacherForm, setTeacherForm] = useState({
    name: "",
    subject: "",
    contact: "",
  });
  const handleAddTeacher = () => {
    dispatch(addTeacherAsync(teacherForm));
    setOpenModal({ ...openModal, showModal: false });
  };
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex gap-6 text-lg items-center justify-center">
        <div className="flex flex-col gap-6">
          <p>Name:</p>
          <p>Subject:</p>
          <p>Contact:</p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            value={teacherForm.name}
            onChange={(e) =>
              setTeacherForm({ ...teacherForm, name: e.target.value })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <select
            value={teacherForm.subject}
            onChange={(e) =>
              setTeacherForm({ ...teacherForm, subject: e.target.value })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          >
            <option value=""></option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="Computer">Computer</option>
          </select>
          <input
            value={teacherForm.contact}
            onChange={(e) =>
              setTeacherForm({
                ...teacherForm,
                contact: Number(e.target.value),
              })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
        </div>
      </div>
      <div
        onClick={handleAddTeacher}
        className="flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 w-36 py-4 mb-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
      >
        <span>Add</span>
        <BiCheck className="h-6 w-6" />
      </div>
    </div>
  );
}

export default AddTeacherForm;
