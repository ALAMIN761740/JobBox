
import { FaClipboardList, FaUserCheck, FaMoneyCheckAlt, FaHeadset } from "react-icons/fa";

const steps = [
  {
    title: "Post a Job",
    desc: "Fill in your job details quickly and easily.",
    icon: <FaClipboardList size={40} className="text-primary mb-4" />,
  },
  {
    title: "Choose Freelancer",
    desc: "Select the best talent from the proposals.",
    icon: <FaUserCheck size={40} className="text-primary mb-4" />,
  },
  {
    title: "Secure Payment",
    desc: "Pay safely and release funds when satisfied.",
    icon: <FaMoneyCheckAlt size={40} className="text-primary mb-4" />,
  },
  {
    title: "Get Support",
    desc: "24/7 customer assistance whenever you need.",
    icon: <FaHeadset size={40} className="text-primary mb-4" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-base-100 text-center">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 bg-base-200 rounded-xl shadow flex flex-col items-center"
            >
              {step.icon}
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
