import React from "react";

const CTABanner = () => {
  return (
    <section
      className="relative py-20 flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('https://picsum.photos/1600/500?blur=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg p-12 rounded-2xl max-w-3xl">
        
        {/* Section Label */}
        <p className="uppercase tracking-widest text-sm text-gray-200 mb-3">
          Get Started
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Start Your Project Today!
        </h2>

        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Hire top freelancers or become one yourself. Everything is simple and secure.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn btn-primary btn-lg px-10">
            Post a Job
          </button>
          <button className="btn btn-outline btn-secondary btn-lg px-10 text-white border-white hover:bg-white hover:text-black">
            Hire a Freelancer
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
