import React from "react";
import { BiLogoReact } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} className="cursor-pointer">
      <BiLogoReact className="h-16 w-16 bg-slate-50 rounded-full" />
    </div>
  );
}

export default Logo;
