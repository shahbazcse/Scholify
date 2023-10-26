import React from "react";
import { useNavigate } from "react-router-dom";
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { FaSchool } from "react-icons/fa";
import { LiaSchoolSolid } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";

function LeftNavBar() {
  const navigate = useNavigate();

  const isActive = (path) => {
    return window.location.pathname === path
      ? "bg-blue-300"
      : "bg-blue-100 hover:bg-blue-200";
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-between py-8 bg-slate-100 mx-16 my-4 h-[70vh] rounded-3xl drop-shadow-md font-bold text-lg text-slate-700">
      <div className="flex items-center justify-center gap-4 text-2xl px-8 py-4 rounded-full bg-slate-200">
        <LiaSchoolSolid className="h-8 w-8" />
        <span>Scholify</span>
      </div>
      <div className="flex flex-col gap-6 mb-20">
        <div
          onClick={() => navigate("/students")}
          className={`${isActive(
            "/students"
          )} flex items-center gap-3 pl-6 drop-shadow-sm text-center w-[18vh] py-4 rounded-xl cursor-pointer`}
        >
          <PiStudent className="h-7 w-7" />
          <span>Students</span>
        </div>
        <div
          onClick={() => navigate("/teachers")}
          className={`${isActive(
            "/teachers"
          )} flex items-center gap-3 pl-6 drop-shadow-sm text-center w-[18vh] py-4 rounded-xl cursor-pointer`}
        >
          <PiChalkboardTeacher className="h-7 w-7" />
          <span>Teachers</span>
        </div>
        <div
          onClick={() => navigate("/class")}
          className={`${isActive(
            "/class"
          )} flex items-center gap-3 pl-6 drop-shadow-sm text-center w-[18vh] py-4 rounded-xl cursor-pointer`}
        >
          <SiGoogleclassroom className="h-7 w-7" />
          <span>Class</span>
        </div>
        <div
          onClick={() => navigate("/school")}
          className={`${isActive(
            "/school"
          )} flex items-center gap-3 pl-6 drop-shadow-sm text-center w-[18vh] py-4 rounded-xl cursor-pointer`}
        >
          <FaSchool className="h-7 w-7" />
          <span>School</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 px-7">
        <a
          href="https://github.com/shahbazcse/Scholify"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="h-7 w-7 cursor-pointer text-blue-300 hover:text-black" />
        </a>
        <a
          href="https://twitter.com/shahbaz_cse"
          target="_blank"
          rel="noreferrer"
        >
          <ImTwitter className="h-7 w-7 cursor-pointer text-blue-300 hover:text-blue-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/shahbazcse/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="h-7 w-7 cursor-pointer text-blue-300 hover:text-blue-600" />
        </a>
      </div>
    </div>
  );
}

export default LeftNavBar;
