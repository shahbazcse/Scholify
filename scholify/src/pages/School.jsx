import React from "react";
import SchoolCard from "../components/SchoolCard/SchoolCard";

function School() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-24 mt-14 mx-20">
      <SchoolCard />
      <SchoolCard />
      <SchoolCard />
      <SchoolCard />
    </div>
  );
}

export default School;
