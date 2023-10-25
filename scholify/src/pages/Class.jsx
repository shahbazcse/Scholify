import React from "react";
import ClassList from "../components/ListTable/ClassList";
import FilterBar from "../components/FilterBar/FilterBar";

function Class() {
  return (
    <div className="flex flex-col gap-6 mt-4 ml-16">
      <FilterBar />
      <ClassList />
    </div>
  );
}

export default Class;
