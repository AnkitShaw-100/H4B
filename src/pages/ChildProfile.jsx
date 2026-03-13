import React, { useRef } from 'react';
import printJS from 'print-js';
import { FaFilePdf, FaUser, FaCalendarAlt, FaVenusMars, FaMapMarkerAlt, FaHospital, FaUserMd, FaPhone, FaCheck } from 'react-icons/fa';
import logo from '../assets/Logo.png';
import defaultProfile from '../assets/3.jpg';

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
    hospitalName,
    doctorName,
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
        <header className="flex flex-col md:flex-row items-center justify-between print-header pb-6 mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="h-14 mr-4" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{childName}'s Vaccination Record</h1>
              <p className="text-sm text-gray-500">ID: {childId}</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={defaultProfile}
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-blue-100 object-cover"
            />
          </div>
        </header>

        {/* Child Info */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 flex items-center">
            <FaUser className="mr-2 text-blue-600" />
            Child Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <FaCalendarAlt className="mt-1 mr-3 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-medium">{dob}</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaVenusMars className="mt-1 mr-3 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Gender</p>
                <p className="font-medium">{gender}</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Birthplace</p>
                <p className="font-medium">{birthplace}</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaHospital className="mt-1 mr-3 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Hospital</p>
                <p className="font-medium">{hospitalName}</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaUserMd className="mt-1 mr-3 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Doctor</p>
                <p className="font-medium">{doctorName}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Parent Info */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 flex items-center">
            <FaUser className="mr-2 text-blue-600" />
            Parent Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Mother</h4>
              <div className="flex items-start">
                <FaUser className="mt-1 mr-3 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{motherName}</p>
                </div>
              </div>
              <div className="flex items-start mt-3">
                <FaPhone className="mt-1 mr-3 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{motherPhone}</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Father</h4>
              <div className="flex items-start">
                <FaUser className="mt-1 mr-3 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{fatherName}</p>
                </div>
              </div>
              <div className="flex items-start mt-3">
                <FaPhone className="mt-1 mr-3 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{fatherPhone}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vaccination Progress */}
        <div className="bg-blue-50 rounded-lg p-4 mb-8">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium text-gray-700">Vaccination Progress</h4>
            <p className="font-semibold">
              <span className="completed">{completedVaccines}</span> / {totalVaccines} completed
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${(completedVaccines / totalVaccines) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Vaccination Table */}
        <section>
          <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 flex items-center">
            <FaCheck className="mr-2 text-blue-600" />
            Vaccination Details
          </h3>
          <div className="overflow-x-auto">
            <table className="vaccine-table w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-700">
                  <th className="py-3 px-4 font-medium">Vaccine</th>
                  <th className="py-3 px-4 font-medium">Recommended Age</th>
                  <th className="py-3 px-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {vaccinations.map((vaccine, index) => (
                  <tr key={index} className={vaccine.done ? 'bg-green-50' : ''}>
                    <td className="py-3 px-4 font-medium">{vaccine.name}</td>
                    <td className="py-3 px-4">
                      {vaccineSchedule[vaccine.name] ? (
                        <span className={!vaccine.done && isOverdue(vaccine.name) ? 'age-warning' : ''}>
                          {vaccineSchedule[vaccine.name]}
                          {!vaccine.done && isOverdue(vaccine.name) && (
                            <span className="text-xs ml-2">(Overdue)</span>
                          )}
                        </span>
                      ) : (
                        <span className="text-gray-500">Not specified</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {vaccine.done ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <FaCheck className="mr-1" /> Completed
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
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
      <div className="px-8 pb-8">
        <button
          onClick={handlePrint}
          className="flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
        >
          <FaFilePdf className="mr-2" /> Download Vaccination Record
        </button>
      </div>
    </div>
  );
}