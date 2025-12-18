import React from "react";

const stats = [
  { title: "Completed Projects", value: "1,200+" },
  { title: "Happy Clients", value: "800+" },
  { title: "Freelancers", value: "150+" },
  { title: "Awards Won", value: "25+" },
];

const StatsCounters = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-cyan-600 to-purple-600 opacity-90"></div>

      {/* Soft blur overlay for depth */}
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      <div className="container mx-auto relative z-10 px-4">
        {/* Optional Section Label */}
        <p className="text-center text-gray-200 uppercase tracking-widest text-sm mb-12">
          Platform Statistics
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                bg-white/15
                backdrop-blur-xl
                rounded-2xl
                p-8
                shadow-xl
                border border-white/20
                transition
                duration-300
                hover:-translate-y-2
                hover:bg-white/20
              "
            >
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-gray-200 font-medium tracking-wide">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounters;
