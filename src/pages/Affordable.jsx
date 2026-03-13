import React from 'react';
import { FaShieldAlt, FaMoneyBillWave, FaHospital, FaMapMarkerAlt, FaCalendarAlt, FaInfoCircle, FaUserShield } from 'react-icons/fa';

const AffordableImmunization = () => {
    // Sample data for vaccines
    const vaccines = [
        {
            name: 'BCG (Tuberculosis)',
            price: 'Free',
            eligibility: 'All newborns',
            schedule: 'At birth',
            description: 'Protects against severe forms of tuberculosis'
        },
        {
            name: 'Pentavalent (DTP-HepB-Hib)',
            price: '₹50',
            eligibility: 'Children below 1 year',
            schedule: '6, 10 & 14 weeks',
            description: 'Combination vaccine for diphtheria, tetanus, pertussis, hepatitis B and Hib'
        },
        {
            name: 'Polio (OPV & IPV)',
            price: 'Free',
            eligibility: 'Children below 5 years',
            schedule: 'Birth, 6, 10, 14 weeks & booster doses',
            description: 'Protects against poliomyelitis'
        },
        {
            name: 'MMR (Measles, Mumps, Rubella)',
            price: '₹100',
            eligibility: 'Children 9-12 months',
            schedule: 'First dose at 9-12 months, second at 16-24 months',
            description: 'Protects against three serious diseases'
        },
        {
            name: 'Rotavirus',
            price: '₹200',
            eligibility: 'Infants 6 weeks to 8 months',
            schedule: '3 doses at 6, 10 & 14 weeks',
            description: 'Prevents severe diarrhea caused by rotavirus'
        }
    ];

    // Government schemes
    const schemes = [
        {
            name: 'Mission Indradhanush',
            coverage: 'Provides free vaccination against 12 diseases',
            eligibility: 'All children and pregnant women',
            link: '#'
        },
        {
            name: 'Universal Immunization Programme',
            coverage: 'Free vaccines at government centers',
            eligibility: 'All children below 5 years',
            link: '#'
        },
        {
            name: 'PMJAY Health Protection Scheme',
            coverage: 'Includes vaccination for eligible families',
            eligibility: 'Families below poverty line',
            link: '#'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center py-12 bg-green-50 rounded-xl mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Affordable Immunization</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Government-supported pricing to ensure all children receive vital vaccinations regardless of income
                </p>
            </div>

            {/* Pricing Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-2">Vaccine Pricing</h2>
                <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                    Our tiered pricing system ensures every family can access life-saving vaccines
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-green-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vaccine</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eligibility</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {vaccines.map((vaccine, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{vaccine.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 rounded-full text-sm ${vaccine.price === 'Free' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                            {vaccine.price}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{vaccine.eligibility}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{vaccine.schedule}</td>
                                    <td className="px-6 py-4 text-gray-500">{vaccine.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Government Schemes */}
            <div className="mb-16 bg-blue-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-8">Government Immunization Schemes</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {schemes.map((scheme, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
                            <h3 className="text-xl font-bold mb-3 text-blue-800">{scheme.name}</h3>
                            <div className="flex items-start mb-3">
                                <FaShieldAlt className="text-blue-500 mt-1 mr-2" />
                                <p><strong>Coverage:</strong> {scheme.coverage}</p>
                            </div>
                            <div className="flex items-start mb-3">
                                <FaUserShield className="text-blue-500 mt-1 mr-2" />
                                <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
                            </div>
                            <a href={scheme.link} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                                <FaInfoCircle className="mr-2" />
                                Learn more about this scheme
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">How To Access Affordable Vaccines</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaHospital className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">1. Find a Center</h3>
                        <p className="text-gray-600">Locate your nearest government health center or participating private clinic</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaMoneyBillWave className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">2. Check Eligibility</h3>
                        <p className="text-gray-600">Bring required documents to verify eligibility for subsidized pricing</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaCalendarAlt className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">3. Get Vaccinated</h3>
                        <p className="text-gray-600">Receive vaccines according to the recommended immunization schedule</p>
                    </div>
                </div>
            </div>

            {/* Location Finder */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
                <h2 className="text-3xl font-bold text-center mb-6">Find Affordable Vaccination Centers Near You</h2>
                <div className="max-w-md mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter your location or PIN code"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <FaMapMarkerAlt className="absolute left-3 top-3.5 text-gray-400" />
                    </div>
                    <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                        Search Centers
                    </button>
                </div>
            </div>

            {/* Financial Assistance */}
            <div className="mt-16 bg-yellow-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-6">Need Further Financial Assistance?</h2>
                <div className="max-w-3xl mx-auto">
                    <p className="text-center text-gray-600 mb-6">
                        If the subsidized prices are still beyond your means, these organizations may be able to help:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-yellow-200">
                            <h3 className="font-bold text-lg mb-2">Vaccine Assistance Program</h3>
                            <p className="text-gray-600 mb-3">Complete waiver for families below poverty line</p>
                            <a href="#" className="text-yellow-700 font-medium">Apply for assistance →</a>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-yellow-200">
                            <h3 className="font-bold text-lg mb-2">NGO Partnerships</h3>
                            <p className="text-gray-600 mb-3">Local organizations providing vaccine support</p>
                            <a href="#" className="text-yellow-700 font-medium">Find NGO partners →</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AffordableImmunization;