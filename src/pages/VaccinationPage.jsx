import React, { useState } from "react";
import QRCode from "react-qr-code";
import { db } from "../firebase";
import { ref, set } from "firebase/database";
import sendEmail from "../utils/email";
import { FaBaby, FaCalendar, FaMars, FaUsers, FaEnvelope, FaStethoscope, FaSyringe } from "react-icons/fa";

const GradientBG = ({ children }) => (
  <div className="relative min-h-screen py-8 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
    {children}
  </div>
);

const VaccinationPage = ({
  vaccinations,
  setVaccinations,
  onBack,
  onSubmit,
}) => {
  const toggleStatus = (index) => {
    const updated = [...vaccinations];
    updated[index].done = !updated[index].done;
    setVaccinations(updated);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 md:px-8 py-8">
          <h2 className="text-3xl font-bold text-white flex items-center">
            <FaSyringe className="mr-3 text-blue-200" />
            Vaccination Schedule
          </h2>
          <p className="text-blue-100 text-sm mt-2">Track and manage your child's vaccinations</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Vaccine Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Recommended Age</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cost</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {vaccinations.map((vaccine, i) => (
                <tr 
                  key={i} 
                  className={`hover:bg-blue-50 transition-colors ${vaccine.done ? 'bg-green-50' : ''}`}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    <span className="inline-flex items-center">
                      <FaSyringe className="w-4 h-4 text-blue-500 mr-2" />
                      {vaccine.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{vaccine.age}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">{vaccine.cost}</td>
                  <td className="px-6 py-4 text-center">
                    <input
                      type="checkbox"
                      checked={vaccine.done}
                      onChange={() => toggleStatus(i)}
                      className="w-5 h-5 accent-green-600 cursor-pointer rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Actions */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 md:px-8 py-6 flex flex-col sm:flex-row justify-between gap-4">
          <button
            onClick={onBack}
            className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Back
          </button>
          <button
            onClick={onSubmit}
            className="px-8 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
          >
            Complete Registration
          </button>
        </div>
      </div>
    </div>
  );
};

const HomePage = ({ formData, setFormData, onNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 md:px-8 py-8">
          <h2 className="text-3xl font-bold text-white flex items-center">
            <FaBaby className="mr-3 text-blue-200" />
            Newborn Registration
          </h2>
          <p className="text-blue-100 text-sm mt-2">Complete the information to register your child</p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onNext();
          }}
          className="p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Child Name */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-900 mb-2"
                htmlFor="childName"
              >
                <span className="flex items-center">
                  Child Name
                </span>
              </label>
              <input
                type="text"
                id="childName"
                name="childName"
                placeholder="e.g., Arjun Kumar"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.childName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-900 mb-2"
                htmlFor="dob"
              >
                <span className="flex items-center">
                  Date of Birth
                </span>
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-900 mb-2"
                htmlFor="gender"
              >
                <span className="flex items-center">
                  Gender
                </span>
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Birthplace */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-900 mb-2"
                htmlFor="birthplace"
              >
                Birthplace
              </label>
              <input
                type="text"
                id="birthplace"
                name="birthplace"
                placeholder="e.g., City Hospital"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.birthplace}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mother Name */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-900 mb-2"
                htmlFor="motherName"
              >
                <span className="flex items-center">
                  Mother Name
                </span>
              </label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                placeholder="e.g., Priya Kumar"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.motherName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mother Phone */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-900 mb-2"
                htmlFor="motherPhone"
              >
                Mother Phone Number
              </label>
              <input
                type="tel"
                id="motherPhone"
                name="motherPhone"
                placeholder="e.g., 9876543210"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.motherPhone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                title="Enter 10-digit phone number"
              />
            </div>

            {/* Father Name */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-900 mb-2"
                htmlFor="fatherName"
              >
                <span className="flex items-center">
                  Father Name
                </span>
              </label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                placeholder="e.g., Rajesh Kumar"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Father Phone */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-900 mb-2"
                htmlFor="fatherPhone"
              >
                Father Phone Number
              </label>
              <input
                type="tel"
                id="fatherPhone"
                name="fatherPhone"
                placeholder="e.g., 9876543211"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.fatherPhone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                title="Enter 10-digit phone number"
              />
            </div>


            {/* Parent Email */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-900 mb-2"
                htmlFor="parentEmail"
              >
                <span className="flex items-center">
                  Parent Email
                </span>
              </label>
              <input
                type="email"
                id="parentEmail"
                name="parentEmail"
                placeholder="e.g., parent@email.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.parentEmail}
                onChange={handleChange}
                required
              />
            </div>

            {/* Doctor Name */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-900 mb-2"
                htmlFor="doctorName"
              >
                <span className="flex items-center">
                  Doctor Name (Delivery Attended)
                </span>
              </label>
              <input
                type="text"
                id="doctorName"
                name="doctorName"
                placeholder="e.g., Dr. Sharma"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.doctorName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="w-full md:w-1/2 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-md hover:shadow-lg"
            >
              Next: Vaccination Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const GetStarted = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    childName: "",
    dob: "",
    gender: "",
    motherName: "",
    motherPhone: "",
    fatherName: "",
    fatherPhone: "",
    birthplace: "",
    hospitalName: "",
    doctorName: "",
    parentEmail: "",
  });

  const [vaccinations, setVaccinations] = useState([
    { name: "BCG", age: "At Birth", cost: "Free / ₹60", done: false },
    {
      name: "Hepatitis B (1st dose)",
      age: "At Birth",
      cost: "Free / ₹100",
      done: false,
    },
    {
      name: "OPV (Oral Polio Vaccine)",
      age: "At Birth, 6, 10, 14 weeks",
      cost: "Free",
      done: false,
    },
    {
      name: "DTP (1st dose)",
      age: "6 Weeks",
      cost: "Free / ₹250",
      done: false,
    },
    { name: "Hib", age: "6 Weeks", cost: "₹400", done: false },
    { name: "Rotavirus", age: "6 Weeks", cost: "₹900", done: false },
    { name: "PCV", age: "6 Weeks", cost: "₹1500–₹3000", done: false },
    { name: "IPV", age: "6 & 14 Weeks", cost: "Free / ₹500", done: false },
    { name: "MMR", age: "9 & 15 Months", cost: "₹70–₹200", done: false },
    { name: "Typhoid", age: "9–12 Months", cost: "₹150–₹500", done: false },
    {
      name: "Hepatitis A",
      age: "12–15 Months",
      cost: "₹900–₹1400",
      done: false,
    },
    {
      name: "Varicella",
      age: "12–15 Months",
      cost: "₹1500–₹2000",
      done: false,
    },
    {
      name: "DTP Booster",
      age: "16–24 Months",
      cost: "Free / ₹250",
      done: false,
    },
  ]);

  const [qrValue, setQrValue] = useState("");
  const [childId, setChildId] = useState("");

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };


  const saveTodbAndGenerateQR = async () => {
    try {
      const childId = Date.now().toString();
      const data = {
        ...formData,
        vaccinations,
        childId,
      };

      console.log("Attempting to save data:", data);

      // Save to Realtime Database
      await set(ref(db, "children/" + childId), data);
      console.log("Data saved successfully!");
      
      // Generate QR code URL with all child data (URL encoded)
      const qrData = JSON.stringify(data);
      const encodedQrData = encodeURIComponent(qrData);
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedQrData}`;
      
      // Update state
      setChildId(childId);
      setQrValue(qrData);

      // Send email after successful save (non-critical)
      try {
        await sendEmail({
          name: formData.childName,
          to_email: formData.parentEmail,
          message: `Your child's vaccination card has been successfully registered.`,
          childId: childId,
          qrCodeUrl: qrCodeUrl,
        });
        console.log("Email sent successfully!");
      } catch (emailError) {
        console.warn("Email sending failed, but registration is complete:", emailError);
      }
    } catch (error) {
      console.error("Full error object:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      alert(`Registration failed: ${error.message || "Unknown error"}`);
    }
  };


  return (
    <GradientBG>
      <div className="w-full">
        {!qrValue && step === 1 && (
          <HomePage
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
          />
        )}
        {!qrValue && step === 2 && (
          <VaccinationPage
            vaccinations={vaccinations}
            setVaccinations={setVaccinations}
            onBack={handleBack}
            onSubmit={saveTodbAndGenerateQR}
          />
        )}

        {qrValue && (
          <div className="max-w-2xl mx-auto mt-8 p-6 md:p-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 md:px-8 py-8 text-center">
                <h3 className="text-3xl font-bold text-white">
                  Registration Complete
                </h3>
                <p className="text-green-100 text-sm mt-2">Your child's vaccination card has been successfully registered</p>
              </div>
              
              <div className="p-8 text-center">
                <p className="text-sm text-gray-600 mb-6">Scan this QR code to access vaccination records</p>
                <div className="inline-block bg-white p-4 rounded-lg border border-gray-200 shadow-md">
                  <QRCode value={qrValue} size={200} level="H" />
                </div>
                
                <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <p className="text-gray-700 text-sm mb-4">
                    <strong className="text-gray-900 block mb-2">Child ID:</strong> 
                    <span className="text-lg font-monospace text-blue-600 break-all">{childId}</span>
                  </p>
                  <p className="text-gray-600 text-xs">Save this ID for future reference. Use it to access and update vaccination records.</p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => {
                      setQrValue("");
                      setStep(1);
                      setFormData({
                        childName: "",
                        dob: "",
                        gender: "",
                        motherName: "",
                        motherPhone: "",
                        fatherName: "",
                        fatherPhone: "",
                        birthplace: "",
                        hospitalName: "",
                        doctorName: "",
                        parentEmail: "",
                      });
                    }}
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Register Another Child
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </GradientBG>
  );
};

export default GetStarted;
