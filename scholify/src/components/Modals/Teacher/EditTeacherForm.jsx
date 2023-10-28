import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTeacherAsync } from "../../../features/teachers/teachersSlice";
import { GrUpdate } from "react-icons/gr";

function EditTeacherForm({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(openModal.data);

  const handleUpdateTeacher = () => {
    dispatch(
      updateTeacherAsync({ id: editForm._id, updatedTeacher: editForm })
    );
    setOpenModal({ ...openModal, data: editForm, formType: "TeacherDetail" });
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
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <select
            value={editForm.subject}
            onChange={(e) =>
              setEditForm({ ...editForm, subject: e.target.value })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          >
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="Computer">Computer</option>
          </select>
          <input
            value={editForm.contact}
            onChange={(e) =>
              setEditForm({ ...editForm, contact: Number(e.target.value) })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
        </div>
      </div>
      <div className="flex gap-8 mb-4">
        <div
          onClick={handleUpdateTeacher}
          className="flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <GrUpdate />
          <span>Update</span>
        </div>
      </div>
    </div>
  );
}

export default EditTeacherForm;
