import React, { useState } from 'react';
import { FaChild, FaCalendarCheck, FaBell, FaChartLine, FaPrint, FaShareAlt } from 'react-icons/fa';
import { IoMdAlert } from 'react-icons/io';

const ImmunizationTracking = () => {
    const [activeTab, setActiveTab] = useState('current');
    const [children, setChildren] = useState([
        {
            id: 1,
            name: 'Aarav Sharma',
            dob: '2023-05-15',
            gender: 'Male',
            photo: 'https://randomuser.me/api/portraits/lego/1.jpg',
            vaccines: [
                { name: 'BCG', dueDate: '2023-05-15', status: 'completed', administeredDate: '2023-05-16' },
                { name: 'Hepatitis B (Birth Dose)', dueDate: '2023-05-15', status: 'completed', administeredDate: '2023-05-16' },
                { name: 'OPV-0', dueDate: '2023-05-15', status: 'completed', administeredDate: '2023-05-16' },
                { name: 'DTP-1', dueDate: '2023-07-01', status: 'completed', administeredDate: '2023-07-03' },
                { name: 'Hib-1', dueDate: '2023-07-01', status: 'completed', administeredDate: '2023-07-03' },
                { name: 'PCV-1', dueDate: '2023-07-01', status: 'completed', administeredDate: '2023-07-03' },
                { name: 'Rotavirus-1', dueDate: '2023-07-01', status: 'completed', administeredDate: '2023-07-03' },
                { name: 'DTP-2', dueDate: '2023-08-01', status: 'pending', administeredDate: null },
                { name: 'Hib-2', dueDate: '2023-08-01', status: 'pending', administeredDate: null },
                { name: 'PCV-2', dueDate: '2023-08-01', status: 'pending', administeredDate: null },
                { name: 'Rotavirus-2', dueDate: '2023-08-01', status: 'pending', administeredDate: null },
                { name: 'Measles', dueDate: '2024-02-15', status: 'upcoming', administeredDate: null },
            ]
        },
        {
            id: 2,
            name: 'Ananya Patel',
            dob: '2021-11-22',
            gender: 'Female',
            photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
            vaccines: [
                { name: 'BCG', dueDate: '2021-11-22', status: 'completed', administeredDate: '2021-11-23' },
                { name: 'Hepatitis B (Birth Dose)', dueDate: '2021-11-22', status: 'completed', administeredDate: '2021-11-23' },
                // ... more vaccines for this child
            ]
        }
    ]);

    const [selectedChild, setSelectedChild] = useState(0);
    const currentChild = children[selectedChild];

    // Calculate vaccine statistics
    const completedVaccines = currentChild.vaccines.filter(v => v.status === 'completed').length;
    const pendingVaccines = currentChild.vaccines.filter(v => v.status === 'pending').length;
    const upcomingVaccines = currentChild.vaccines.filter(v => v.status === 'upcoming').length;
    const totalVaccines = currentChild.vaccines.length;
    const completionPercentage = Math.round((completedVaccines / totalVaccines) * 100);

    // Filter vaccines based on active tab
    const filteredVaccines = currentChild.vaccines.filter(vaccine => {
        if (activeTab === 'current') return vaccine.status === 'pending';
        if (activeTab === 'completed') return vaccine.status === 'completed';
        if (activeTab === 'upcoming') return vaccine.status === 'upcoming';
        return true;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center py-8 bg-blue-50 rounded-xl mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Immunization Tracking</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Personalized tracking system to ensure complete vaccination coverage for every child
                </p>
            </div>

            {/* Child Selector */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <FaChild className="mr-2 text-blue-500" />
                    Select Child
                </h2>
                <div className="flex flex-wrap gap-4">
                    {children.map((child, index) => (
                        <div
                            key={child.id}
                            onClick={() => setSelectedChild(index)}
                            className={`flex items-center p-4 border rounded-lg cursor-pointer transition ${selectedChild === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}
                        >
                            <img src={child.photo} alt={child.name} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <h3 className="font-medium">{child.name}</h3>
                                <p className="text-sm text-gray-500">DOB: {child.dob}</p>
                            </div>
                        </div>
                    ))}
                    <div className="flex items-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                            <span className="text-2xl">+</span>
                        </div>
                        <div>
                            <h3 className="font-medium">Add New Child</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Overview */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm text-gray-500">Completion</p>
                            <p className="text-3xl font-bold">{completionPercentage}%</p>
                        </div>
                        <div className="w-16 h-16">
                            <svg viewBox="0 0 36 36" className="circular-chart">
                                <path
                                    className="circle-bg"
                                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                    className="circle"
                                    strokeDasharray={`${completionPercentage}, 100`}
                                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.5" className="percentage">{completionPercentage}%</text>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-sm text-gray-500">Completed</p>
                    <p className="text-3xl font-bold text-green-600">{completedVaccines}</p>
                    <p className="text-sm text-gray-500">out of {totalVaccines} vaccines</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-sm text-gray-500">Pending</p>
                    <p className="text-3xl font-bold text-yellow-600">{pendingVaccines}</p>
                    {pendingVaccines > 0 && (
                        <p className="text-sm text-red-500 flex items-center">
                            <IoMdAlert className="mr-1" /> Action needed
                        </p>
                    )}
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-sm text-gray-500">Upcoming</p>
                    <p className="text-3xl font-bold text-blue-600">{upcomingVaccines}</p>
                    {upcomingVaccines > 0 && (
                        <p className="text-sm text-gray-500">Next due: {currentChild.vaccines.find(v => v.status === 'upcoming')?.dueDate}</p>
                    )}
                </div>
            </div>

            {/* Vaccine Tracking */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="border-b border-gray-200">
                    <nav className="flex -mb-px">
                        <button
                            onClick={() => setActiveTab('current')}
                            className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'current' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Current ({pendingVaccines})
                        </button>
                        <button
                            onClick={() => setActiveTab('completed')}
                            className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'completed' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Completed ({completedVaccines})
                        </button>
                        <button
                            onClick={() => setActiveTab('upcoming')}
                            className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'upcoming' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Upcoming ({upcomingVaccines})
                        </button>
                    </nav>
                </div>

                <div className="p-6">
                    {filteredVaccines.length > 0 ? (
                        <div className="space-y-4">
                            {filteredVaccines.map((vaccine, index) => (
                                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                    <div>
                                        <h3 className="font-medium">{vaccine.name}</h3>
                                        <p className="text-sm text-gray-500">Due: {vaccine.dueDate}</p>
                                        {vaccine.administeredDate && (
                                            <p className="text-sm text-gray-500">Administered: {vaccine.administeredDate}</p>
                                        )}
                                    </div>
                                    <div>
                                        {vaccine.status === 'completed' && (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                <FaCheck className="mr-1" /> Completed
                                            </span>
                                        )}
                                        {vaccine.status === 'pending' && (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                                <IoMdAlert className="mr-1" /> Pending
                                            </span>
                                        )}
                                        {vaccine.status === 'upcoming' && (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                <FaCalendarCheck className="mr-1" /> Upcoming
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-gray-500">
                            No {activeTab} vaccines found
                        </div>
                    )}
                </div>
            </div>

            {/* Reminders and Actions */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <FaBell className="mr-2 text-yellow-500" />
                        Set Reminders
                    </h3>
                    <p className="text-gray-600 mb-4">Get notified about upcoming vaccinations</p>
                    <button className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-100 transition">
                        Enable Notifications
                    </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <FaChartLine className="mr-2 text-green-500" />
                        Growth Tracking
                    </h3>
                    <p className="text-gray-600 mb-4">Monitor your child's growth alongside vaccinations</p>
                    <button className="w-full bg-green-50 text-green-600 py-2 rounded-lg font-medium hover:bg-green-100 transition">
                        View Growth Chart
                    </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <FaPrint className="mr-2 text-purple-500" />
                        Print Records
                    </h3>
                    <p className="text-gray-600 mb-4">Generate official vaccination records</p>
                    <div className="flex space-x-3">
                        <button className="flex-1 bg-purple-50 text-purple-600 py-2 rounded-lg font-medium hover:bg-purple-100 transition flex items-center justify-center">
                            <FaPrint className="mr-2" /> Print
                        </button>
                        <button className="flex-1 bg-gray-50 text-gray-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition flex items-center justify-center">
                            <FaShareAlt className="mr-2" /> Share
                        </button>
                    </div>
                </div>
            </div>

            {/* Vaccination Timeline */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Vaccination Timeline</h2>
                <div className="relative">
                    {/* Timeline visualization would go here */}
                    <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                        Interactive timeline visualization of vaccination schedule
                    </div>
                </div>
            </div>

            {/* Missing Vaccines Alert */}
            {pendingVaccines > 0 && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <IoMdAlert className="h-5 w-5 text-red-500" />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">Action required</h3>
                            <div className="mt-2 text-sm text-red-700">
                                <p>
                                    Your child has {pendingVaccines} pending vaccination{pendingVaccines !== 1 ? 's' : ''} that should be administered soon.
                                </p>
                            </div>
                            <div className="mt-4">
                                <button className="bg-red-100 text-red-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-red-200 transition">
                                    Find vaccination centers
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImmunizationTracking;