import React, { useState } from "react";
import QRCode from "react-qr-code";
import { db } from "../firebase";
import { ref, set } from "firebase/database";
import sendEmail from "../utils/email";

const GradientBG = ({ children }) => (
  <div className="relative min-h-screen py-8 flex items-center justify-center">
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 via-white to-blue-200 -z-10" />
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
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-xl mt-8 border border-blue-200">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-950">
        Vaccination Schedule
      </h2>
      <table className="w-full border border-blue-300 rounded-lg overflow-hidden">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="py-3 px-4 border-b border-blue-300">Vaccine Name</th>
            <th className="py-3 px-4 border-b border-blue-300">
              Recommended Age
            </th>
            <th className="py-3 px-4 border-b border-blue-300">Cost</th>
            <th className="py-3 px-4 border-b border-blue-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {vaccinations.map((vaccine, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-blue-50" : "bg-white"}>
              <td className="py-2 px-4 border-b border-blue-200 text-center">
                {vaccine.name}
              </td>
              <td className="py-2 px-4 border-b border-blue-200 text-center">
                {vaccine.age}
              </td>
              <td className="py-2 px-4 border-b border-blue-200 text-center">
                {vaccine.cost}
              </td>
              <td className="py-2 px-4 border-b border-blue-200 text-center">
                <input
                  type="checkbox"
                  checked={vaccine.done}
                  onChange={() => toggleStatus(i)}
                  className="w-5 h-5 cursor-pointer accent-blue-900"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="bg-blue-950 text-white px-8 py-2 rounded-lg hover:bg-blue-900 transition font-semibold shadow"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          className="bg-blue-900 text-white px-8 py-2 rounded-lg hover:bg-blue-950 transition font-semibold shadow"
        >
          Register Child
        </button>
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
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-xl mt-8 border border-blue-200">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-950">
        Newborn Registration
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onNext();
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
      >
        <div>
          <label
            className="block font-semibold mb-2 text-blue-900"
            htmlFor="childName"
          >
            Child Name
          </label>
          <input
            type="text"
            id="childName"
            name="childName"
            className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-blue-50"
            value={formData.childName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            className="block font-semibold mb-2 text-blue-900"
            htmlFor="dob"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-blue-50"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            className="block font-semibold mb-2 text-blue-900"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-blue-50"
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

        <div>
          <label
            className="block font-semibold mb-2 text-blue-900"
            htmlFor="motherName"
          >
            Mother Name
          </label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-blue-50"
            value={formData.motherName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            className="block font-semibold mb-2 text-blue-900"
            htmlFor="motherPhone"
          >
            Mother Phone Number
          </label>
          <input
            type="tel"
            id="motherPhone"
            name="motherPhone"
            className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-blue-50"
            value={formData.motherPhone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            title="Enter 10-digit phone number"
          />
        </div>

        <div>
          <label
            className="block font-semibold mb-2 text-blue-900"
            htmlFor="fatherName"
          >
            Father Name
          </label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-blue-50"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            className="block font-semibold mb-2 text-blue-900"
            htmlFor="fatherPhone"
          >
            Father Phone Number
          </label>
          <input
            type="tel"
            id="fatherPhone"
            name="fatherPhone"
            className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-blue-50"
            value={formData.fatherPhone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            title="Enter 10-digit phone number"
          />
        </div>

        <div>
          <label
            className="block font-semibold mb-2 text-blue-900"
            htmlFor="birthplace"
          >
            Birthplace
          </label>
          <input
            type="text"
            id="birthplace"
            name="birthplace"
            className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-blue-50"
            value={formData.birthplace}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            className="block font-semibold mb-2 text-blue-900"
            htmlFor="parentEmail"
          >
            Parent Email
          </label>
          <input
            type="email"
            id="parentEmail"
            name="parentEmail"
            className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-blue-50"
            value={formData.parentEmail}
            onChange={handleChange}
            required
          />
        </div>


        <div>
          <label
            className="block font-semibold mb-2 text-blue-900"
            htmlFor="doctorName"
          >
            Doctor Name (Delivery Attended)
          </label>
          <input
            type="text"
            id="doctorName"
            name="doctorName"
            className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-blue-50"
            value={formData.doctorName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="w-2/3 bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-950 transition duration-300 shadow"
          >
            Next
          </button>
        </div>
      </form>
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
    parentEmail: "", // 🔥 Add this
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
    const childId = Date.now().toString();
    const data = {
      ...formData,
      vaccinations,
      childId,
    };

    // ✅ Save to Firebase Realtime db
    set(ref(db, "children/" + childId), data)
      .then(() => {
        console.log("Data saved successfully!");
        setChildId(childId);
        setQrValue(JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });

    await sendEmail({
      name: formData.childName,
      to_email: formData.parentEmail,
      message: `Your child ${formData.childName}'s vaccination card has been successfully registered. View the QR code or visit the hospital to check updates. https://h4-b.vercel.app/child/1750487957444`,
    });
  };


  return (
    <GradientBG>
      <div className="w-full">
        {step === 1 && (
          <HomePage
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
          />
        )}
        {step === 2 && (
          <VaccinationPage
            vaccinations={vaccinations}
            setVaccinations={setVaccinations}
            onBack={handleBack}
            onSubmit={saveTodbAndGenerateQR}
          />
        )}

        {qrValue && (
          <div className="max-w-3xl mx-auto mt-10 p-6 bg-blue-50 rounded-2xl text-center shadow-lg border border-blue-200">
            <h3 className="text-2xl font-semibold mb-4 text-blue-950">
              Generated QR Code
            </h3>
            <div className="inline-block bg-white p-4 rounded shadow-md">
              <QRCode value={qrValue} size={180} />
            </div>
            <p className="mt-4 text-lg text-blue-900">
              <strong>Child ID:</strong> {childId}
            </p>
          </div>
        )}
      </div>
    </GradientBG>
  );
};

export default GetStarted;
