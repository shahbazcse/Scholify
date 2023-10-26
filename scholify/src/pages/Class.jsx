import React from "react";
import ClassList from "../components/ListTable/ClassList";
import FilterBar from "../components/FilterBar/FilterBar";

function Class({ setOpenModal }) {
  return (
    <div className="flex flex-col gap-6 mt-4 ml-8">
      <FilterBar />
      <ClassList setOpenModal={setOpenModal} />
    </div>
  );
}

export default Class;
