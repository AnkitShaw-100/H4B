import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChildProfile from './ChildProfile';
import { getChildByChildId } from '../utils/findUser';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import VaccineModal from '../components/UpdateForm';
import { ref, set } from 'firebase/database';
import { FaUserEdit, FaSpinner, FaArrowLeft } from 'react-icons/fa';

function ChildPage() {
  const { id } = useParams();
  const [childData, setChildData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user] = useAuthState(auth);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const handleVaccineSubmit = (updatedVaccines) => {
    if (!childData) return;

    const childId = Object.keys(childData)[0];
    const updatedChildData = {
      ...childData[childId],
      vaccinations: updatedVaccines,
    };

    setIsLoading(true);
    set(ref(db, "children/" + childId), updatedChildData)
      .then(() => {
        setChildData({ [childId]: updatedChildData });
        setIsOpen(false);
      })
      .catch((error) => {
        console.error("Update error:", error);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await getChildByChildId(id);
        setChildData(result);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <FaSpinner className="animate-spin text-blue-500 text-4xl mb-4" />
        <p className="text-gray-600">Loading child records...</p>
      </div>
    );
  }

  if (!childData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Child Not Found</h2>
          <p className="text-gray-600 mb-6">No records found for ID: {id}</p>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FaArrowLeft className="mr-2" /> Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Child Vaccination Records
            </h1>
            <p className="text-gray-600">
              View and manage immunization history
            </p>
          </div>

          {user && (
            <button
              onClick={onOpen}
              className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              <FaUserEdit className="mr-2" /> Update Vaccination Records
            </button>
          )}
        </div>

        {/* Child Profile Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <ChildProfile data={childData} />
        </div>

        {/* Vaccine Modal */}
        <VaccineModal
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleVaccineSubmit}
          childData={childData[Object.keys(childData)[0]]}
        />
      </div>
    </div>
  );
}

export default ChildPage;