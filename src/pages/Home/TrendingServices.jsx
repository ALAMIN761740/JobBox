import React from "react";

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
    <section className="relative py-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-cyan-500 to-purple-600 opacity-90 -z-10"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Trending Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transform hover:scale-105 transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="font-bold text-xl mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-200 mb-4">{service.desc}</p>
                <p className="text-accent font-semibold text-lg">
                  ${service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingServices;
