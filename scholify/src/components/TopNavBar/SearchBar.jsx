import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateQuery } from "../../features/class/classSlice";

function SearchBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { filterQuery } = useSelector((state) => state.class);

  return (
    <div className="flex items-center justify-center bg-slate-50 border-slate-200 border-2 drop-shadow-sm text-xl rounded-md">
      <AiOutlineSearch className="h-8 w-8 text-slate-400 m-2" />
      <input
        value={filterQuery}
        onChange={(e) => {
          navigate("/class");
          dispatch(updateQuery(e.target.value));
        }}
        className="p-2 outline-none border-l"
        placeholder="Search Student"
        type="text"
      />
    </div>
  );
}

export default SearchBar;
