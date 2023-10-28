import React from "react";
import { useDispatch } from "react-redux";
import { deleteStudentAsync } from "../../../features/students/studentsSlice";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function StudentDetail({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const { _id, name, age, gender, grade, attendance, marks } = openModal.data;

  const handleDeleteStudent = () => {
    dispatch(deleteStudentAsync(_id));
    setOpenModal({ ...openModal, showModal: false });
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex gap-8 text-xl">
        <div className="flex flex-col gap-2">
          <p>Name:</p>
          <p>Age:</p>
          <p>Gender:</p>
          <p>Grade:</p>
          <p>Attendance:</p>
          <p>Marks:</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>{name}</p>
          <p>{age}</p>
          <p>{gender}</p>
          <p>{grade}</p>
          <p>{attendance}</p>
          <p>{marks}</p>
        </div>
      </div>
      <div className="flex gap-8 mb-4">
        <div
          onClick={() =>
            setOpenModal({
              ...openModal,
              formType: "EditStudent",
            })
          }
          className="flex items-center justify-center gap-2 bg-blue-200 hover:bg-blue-300 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <AiOutlineEdit className="h-5 w-5" />
          <span>Edit</span>
        </div>
        <div
          onClick={handleDeleteStudent}
          className="flex items-center justify-center gap-2 bg-red-300 hover:bg-red-400 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <RiDeleteBin6Line />
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
}

export default StudentDetail;
