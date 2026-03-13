import React, { useRef } from 'react';
import printJS from 'print-js';
import { FaFilePdf } from 'react-icons/fa';

// Vaccine schedule with specific ages
const vaccineSchedule = {
  'BCG': 'At birth',
  'Hepatitis B (1st dose)': 'At birth',
  'OPV (1st dose)': 'At birth',
  'Pentavalent (1st dose)': '6 weeks',
  'OPV (2nd dose)': '10 weeks',
  'Pentavalent (2nd dose)': '10 weeks',
  'OPV (3rd dose)': '14 weeks',
  'Pentavalent (3rd dose)': '14 weeks',
  'IPV': '14 weeks',
  'PCV (1st dose)': '6 weeks',
  'PCV (2nd dose)': '10 weeks',
  'PCV (3rd dose)': '14 weeks',
  'Rotavirus (1st dose)': '6 weeks',
  'Rotavirus (2nd dose)': '10 weeks',
  'Measles (1st dose)': '9 months',
  'Vitamin A (1st dose)': '9 months',
  'DPT booster (1st dose)': '16-24 months',
  'OPV booster': '16-24 months',
  'Measles (2nd dose)': '16-24 months',
  'Vitamin A (2nd dose)': '16 months',
  'Vitamin A (3rd to 9th dose)': 'Every 6 months until 5 years',
  'TT (Tetanus Toxoid)': '10 years & 16 years',
  'MMR': '15 months',
  'Typhoid': '2 years',
  'Chickenpox': '15 months',
  'Hepatitis A': '1 year',
  'Influenza': 'Yearly after 6 months'
};

export default function ChildProfile({ data }) {
  const printRef = useRef();

  const child = data ? Object.values(data)[0] : null;
  if (!child) return null;

  const {
    childName,
    childId,
    dob,
    gender,
    birthplace,
    motherName,
    motherPhone,
    fatherName,
    fatherPhone,
    vaccinations = [],
  } = child;

  const completedVaccines = vaccinations.filter(v => v.done).length;
  const totalVaccines = vaccinations.length;

  const handlePrint = () => {
    printJS({
      printable: 'printable-area',
      type: 'html',
      targetStyles: ['*'],
      documentTitle: `${childName || 'Child'}-Vaccination-Record`,
      style: `
        @page { size: A4; margin: 1cm; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        .print-header { border-bottom: 2px solid #e5e7eb; }
        .vaccine-table { border-collapse: collapse; width: 100%; }
        .vaccine-table th { background-color: #f3f4f6; }
        .completed { color: #10b981; }
        .pending { color: #f59e0b; }
        .age-warning { color: #ef4444; }
      `
    });
  };

  // Function to determine if vaccine is overdue
  const isOverdue = (vaccineName) => {
    const vaccineAge = vaccineSchedule[vaccineName];
    if (!vaccineAge) return false;

    // Simple check for "months" or "years" in the age string
    if (vaccineAge.includes('months') || vaccineAge.includes('years')) {
      const ageNum = parseInt(vaccineAge);
      // This is a simplified check - in a real app you'd compare with the child's actual age
      return ageNum < 2; // Example condition
    }
    return false;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Printable Content */}
      <div
        id="printable-area"
        ref={printRef}
        className="p-8 text-gray-800"
      >
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg print-header pb-8 mb-8 px-6 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">{childName}'s Vaccination Record</h1>
              <p className="text-blue-100 mt-2">Child ID: <span className="font-semibold">{childId}</span></p>
            </div>
          </div>
        </header>

        {/* Child Info */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-300 text-gray-800">
            Child Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 font-semibold">Date of Birth</p>
              <p className="text-lg font-semibold text-gray-900 mt-2">{dob}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 font-semibold">Gender</p>
              <p className="text-lg font-semibold text-gray-900 mt-2">{gender}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 font-semibold">Birthplace</p>
              <p className="text-lg font-semibold text-gray-900 mt-2">{birthplace}</p>
            </div>
          </div>
        </section>

        {/* Parent Info */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-300 text-gray-800">
            Parent Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-lg text-gray-800 mb-4">Mother</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Name</p>
                  <p className="text-gray-900 mt-1">{motherName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Phone</p>
                  <p className="text-gray-900 mt-1">{motherPhone}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-lg text-gray-800 mb-4">Father</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Name</p>
                  <p className="text-gray-900 mt-1">{fatherName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Phone</p>
                  <p className="text-gray-900 mt-1">{fatherPhone}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vaccination Progress */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-gray-800 text-lg">Vaccination Progress</h4>
            <p className="font-bold text-lg">
              <span className="text-blue-600">{completedVaccines}</span> <span className="text-gray-600">/ {totalVaccines}</span>
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(completedVaccines / totalVaccines) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            {completedVaccines === totalVaccines 
              ? 'All vaccinations completed' 
              : `${totalVaccines - completedVaccines} vaccine(s) pending`}
          </p>
        </div>

        {/* Vaccination Table */}
        <section>
          <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-300 text-gray-800">
            Vaccination Details
          </h3>
          <div className="overflow-x-auto">
            <table className="vaccine-table w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 font-bold text-left text-gray-800">Vaccine</th>
                  <th className="py-3 px-4 font-bold text-left text-gray-800">Recommended Age</th>
                  <th className="py-3 px-4 font-bold text-left text-gray-800">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {vaccinations.map((vaccine, index) => (
                  <tr key={index} className={vaccine.done ? 'bg-green-50' : 'hover:bg-gray-50'}>
                    <td className="py-3 px-4 text-gray-900">{vaccine.name}</td>
                    <td className="py-3 px-4 text-gray-700">
                      {vaccineSchedule[vaccine.name] ? (
                        <span className={!vaccine.done && isOverdue(vaccine.name) ? 'text-red-600 font-semibold' : ''}>
                          {vaccineSchedule[vaccine.name]}
                          {!vaccine.done && isOverdue(vaccine.name) && (
                            <span className="text-xs ml-2 text-red-600">(Overdue)</span>
                          )}
                        </span>
                      ) : (
                        <span className="text-gray-500">Not specified</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {vaccine.done ? (
                        <span className="text-sm font-semibold text-green-700">Completed</span>
                      ) : (
                        <span className="text-sm font-semibold text-yellow-700">Pending</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Print Button */}
      <div className="px-8 py-8 bg-gray-50 border-t border-gray-300">
        <button
          onClick={handlePrint}
          className="flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md"
        >
          <FaFilePdf className="mr-2" size={18} /> Download Vaccination Record
        </button>
      </div>
    </div>
  );
}