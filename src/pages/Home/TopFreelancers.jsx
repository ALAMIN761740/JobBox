import React from "react";

const freelancers = [
  {
    name: "John Doe",
    skill: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Jane Smith",
    skill: "Web Developer",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Michael Lee",
    skill: "Video Editor",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Emily Davis",
    skill: "Content Writer",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

const TopFreelancers = () => {
  return (
    <section className="relative py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-cyan-600 to-purple-600 opacity-90 -z-10"></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          Top Freelancers
        </h2>

        {/* Freelancer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {freelancers.map((freelancer, index) => (
            <div
              key={index}
              className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center"
            >
              {/* Avatar */}
              <img
                src={freelancer.image}
                alt={freelancer.name}
                className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-white/30"
              />

              {/* Name */}
              <h3 className="font-semibold text-xl text-white">
                {freelancer.name}
              </h3>

              {/* Skill */}
              <p className="text-gray-200 text-sm mt-1">
                {freelancer.skill}
              </p>

              {/* Button */}
              <button className="mt-5 px-5 py-2 rounded-full border border-white/50 text-white text-sm font-medium hover:bg-white/20 transition">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopFreelancers;
