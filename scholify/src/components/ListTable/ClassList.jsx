import React from "react";

function ClassList() {
  return (
    <div className="h-[72vh] overflow-auto drop-shadow-md">
      <table className="w-[80%] text-left">
        <thead className="sticky top-0 bg-blue-300">
          <tr>
            <th className="px-4 py-2 border-r border-b w-[8vh]">#</th>
            <th className="px-4 py-2 border-r border-b">Field 1</th>
            <th className="px-4 py-2 border-r border-b">Field 2</th>
            <th className="px-4 py-2 border-b">Filed 3</th>
          </tr>
        </thead>
        <tbody className="bg-[#FFFFFF]">
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
          ].map(({ field1, field2, field3 }, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-r border-b w-[8vh]">
                #{index + 1}
              </td>
              <td className="px-4 py-2 border-r border-b font-bold">
                {field1}
              </td>
              <td className="px-4 py-2 border-r border-b">{field2}</td>
              <td className="px-4 py-2 border-b">{field3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassList;
