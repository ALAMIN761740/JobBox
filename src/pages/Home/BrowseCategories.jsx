

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
    <section className="py-16 bg-base-100">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10"
        >
          Browse Services by Category
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-base-200 p-4 rounded-xl flex flex-col items-center cursor-pointer shadow hover:shadow-lg transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-16 h-16 rounded-full mb-2 object-cover"
              />
              <span className="font-medium">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
