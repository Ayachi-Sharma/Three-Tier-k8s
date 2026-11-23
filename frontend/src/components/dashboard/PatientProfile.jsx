import React from "react";

function PatientProfile({ patient }) {
  if (!patient) {
    return (
      <div className="bg-white rounded-[16px] p-6 flex flex-col items-center justify-center h-full min-h-[300px]">
        <p className="text-gray-500 font-medium">Select a patient to view details</p>
      </div>
    );
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    try {
      if (dateStr.includes("/")) {
        const [m, d, y] = dateStr.split("/");
        const date = new Date(y, m - 1, d);
        return date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      } else if (dateStr.includes("-")) {
        const [y, m, d] = dateStr.split("-");
        const date = new Date(y, m - 1, d);
        return date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }
    } catch (e) {
      console.error("Error formatting date", e);
    }
    return dateStr;
  };

  const profileItems = [
    {
      label: "Date Of Birth",
      value: formatDate(patient.date_of_birth),
      icon: (
        <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-[#072635]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
      ),
    },
    {
      label: "Gender",
      value: patient.gender,
      icon: (
        <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
          {patient.gender?.toLowerCase() === "female" ? (
            <svg className="w-5 h-5 text-[#072635]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="9" r="4"></circle>
              <line x1="12" y1="13" x2="12" y2="21"></line>
              <line x1="9" y1="17" x2="15" y2="17"></line>
            </svg>
          ) : (
            <svg className="w-5 h-5 text-[#072635]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="10" cy="14" r="4"></circle>
              <line x1="13" y1="11" x2="19" y2="5"></line>
              <polyline points="14 5 19 5 19 10"></polyline>
            </svg>
          )}
        </div>
      ),
    },
    {
      label: "Contact Info.",
      value: patient.phone_number,
      icon: (
        <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-[#072635]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
      ),
    },
    {
      label: "Emergency Contacts",
      value: patient.emergency_contact,
      icon: (
        <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-[#072635]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
      ),
    },
    {
      label: "Insurance Provider",
      value: patient.insurance_type,
      icon: (
        <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-[#072635]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-[16px] py-4 px-3 flex flex-col items-center">
      {/* Profile Picture */}
      <img
        src={patient.profile_picture}
        alt={patient.name}
        className="w-28 h-28 rounded-full object-cover mb-6"
      />

      {/* Name */}
      <h2 className="text-[#072635] text-[24px] font-extrabold mb-4 text-center" style={{ fontFamily: "Manrope" }}>
        {patient.name}
      </h2>

      {/* Info List */}
      <div className="w-full flex flex-col gap-6 mb-6">
        {profileItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            {item.icon}
            <div>
              <p className="text-[#707070] text-[14px] leading-tight" style={{ fontFamily: "Manrope" }}>
                {item.label}
              </p>
              <p className="text-[#072635] text-[14px] font-bold leading-tight mt-1" style={{ fontFamily: "Manrope" }}>
                {item.value || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button
        className="w-3/4 bg-[#01F0D0] hover:bg-[#01d5ba] text-[#072635] text-[14px] font-extrabold py-3 px-6 rounded-full transition duration-300 shadow-sm"
        style={{ fontFamily: "Manrope" }}
      >
        Show All Information
      </button>
    </div>
  );
}

export default PatientProfile;
