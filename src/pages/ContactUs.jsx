import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 bg-gray-50 flex items-center justify-center px-4 sm:px-6">
      {/* Main Container - More compact */}
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Contact Info (more compact) */}
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h4 className="text-blue-600 text-xs font-semibold uppercase mb-2 tracking-wider">
                Contact Us
              </h4>
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-3">
                Get In Touch
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                We'd love to hear from you. Whether you have a question, feedback, or just want to chat — our team is here to help!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-blue-700 text-sm" />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-blue-950">Our Location</h3>
                  <p className="text-gray-700 text-sm">IEM, Sector V, Salt Lake, Kolkata, 700091</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <FaPhoneAlt className="text-blue-700 text-sm" />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-blue-950">Phone</h3>
                  <p className="text-gray-700 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <FaEnvelope className="text-blue-700 text-sm" />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-blue-950">Email</h3>
                  <p className="text-gray-700 text-sm">info@iemkolkata.ac.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form (more compact) */}
          <div className="bg-blue-950 p-6 sm:p-8 text-white">
            <h2 className="text-xl font-bold mb-4">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 text-sm rounded-md bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-400 transition"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 text-sm rounded-md bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-400 transition"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-medium mb-1">
                  Your Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 text-sm rounded-md bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-400 transition"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="w-full px-3 py-2 text-sm rounded-md bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-400 transition"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-md shadow-sm transition duration-200"
              >
                <FaPaperPlane className="text-white text-sm" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;