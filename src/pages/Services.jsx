import React from "react";
import { FaQrcode, FaRupeeSign, FaBullhorn, FaSyringe } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Digital Vaccine Records",
    icon: <FaQrcode className="text-blue-600" />,
    description: "Instant access to complete vaccination records via QR code for parents and healthcare providers.",
    color: "bg-blue-50",
    link: "/vaccination"
  },
  {
    title: "Affordable Immunization",
    icon: <FaRupeeSign className="text-green-600" />,
    description: "Government-supported pricing to ensure all children receive vital vaccinations regardless of income.",
    color: "bg-green-50",
    link: "/affordable"
  },
  {
    title: "Vaccine Education",
    icon: <FaBullhorn className="text-purple-600" />,
    description: "Comprehensive resources about vaccine schedules, benefits, and community health impact.",
    color: "bg-purple-50",
    link: "/vaccine-education"
  },
  {
    title: "Immunization Tracking",
    icon: <FaSyringe className="text-amber-600" />,
    description: "Personalized tracking system to ensure complete vaccination coverage for every child.",
    color: "bg-amber-50",
    link: "/Immunization-Tracking-Page"
  },
];

const Services = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-3 text-sm font-medium text-blue-600">
            OUR SERVICES
          </span>
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Comprehensive <span className="font-medium">Vaccination</span> Solutions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Technology-driven services designed to simplify child immunization for families and healthcare providers.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className={`${service.color} p-5 flex justify-center`}>
                <div className="bg-white p-3 rounded-full shadow-sm">
                  {React.cloneElement(service.icon, { size: 20 })}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {service.description}
                </p>
                {service.link ? (
                  <Link
                    to={service.link}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    Learn more
                    <svg className="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-5 py-2.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-sm"
          >
            Explore all features
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
