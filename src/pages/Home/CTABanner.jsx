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
      <div className="bg-black bg-opacity-50 p-10 rounded-lg">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Start Your Project Today!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl mb-8"
        >
          Hire top freelancers or become one yourself. Everything is simple and secure.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button className="btn btn-primary btn-lg mr-4">Post a Job</button>
          <button className="btn btn-outline btn-secondary btn-lg">Hire a Freelancer</button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
