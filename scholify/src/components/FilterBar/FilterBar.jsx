import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters, updateQuery } from "../../features/class/classSlice";

function FilterBar() {
  const dispatch = useDispatch();

  const { filterClass, filterGender, filterSortBy, filterQuery } = useSelector(
    (state) => state.class
  );

  const [filters, setFilters] = useState({
    filterClass,
    filterGender,
    filterSortBy,
    filterQuery,
  });

  useEffect(() => {
    dispatch(updateFilters(filters));
    dispatch(updateQuery(filters.filterQuery));
  }, [filters]);

  return (
    <div className="flex gap-8 w-[80%]">
      <div className="flex gap-3 items-center border drop-shadow-sm p-2 rounded-md">
        <label>Class</label>
        <select
          value={filters.filterClass}
          onChange={(e) =>
            setFilters({ ...filters, filterClass: e.target.value })
          }
          className="bg-slate-200 p-2 rounded-md"
        >
          <option value="">Select</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>

      <div className="flex gap-3 items-center border drop-shadow-sm p-2 rounded-md">
        <label>Gender</label>
        <div className="flex gap-3 bg-slate-200 p-2 border drop-shadow-sm rounded-md">
          <div className="flex items-center justify-center gap-1.5">
            <input
              checked={filterGender === "Male"}
              onChange={() => setFilters({ ...filters, filterGender: "Male" })}
              type="radio"
            />
            <label>Male</label>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <input
              checked={filterGender === "Female"}
              onChange={() =>
                setFilters({ ...filters, filterGender: "Female" })
              }
              type="radio"
            />
            <label>Female</label>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center border drop-shadow-sm p-2 rounded-md">
        <label>Sort By</label>
        <select
          value={filters.filterSortBy}
          onChange={(e) =>
            setFilters({ ...filters, filterSortBy: e.target.value })
          }
          className="bg-slate-200 p-2 rounded-md"
        >
          <option value="">Select</option>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="attendance">Attendance</option>
          <option value="marks">Marks</option>
        </select>
      </div>
      <div
        onClick={() =>
          setFilters({
            filterClass: "",
            filterGender: "",
            filterSortBy: "",
            filterQuery: "",
          })
        }
        className="my-auto border drop-shadow-sm p-2 rounded-md bg-red-200 hover:bg-red-300 cursor-pointer"
      >
        Clear All
      </div>
    </div>
  );
}

export default FilterBar;
