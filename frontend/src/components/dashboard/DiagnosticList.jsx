import React from "react";

function DiagnosticList({ diagnosticList = [] }) {
  return (
    <div className="bg-white rounded-[16px] h-64 p-4 flex flex-col shadow-sm">
      {/* Title */}
      <h3
        className="text-[#072635] text-[24px] font-extrabold mb-5 shrink-0"
        style={{ fontFamily: "Manrope" }}
      >
        Diagnostic List
      </h3>

      {/* Table Container */}
      <div className="flex-1 overflow-y-auto custom-scrollbar -mr-2 pr-1 max-h-[220px]">
        {diagnosticList.length === 0 ? (
          <div className="text-gray-400 text-center py-8 text-[14px]">
            No diagnostic history found
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F6F7F8] rounded-[24px]">
                <th
                  className="p-4 text-[#072635] text-[14px] font-bold rounded-l-[12px]"
                  style={{ fontFamily: "Manrope" }}
                >
                  Problem/Diagnosis
                </th>
                <th
                  className="p-4 text-[#072635] text-[14px] font-bold"
                  style={{ fontFamily: "Manrope" }}
                >
                  Description
                </th>
                <th
                  className="p-4 text-[#072635] text-[14px] font-bold rounded-r-[12px]"
                  style={{ fontFamily: "Manrope" }}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {diagnosticList.map((item, idx) => (
                <tr key={idx} className="border-b border-[#F6F7F8] last:border-none">
                  <td
                    className="p-4 text-[#072635] text-[14px] font-medium"
                    style={{ fontFamily: "Manrope" }}
                  >
                    {item.name}
                  </td>
                  <td
                    className="p-4 text-[#072635] text-[14px] font-normal text-gray-600"
                    style={{ fontFamily: "Manrope" }}
                  >
                    {item.description}
                  </td>
                  <td
                    className="p-4 text-[#072635] text-[14px] font-normal"
                    style={{ fontFamily: "Manrope" }}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default DiagnosticList;
