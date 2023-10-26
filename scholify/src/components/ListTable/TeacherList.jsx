import React from "react";
import { useSelector } from "react-redux";

function TeacherList({ setOpenModal }) {
  const { teachers } = useSelector((state) => state.teachers);

  return (
    <div className="h-[80vh] overflow-auto drop-shadow-md">
      <table className="w-[80%] text-left">
        <thead className="sticky top-0 bg-blue-300">
          <tr>
            <th className="px-4 py-2 border-r border-b w-[8vh]">#</th>
            <th className="px-4 py-2 border-r border-b">Name</th>
            <th className="px-4 py-2 border-r border-b">Subject</th>
            <th className="px-4 py-2 border-b">Contact</th>
          </tr>
        </thead>
        <tbody className="bg-[#FFFFFF]">
          {teachers.map(({ name, contact, subject }, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-r border-b w-[8vh]">
                #{index + 1}
              </td>
              <td className="px-4 py-2 border-r border-b font-bold">
                <span
                  onClick={() => setOpenModal(true)}
                  className="underline hover:cursor-pointer hover:text-blue-600"
                >
                  {name}
                </span>
              </td>
              <td className="px-4 py-2 border-r border-b">{subject}</td>
              <td className="px-4 py-2 border-b">{contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherList;
