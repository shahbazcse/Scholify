import React from "react";

function SchoolCard({ label, type, value, bannerImg }) {
  return (
    <div
      className={`bg-slate-100 text-black text-xl h-[29vh] w-[42vh] flex flex-col rounded-xl drop-shadow-md`}
    >
      <div
        style={{ backgroundImage: `url(${bannerImg})` }}
        className="bg-[length:22vh_30vh] bg-center bg-end bg-no-repeat h-full w-full"
      ></div>
      <div className="flex flex-col gap-3 w-full bg-blue-300 px-4 py-4 backdrop-blur-xl rounded-b-xl">
        <h1 className="text-[2rem]">
          {type === "revenue" && "$"}
          {value}{" "}
          {type === "stocks" ? "Units" : type === "sales" ? "Units" : ""}
        </h1>
        <p className="text-slate-700 font-bold">{label}</p>
      </div>
    </div>
  );
}

export default SchoolCard;
