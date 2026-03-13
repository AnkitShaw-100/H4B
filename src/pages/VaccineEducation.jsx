import React from 'react';
import { FaCalendarAlt, FaShieldAlt, FaUsers, FaBook, FaQuestionCircle } from 'react-icons/fa';

const VaccineEducation = () => {
  // Vaccine schedule data
  const vaccineSchedule = [
    {
      age: 'At Birth',
      vaccines: ['BCG', 'Hepatitis B (Birth Dose)', 'OPV-0'],
      description: 'Initial protection against tuberculosis, hepatitis B, and polio'
    },
    {
      age: '6 Weeks',
      vaccines: ['DTP-1', 'Hib-1', 'PCV-1', 'Rotavirus-1', 'IPV-1'],
      description: 'First doses of critical vaccines for infants'
    },
    {
      age: '10 Weeks',
      vaccines: ['DTP-2', 'Hib-2', 'PCV-2', 'Rotavirus-2'],
      description: 'Second doses to boost immunity'
    },
    {
      age: '9 Months',
      vaccines: ['Measles', 'Vitamin A'],
      description: 'Protection against measles and vitamin supplementation'
    },
    {
      age: '12-15 Months',
      vaccines: ['MMR', 'PCV Booster', 'Hepatitis A'],
      description: 'Additional protection as immune system develops'
    }
  ];

  // Vaccine benefits
  const vaccineBenefits = [
    {
      icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
      title: 'Disease Prevention',
      description: 'Vaccines prevent 2-3 million deaths each year from diseases like diphtheria, tetanus, pertussis, influenza and measles'
    },
    {
      icon: <FaUsers className="text-green-500 text-2xl" />,
      title: 'Herd Immunity',
      description: 'When enough people are vaccinated, it protects those who cannot receive vaccines, like newborns and immunocompromised individuals'
    },
    {
      icon: <FaCalendarAlt className="text-purple-500 text-2xl" />,
      title: 'Long-term Protection',
      description: 'Many vaccines provide lifelong immunity, reducing healthcare costs and improving quality of life'
    }
  ];

  // FAQ section
  const faqs = [
    {
      question: 'Are vaccines safe?',
      answer: 'Yes, vaccines undergo rigorous testing and continuous monitoring to ensure safety. Serious side effects are extremely rare.'
    },
    {
      question: 'Why do vaccines start so early?',
      answer: 'Newborns are vulnerable to diseases. Early vaccination protects them when they are most at risk.'
    },
    {
      question: 'Can vaccines overload a child\'s immune system?',
      answer: 'No, children\'s immune systems handle many more antigens daily than vaccines contain.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-blue-50 rounded-xl mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Vaccine Education Center</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive resources about vaccine schedules, benefits, and community health impact
        </p>
      </div>

      {/* Vaccine Schedule Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <FaCalendarAlt className="mr-3 text-blue-500" />
          Recommended Vaccine Schedule
        </h2>
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vaccines</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vaccineSchedule.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.age}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {item.vaccines.map((vaccine, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {vaccine}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <FaShieldAlt className="mr-3 text-green-500" />
          Benefits of Vaccination
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {vaccineBenefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="mb-16 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Community Health Impact</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-4">
              Vaccination doesn't just protect individuals—it protects entire communities through herd immunity. When vaccination rates are high:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Diseases can't spread easily through the population</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Vulnerable individuals are protected (newborns, elderly, immunocompromised)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Diseases can be eliminated entirely (like smallpox was in 1980)</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Vaccination Coverage Impact</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Disease Spread</span>
                  <span>95% coverage</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '5%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Herd Immunity</span>
                  <span>80% coverage</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Outbreak Risk</span>
                  <span>60% coverage</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <FaQuestionCircle className="mr-3 text-purple-500" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <FaBook className="mr-3 text-blue-500" />
          Additional Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold mb-2">Official Guidelines</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">WHO Immunization Schedule</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">CDC Vaccine Recommendations</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Ministry of Health Guidelines</a></li>
            </ul>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-semibold mb-2">Educational Materials</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">Vaccine Safety Information</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Parent's Guide to Immunization</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Myths vs Facts About Vaccines</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VaccineEducation;