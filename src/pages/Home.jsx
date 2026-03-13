import { Link } from "react-router-dom";
import image from "../assets/homePageImage.jpg";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Content container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between min-h-[90vh]">
        {/* Text content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <FaShieldAlt className="text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-800">Child Vaccination Program</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Protecting <span className="text-blue-600">Every Child's</span> Future
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-lg">
            Government-supported vaccination initiative ensuring all children receive essential immunizations regardless of economic background.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              to="/vaccination"
              className="flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
              <FaArrowRight className="ml-3" />
            </Link>

            <Link
              to="/about"
              className="flex items-center px-8 py-4 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-xl transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-12 md:mb-0 relative">
          <div className="relative">
            <img
              src={image}
              alt="Happy child receiving vaccination"
              className="w-full max-w-md md:max-w-lg rounded-3xl shadow-2xl object-cover border-8 border-white"
            />
            <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Certified Safe</p>
                  <p className="font-semibold text-gray-900">100% Effective</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path fill="#3B82F6" fillOpacity="0.1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;