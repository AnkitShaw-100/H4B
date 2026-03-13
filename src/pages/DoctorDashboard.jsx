import SearchUser from "../components/SearchUser";

export default function DoctorDashboard() {
  const stats = [
    {
      label: "Total Children Registered",
      value: "1,240",
      trend: "↑ 12%",
      positive: true,
    },
    {
      label: "Vaccinations Administered",
      value: "980",
      trend: "↑ 5%",
      positive: true,
    },
    { label: "Active Doctors", value: "12", trend: "→", positive: null },
    {
      label: "Upcoming Appointments",
      value: "34",
      trend: "↑ 8%",
      positive: true,
    },
    { label: "Hospitals Onboarded", value: "5", trend: "→", positive: null },
    {
      label: "Project Uptime",
      value: "210 days",
      trend: "100%",
      positive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchUser />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow-sm border border-gray-100 rounded-xl"
            >
              <div className="px-5 py-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-lg p-3">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1 min-w-0">
                    <dt className="text-xs font-medium text-gray-400 uppercase tracking-wide truncate mb-1">
                      {stat.label}
                    </dt>
                    <dd className="flex items-baseline gap-2">
                      <span className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </span>
                      <span
                        className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
                          stat.positive === true
                            ? "bg-green-50 text-green-600"
                            : stat.positive === false
                              ? "bg-red-50 text-red-500"
                              : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {stat.trend}
                      </span>
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "New Registrations",
              desc: "View and manage newly registered children for vaccination programs.",
              btn: "View Registrations",
            },
            {
              title: "Vaccination Records",
              desc: "Access, update, and manage complete child vaccination history.",
              btn: "Manage Records",
            },
            {
              title: "Appointments",
              desc: "Check and manage your upcoming vaccination appointments.",
              btn: "View Schedule",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white shadow-sm border border-gray-100 rounded-xl overflow-hidden flex flex-col"
            >
              <div className="px-5 py-6 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {card.desc}
                </p>
                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
                  >
                    {card.btn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
