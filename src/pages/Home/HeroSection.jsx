import React from "react";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://picsum.photos/1600/900?blur=2')",
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Hire the best freelancers for any job
        </h1>

        <p className="text-lg md:text-2xl mb-6 opacity-90">
          Work with talented people at the most affordable price.
        </p>

        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <input
            type="text"
            placeholder="Search for services..."
            className="input input-bordered w-72 md:w-96 bg-white text-black"
          />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
