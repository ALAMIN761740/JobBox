

const services = [
  {
    title: "Premium Logo Design",
    desc: "High-quality logo design service for your brand.",
    price: 49,
    image: "https://picsum.photos/400/250?random=1",
  },
  {
    title: "Website Development",
    desc: "Build responsive websites using modern tech.",
    price: 120,
    image: "https://picsum.photos/400/250?random=2",
  },
  {
    title: "Video Editing",
    desc: "Professional editing for your videos.",
    price: 80,
    image: "https://picsum.photos/400/250?random=3",
  },
  {
    title: "SEO Optimization",
    desc: "Improve your website ranking on Google.",
    price: 60,
    image: "https://picsum.photos/400/250?random=4",
  },
  {
    title: "Content Writing",
    desc: "Engaging content for blogs and websites.",
    price: 30,
    image: "https://picsum.photos/400/250?random=5",
  },
  {
    title: "Digital Marketing",
    desc: "Grow your business online effectively.",
    price: 70,
    image: "https://picsum.photos/400/250?random=6",
  },
];

const TrendingServices = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12"
        >
          Trending Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-base-100 shadow-lg rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <p className="text-primary font-semibold text-lg">${service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingServices;
