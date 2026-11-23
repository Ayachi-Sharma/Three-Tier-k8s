import React from "react";
import BloodPressureCard from "./BloodPressureCard";
import VitalCard from "./VitalCard";

function DiagnosisHistory({ patient }) {
  if (!patient || !patient.diagnosis_history) {
    return (
      <div className="bg-white rounded-[16px] py-6 px-2 flex flex-col items-center justify-center h-full min-h-[300px]">
        <p className="text-gray-500 font-medium">No diagnosis history available</p>
      </div>
    );
  }

  // Get most recent diagnosis history record (first element)
  const currentRecord = patient.diagnosis_history[0] || {};
  
  const systolic = currentRecord.blood_pressure?.systolic || { value: 0, levels: "Normal" };
  const diastolic = currentRecord.blood_pressure?.diastolic || { value: 0, levels: "Normal" };
  const heartRate = currentRecord.heart_rate || { value: 0, levels: "Normal" };
  const respiratoryRate = currentRecord.respiratory_rate || { value: 0, levels: "Normal" };
  const temperature = currentRecord.temperature || { value: 0, levels: "Normal" };

  const renderTrendIcon = (levels) => {
    if (levels?.toLowerCase().includes("higher")) {
      return (
        <svg className="w-[10px] h-[7px] text-[#072635] fill-current inline-block mr-1 align-middle" viewBox="0 0 10 6">
          <path d="M5 0L10 6H0L5 0Z" />
        </svg>
      );
    }
    if (levels?.toLowerCase().includes("lower")) {
      return (
        <svg className="w-[10px] h-[7px] text-[#072635] fill-current inline-block mr-1 align-middle rotate-180" viewBox="0 0 10 6">
          <path d="M5 0L10 6H0L5 0Z" />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-[16px] py-4 px-4 flex flex-col gap-6 shadow-sm">
      <h3
        className="text-[#072635] text-[24px] font-extrabold"
        style={{ fontFamily: "Manrope" }}
      >
        Diagnosis History
      </h3>

      {/* Blood Pressure Block */}
<BloodPressureCard
  history={patient.diagnosis_history}
  systolic={systolic}
  diastolic={diastolic}
  renderTrendIcon={renderTrendIcon}
/>

      {/* Vitals Grid */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
  <VitalCard
    title="Respiratory Rate"
    value={respiratoryRate.value}
    unit="bpm"
    level={respiratoryRate.levels}
    bgColor="bg-[#E0F3FA]"
    renderTrendIcon={renderTrendIcon}
    icon={
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#072635" strokeWidth="2">
        <path d="M12 3v17" />
        <path d="M12 7c-2.5-2.5-6-2.5-8 0C2 9.5 2 15.5 4 18c2.5 2.5 8 2.5 8 0" />
        <path d="M12 7c2.5-2.5 6-2.5 8 0c2 2.5 2 8.5 0 11-2.5 2.5-8 2.5-8 0" />
      </svg>
    }
  />

  <VitalCard
    title="Temperature"
    value={temperature.value}
    unit="°F"
    level={temperature.levels}
    bgColor="bg-[#FFE6F1]"
    renderTrendIcon={renderTrendIcon}
    icon={
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#072635" strokeWidth="2">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    }
  />

  <VitalCard
    title="Heart Rate"
    value={heartRate.value}
    unit="bpm"
    level={heartRate.levels}
    bgColor="bg-[#FFE6F2]"
    renderTrendIcon={renderTrendIcon}
    icon={
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF578E" strokeWidth="2.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    }
  />
</div>
    </div>
  );
}

export default DiagnosisHistory;
