import React from "react";

const HeroSection = () => {
  return (
    <section className=" relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* ================= Gradient Background ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-cyan-500 to-purple-600 opacity-95 -z-10"></div>

      {/* ================= Glass Panel ================= */}
      <div className="relative z-10 w-full max-w-6xl p-8 md:p-16 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl flex flex-col lg:flex-row items-center justify-between">
        
        {/* ================= Left Content ================= */}
        <div className="text-center lg:text-left lg:max-w-lg space-y-6">
          {/* CTA */}
          <button className="bg-accent text-white px-6 py-2 rounded-full font-semibold hover:brightness-110 transition">
            Get Started
          </button>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Freelance Services For <br />
            Your <span className="text-yellow-400">Business</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-gray-100">
            Work with talented people at the most affordable price to get
            the most out of your time and cost.
          </p>

          {/* Search Box */}
          <div className="flex flex-col md:flex-row gap-3 justify-center lg:justify-start mt-6 flex-wrap">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full md:w-72 px-4 py-2 rounded-lg border border-white/30 bg-white/20 placeholder-white text-white focus:outline-none"
            />
            <select className="w-full md:w-48 px-4 py-2 rounded-lg border border-white/30 bg-white/20 placeholder-white text-white focus:outline-none">
              <option>City, state, or zip</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Miami</option>
            </select>
            <button className="bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:brightness-110 transition">
              Search
            </button>
          </div>

          {/* Popular Searches */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            {["Designer", "Developer", "Web", "iOS", "PHP", "Senior"].map(
              (item) => (
                <button
                  key={item}
                  className="border border-white/50 text-white rounded-full px-4 py-1 text-sm font-medium hover:bg-white/20 transition"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        {/* ================= Right Image ================= */}
        <div className="hidden lg:flex justify-end relative">
          <img
            src="https://demoapus1.com/freeio/wp-content/uploads/2023/07/h12-4.png"
            alt="Freelancer"
            className="w-[420px] xl:w-[500px] object-contain"
          />

          {/* Floating Info Card */}
          <div className="absolute bottom-10 left-0 bg-white/10 backdrop-blur-lg shadow-xl rounded-xl p-4">
            <p className="text-sm font-semibold text-primary">👋 5k+ Freelancers Online</p>
            <p className="text-xs text-slateGray">
              Ready to work right now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
