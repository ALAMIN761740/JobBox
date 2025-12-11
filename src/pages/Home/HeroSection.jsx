import React from "react";


const HeroSection = () => {
  return (
    <section className="bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?blur=2')" }}>
      <div className="text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hire the best freelancers for any job
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-2xl mb-6"
        >
          Work with talented people at the most affordable price.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-3 justify-center"
        >
          <input
            type="text"
            placeholder="Search for services..."
            className="input input-bordered w-72 md:w-96"
          />
          <button className="btn btn-primary">Search</button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
