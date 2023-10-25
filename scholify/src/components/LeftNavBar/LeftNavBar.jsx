import React from "react";
import { useNavigate } from "react-router-dom";

function LeftNavBar() {
  const navigate = useNavigate();

  const isActive = (path) => {
    return window.location.pathname === path
      ? "bg-blue-300"
      : "bg-blue-100 hover:bg-blue-200";
  };

  return (
    <div className="flex flex-col gap-6 items-center pt-12 bg-slate-100 mx-12 my-4 h-[60vh] rounded-3xl drop-shadow-md font-bold text-lg text-slate-700">
      <div
        onClick={() => navigate("/students")}
        className={`${isActive(
          "/students"
        )} drop-shadow-sm text-center w-[18vh] py-4 rounded-xl cursor-pointer`}
      >
        <span>Students</span>
      </div>
      <div
        onClick={() => navigate("/teachers")}
        className={`${isActive(
          "/teachers"
        )} drop-shadow-sm text-center w-[18vh] py-4 rounded-xl cursor-pointer`}
      >
        <span>Teachers</span>
      </div>
      <div
        onClick={() => navigate("/class")}
        className={`${isActive(
          "/class"
        )} drop-shadow-sm text-center w-[18vh] py-4 rounded-xl cursor-pointer`}
      >
        <span>Class</span>
      </div>
      <div
        onClick={() => navigate("/school")}
        className={`${isActive(
          "/school"
        )} drop-shadow-sm text-center w-[18vh] py-4 rounded-xl cursor-pointer`}
      >
        <span>School</span>
      </div>
    </div>
  );
}

export default LeftNavBar;
