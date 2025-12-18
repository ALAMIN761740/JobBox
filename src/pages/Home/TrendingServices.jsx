import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaTag,
} from "react-icons/fa";

const TrendingServices = ({ jobs }) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-cyan-500 to-purple-600"></div>

      {/* Soft Blur Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest Job Opportunities
          </h2>
          <p className="opacity-90 mt-2">
            Discover jobs from top companies worldwide
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map(job => (
            <div
              key={job._id}
              className="
                bg-white/15 backdrop-blur-xl
                border border-white/20
                rounded-2xl p-6
                shadow-lg
                hover:bg-white/20 hover:shadow-2xl
                transition duration-300
              "
            >
              {/* Top */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={job.company_logo}
                  alt={job.company}
                  className="w-14 h-14 rounded-lg bg-white p-1 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {job.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {job.company}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="text-sm text-white/90 space-y-2 mb-4">
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-cyan-300" />
                  {job.location}
                </p>

                <p className="flex items-center gap-2">
                  <FaBriefcase className="text-yellow-300" />
                  {job.jobType}
                </p>

                <p className="flex items-center gap-2">
                  <FaMoneyBillWave className="text-green-300" />
                  {job.salaryRange.min} – {job.salaryRange.max}{" "}
                  {job.salaryRange.currency.toUpperCase()}
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-white/20 text-white">
                  <FaTag />
                  {job.category}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-200">
                  {job.status}
                </span>
              </div>

              {/* Button */}
              <button className="
                w-full py-2 rounded-lg
                bg-white/20 text-white
                border border-white/30
                hover:bg-white hover:text-gray-800
                transition font-medium
              ">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingServices;
