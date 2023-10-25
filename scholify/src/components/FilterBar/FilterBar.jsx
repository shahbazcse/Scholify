import React from "react";

function FilterBar() {
  return (
    <div className="flex gap-8 w-[80%]">
      <div className="flex gap-3 items-center border drop-shadow-sm p-2 rounded-md">
        <label>Class</label>
        <select className="bg-slate-200 p-2 rounded-md">
          <option value="">Select</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      </div>

      <div className="flex gap-3 items-center border drop-shadow-sm p-2 rounded-md">
        <label>Gender</label>
        <div className="flex gap-3 bg-slate-200 p-2 border drop-shadow-sm rounded-md">
          <div className="flex items-center justify-center gap-1.5">
            <input type="radio" />
            <label>Male</label>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <input type="radio" />
            <label>Female</label>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center border drop-shadow-sm p-2 rounded-md">
        <label>Sort By</label>
        <select className="bg-slate-200 p-2 rounded-md">
          <option value="">Select</option>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="attendance">Attendance</option>
          <option value="marks">Marks</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
