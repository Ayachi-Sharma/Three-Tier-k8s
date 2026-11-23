import React from "react";

function VitalCard({
  title,
  value,
  unit,
  level,
  bgColor,
  icon,
  renderTrendIcon,
}) {
  return (
    <div className={`${bgColor} rounded-[12px] p-4 flex flex-col`}>
      <div className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
        {icon}
      </div>

      <span
        className="text-[#072635] text-[14px] font-medium mb-1"
        style={{ fontFamily: "Manrope" }}
      >
        {title}
      </span>

      <span
        className="text-[#072635] text-[30px] font-extrabold mb-1"
        style={{ fontFamily: "Manrope" }}
      >
        {value} {unit}
      </span>

      <span
        className="text-[#072635] text-[14px] mt-auto flex items-center"
        style={{ fontFamily: "Manrope" }}
      >
        {renderTrendIcon(level)}
        {level}
      </span>
    </div>
  );
}

export default VitalCard;