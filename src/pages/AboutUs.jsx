import React from "react";
import Ankit from "../assets/Ankit.png"
import Image1 from "../assets/image1.jpg"
import Image2 from "../assets/image2.jpg"
import Image3 from "../assets/image3.jpg"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Ankit",
      role: "Backend Developer",
      image: Ankit,
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Sayak",
      role: "Frontend Developer",
      image: Image1,
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Somhrita",
      role: "Design Lead",
      image: Image3,
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Shreya",
      role: "Frontend Developer",
      image: Image2,
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Meet Our <span className="text-blue-600">Team</span>
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Behind ShishuCard is a passionate team of developers and designers dedicated to improving child healthcare accessibility through technology.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex space-x-3">
                  <a href={member.social.linkedin} className="text-white hover:text-blue-300 transition">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.github} className="text-white hover:text-blue-300 transition">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href={member.social.twitter} className="text-white hover:text-blue-300 transition">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
              <div className="mt-4 flex justify-center space-x-3">
                <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href={member.social.github} className="text-gray-400 hover:text-blue-600 transition">
                  <FaGithub className="w-4 h-4" />
                </a>
                <a href={member.social.twitter} className="text-gray-400 hover:text-blue-600 transition">
                  <FaTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-20 mb-16">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-gray-500">
              <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Our Mission</h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          At ShishuCard, we're revolutionizing child healthcare by creating digital solutions that make vaccination tracking accessible to all families.
          Our platform bridges the gap between healthcare providers and communities, ensuring no child misses their vital immunizations.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;