import { motion } from "motion/react"

const testimonials = [
  {
    name: "Courtney Henry",
    role: "CEO, TechCorp",
    text: "Amazing support and top-notch results! Highly recommended.",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Kristin Watson",
    role: "Marketing Manager",
    text: "Fast delivery and great quality. Will hire again!",
    image: "https://i.pravatar.cc/100?img=6",
  },
  {
    name: "Jacob Jones",
    role: "Startup Founder",
    text: "Talented freelancers and smooth workflow. Excellent experience.",
    image: "https://i.pravatar.cc/100?img=7",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-base-100 text-center">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12"
        >
          What Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-base-200 shadow-lg p-8 rounded-xl flex flex-col items-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="italic mb-4">“{t.text}”</p>
              <h3 className="font-bold">{t.name}</h3>
              <p className="text-gray-600">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
