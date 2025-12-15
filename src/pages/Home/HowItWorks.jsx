import React from "react";
import {
  FaClipboardList,
  FaUserCheck,
  FaMoneyCheckAlt,
  FaHeadset,
} from "react-icons/fa";

const steps = [
  {
    title: "Post a Job",
    desc: "Fill in your job details quickly and easily.",
    icon: <FaClipboardList size={36} />,
  },
  {
    title: "Choose Freelancer",
    desc: "Select the best talent from the proposals.",
    icon: <FaUserCheck size={36} />,
  },
  {
    title: "Secure Payment",
    desc: "Pay safely and release funds when satisfied.",
    icon: <FaMoneyCheckAlt size={36} />,
  },
  {
    title: "Get Support",
    desc: "24/7 customer assistance whenever you need.",
    icon: <FaHeadset size={36} />,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-cyan-600 to-purple-600 opacity-90 -z-10"></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          How It Works
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 text-white">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
