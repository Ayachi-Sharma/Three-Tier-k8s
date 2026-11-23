import React from "react";

function Sidebar({ patients = [], selectedPatient, onSelectPatient }) {
  const filteredPatients = patients;

  return (
    <div className="bg-white rounded-[16px] p-4 shadow-sm h-full flex flex-col overflow-hidden">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between mb-4 shrink-0">
        <div className="flex items-center justify-between mb-4 shrink-0">
  <h2
    className="text-[#072635] text-[24px] font-extrabold"
    style={{ fontFamily: "Manrope" }}
  >
    Patients
  </h2>
</div>
      </div>

      {/* Patient List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 -mr-2">
        {patients.length === 0 ? (
          <div className="text-gray-400 text-center py-8 text-[14px]">
            No patients found
          </div>
        ) : (
          patients.map((patient) => {
            const isSelected = selectedPatient && selectedPatient.name === patient.name;
            return (
              <div
                key={patient.name}
                onClick={() => onSelectPatient && onSelectPatient(patient)}
                className={`flex items-center justify-between p-3 mb-1 rounded-[8px] cursor-pointer transition-all duration-200
                  ${
                    isSelected
                      ? "bg-[#D8FCF7]"
                      : "hover:bg-gray-50"
                  }`}
              >
                {/* Info Container */}
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={patient.profile_picture}
                    alt={patient.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <h4
                      className="text-[#072635] text-[14px] font-bold truncate leading-tight"
                      style={{ fontFamily: "Manrope" }}
                    >
                      {patient.name}
                    </h4>
                    <p
                      className="text-[#707070] text-[12px] mt-1 truncate"
                      style={{ fontFamily: "Manrope" }}
                    >
                      {patient.gender}, {patient.age}
                    </p>
                  </div>
                </div>

                {/* More Action Dot */}
                <button
                  className="p-1 hover:bg-gray-100/55 rounded-full shrink-0"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <svg
                    className="w-4 h-4 text-[#072635]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </svg>
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Sidebar;
