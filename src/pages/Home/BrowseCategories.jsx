import React from "react";


const categories = [
  { name: "Web Design", image: "https://picsum.photos/100/100?random=1" },
  { name: "Logo Design", image: "https://picsum.photos/100/100?random=2" },
  { name: "Voice Over", image: "https://picsum.photos/100/100?random=3" },
  { name: "Video Editing", image: "https://picsum.photos/100/100?random=4" },
  { name: "SEO", image: "https://picsum.photos/100/100?random=5" },
  { name: "Content Writing", image: "https://picsum.photos/100/100?random=6" },
  { name: "Digital Marketing", image: "https://picsum.photos/100/100?random=7" },
];

const BrowseCategories = () => {
  return (
    <section className="relative py-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-cyan-500 to-purple-600 opacity-90 -z-10"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Browse Services by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl flex flex-col items-center cursor-pointer shadow hover:shadow-xl transition transform hover:scale-105"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-16 h-16 rounded-full mb-2 object-cover border-2 border-white/30"
              />
              <span className="font-medium text-white">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
