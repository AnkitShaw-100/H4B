import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { FaUser, FaLock, FaArrowRight, FaHospital, FaIdCard } from "react-icons/fa";

const HospitalSignup = () => {
  const [hospitalData, setHospitalData] = useState({
    name: "",
    licenseNumber: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (hospitalData.password !== hospitalData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    if (hospitalData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        hospitalData.email, 
        hospitalData.password
      );

      const hospitalDocRef = doc(db, "hospitals", userCredential.user.uid);
      await setDoc(hospitalDocRef, {
        name: hospitalData.name,
        licenseNumber: hospitalData.licenseNumber,
        email: hospitalData.email,
        createdAt: new Date(),
        role: "hospital"
      });

      alert("Hospital registration successful!");
      navigate("/doctor-dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-200 opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-300 opacity-20"></div>

      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 py-6 px-8 text-center">
            <h1 className="text-2xl font-bold text-white">Hospital Registration</h1>
            <p className="text-blue-100 mt-1">Register your healthcare facility</p>
          </div>

          {/* Form */}
          <div className="p-8">
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Hospital Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {/* Hospital Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Hospital Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaHospital className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={hospitalData.name}
                      onChange={handleChange}
                      placeholder="Hospital Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* License Number */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    License No.
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaIdCard className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="licenseNumber"
                      value={hospitalData.licenseNumber}
                      onChange={handleChange}
                      placeholder="License Number"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2 mb-5">
                <label className="block text-sm font-medium text-gray-700">
                  Official Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={hospitalData.email}
                    onChange={handleChange}
                    placeholder="hospital@email.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Password Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {/* Password */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={hospitalData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      minLength="8"
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={hospitalData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      minLength="8"
                    />
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center mb-6">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I certify this information is accurate and agree to the{" "}
                  <Link to="/terms" className="font-medium text-blue-600 hover:text-blue-500">
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  'Registering Hospital...'
                ) : (
                  <>
                    Complete Registration <FaArrowRight className="ml-2" />
                  </>
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                Already registered?{' '}
                <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                  Hospital Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalSignup;