import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import DiagnosisHistory from "../components/dashboard/DiagnosisHistory";
import DiagnosticList from "../components/dashboard/DiagnosticList";
import PatientProfile from "../components/dashboard/PatientProfile";
import LabResults from "../components/dashboard/LabResults";
import { fetchPatients } from "../services/api";

function Dashboard() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPatients();
      setPatients(data);
      
      // Default selected patient to Jessica Taylor
      const jessica = data.find((p) => p.name === "Jessica Taylor");
      setSelectedPatient(jessica || data[0] || null);
    } catch (err) {
      setError("Failed to load patient records. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="h-screen bg-[#F6F7F8] flex flex-col font-sans overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <div className="flex-1 px-4 pb-6 min-h-0 overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
              <div className="absolute inset-0 rounded-full border-4 border-[#01F0D0] border-t-transparent animate-spin"></div>
            </div>
            <p className="text-[#072635] text-[16px] font-bold mt-4 animate-pulse" style={{ fontFamily: "Manrope" }}>
              Loading dashboard data...
            </p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center h-[70vh] text-center max-w-md mx-auto">
            <svg className="w-16 h-16 text-red-400 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <h3 className="text-[18px] font-bold text-[#072635] mb-2" style={{ fontFamily: "Manrope" }}>
              Error Loading Data
            </h3>
            <p className="text-gray-600 text-[14px] mb-6" style={{ fontFamily: "Manrope" }}>
              {error}
            </p>
            <button
              onClick={loadData}
              className="bg-[#01F0D0] hover:bg-[#01d5ba] text-[#072635] text-[14px] font-bold py-2.5 px-6 rounded-full transition"
              style={{ fontFamily: "Manrope" }}
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-0">
            {/* Left Column - Sidebar (Patients List) */}
            <div className="lg:col-span-3 h-full min-h-0">
              <Sidebar
                patients={patients}
                selectedPatient={selectedPatient}
                onSelectPatient={setSelectedPatient}
              />
            </div>

             {/* Scrollable Area */}
  <div className="lg:col-span-9 h-full overflow-y-auto">
    <div className="grid grid-cols-1 lg:grid-cols-9 gap-6">

      {/* Middle */}
      <div className="lg:col-span-6 flex flex-col gap-6">
        <DiagnosisHistory patient={selectedPatient} />
        <DiagnosticList diagnosticList={selectedPatient?.diagnostic_list} />
      </div>

      {/* Right */}
      <div className="lg:col-span-3 flex flex-col gap-6">
        <PatientProfile patient={selectedPatient} />
        <LabResults labResults={selectedPatient?.lab_results} />
      </div>

    </div>
          </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;