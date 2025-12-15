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
    <section className="relative py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-cyan-600 to-purple-600 opacity-90 -z-10"></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          What Clients Say
        </h2>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 shadow-xl flex flex-col items-center transition hover:-translate-y-2"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border border-white/40"
              />

              <p className="italic text-gray-100 mb-4">
                “{t.text}”
              </p>

              <h3 className="font-semibold text-white">{t.name}</h3>
              <p className="text-gray-200 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
