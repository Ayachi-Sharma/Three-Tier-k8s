import React from "react";

function LabResults({ labResults = [] }) {
  return (
    <div className="bg-white rounded-[16px] h-56 p-4 flex flex-col shadow-sm overflow-y-auto">
      {/* Header */}
      <h3
        className="text-[#072635] text-[24px] font-extrabold mb-4 shrink-0"
        style={{ fontFamily: "Manrope" }}
      >
        Lab Results
      </h3>

      {/* Lab List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 -mr-2 max-h-[220px]">
        {labResults.length === 0 ? (
          <div className="text-gray-400 text-center py-6 text-[14px]">
            No lab results available
          </div>
        ) : (
          <div className="flex flex-col">
            {labResults.map((result, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 hover:bg-[#F6F7F8] rounded-[4px] group transition-all duration-200"
              >
                <span
                  className="text-[#072635] text-[14px] font-medium leading-none"
                  style={{ fontFamily: "Manrope" }}
                >
                  {result}
                </span>

                <button
                  className="p-1 hover:bg-gray-150 rounded transition shrink-0"
                  onClick={() => {
                    alert(`Downloading: ${result}`);
                  }}
                  title={`Download ${result}`}
                >
                  <svg
                    className="w-[18px] h-[18px] text-[#072635] group-hover:text-black transition"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LabResults;
