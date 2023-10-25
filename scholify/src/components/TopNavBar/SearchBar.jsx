import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className="flex items-center justify-center bg-slate-50 border-slate-200 border-2 drop-shadow-sm text-xl rounded-md">
      <AiOutlineSearch className="h-8 w-8 text-slate-400 m-2" />
      <input
        className="p-2 outline-none border-l"
        placeholder="Search"
        type="text"
      />
    </div>
  );
}

export default SearchBar;
