

const stats = [
  { title: "Completed Projects", value: 1200 },
  { title: "Happy Clients", value: 800 },
  { title: "Freelancers", value: 150 },
  { title: "Awards Won", value: 25 },
];

const StatsCounters = () => {
  return (
    <section className="py-20 bg-base-100 text-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="p-6 bg-base-200 rounded-xl shadow flex flex-col items-center"
          >
            <motion.p
              className="text-4xl font-bold text-primary mb-2"
              whileInView={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6 }}
            >
              {stat.value}+
            </motion.p>
            <p className="text-gray-600">{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounters;
