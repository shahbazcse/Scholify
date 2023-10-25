import React from "react";
import SchoolCard from "../components/SchoolCard/SchoolCard";

function School() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-16 mt-14 mx-24">
      <SchoolCard />
      <SchoolCard />
      <SchoolCard />
      <SchoolCard />
    </div>
  );
}

export default School;
