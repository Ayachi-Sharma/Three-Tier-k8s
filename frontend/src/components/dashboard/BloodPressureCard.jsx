import React from "react";
import BloodPressureChart from "./Chart";

function BloodPressureCard({
  history,
  systolic,
  diastolic,
  renderTrendIcon,
}) {
  return (
    <div className="bg-[#F4F0FA] rounded-[12px] p-5 flex flex-col md:flex-row gap-6">
      {/* Chart */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-4">
          <h4
            className="text-[#072635] text-[18px] font-bold"
            style={{ fontFamily: "Manrope" }}
          >
            Blood Pressure
          </h4>

          <div className="flex items-center gap-1 cursor-pointer">
            <span
              className="text-[#072635] text-[14px]"
              style={{ fontFamily: "Manrope" }}
            >
              Last 6 months
            </span>

            <svg
              className="w-3 h-3 text-[#072635]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        <div className="">
          <BloodPressureChart history={history} />
        </div>
      </div>

      {/* Stats */}
      <div className="w-full md:w-[150px] shrink-0 flex flex-col gap-4 justify-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-3.5 h-3.5 rounded-full bg-[#E66FD2]" />
            <span
              className="text-[#072635] text-[14px] font-bold"
              style={{ fontFamily: "Manrope" }}
            >
              Systolic
            </span>
          </div>

          <div
            className="text-[#072635] text-[22px] font-bold mb-1"
            style={{ fontFamily: "Manrope" }}
          >
            {systolic.value}
          </div>

          <div className="flex items-center text-[12px]">
            {renderTrendIcon(systolic.levels)}
            <span>{systolic.levels}</span>
          </div>
        </div>

        <div className="h-px bg-gray-200" />

        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-3.5 h-3.5 rounded-full bg-[#8C6FE6]" />
            <span
              className="text-[#072635] text-[14px] font-bold"
              style={{ fontFamily: "Manrope", opacity: 1 }}
            >
              Diastolic
            </span>
          </div>

          <div
            className="text-[#072635] text-[22px] font-bold mb-1"
            style={{ fontFamily: "Manrope" }}
          >
            {diastolic.value}
          </div>

          <div className="flex items-center text-[12px]">
            {renderTrendIcon(diastolic.levels)}
            <span>{diastolic.levels}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BloodPressureCard;