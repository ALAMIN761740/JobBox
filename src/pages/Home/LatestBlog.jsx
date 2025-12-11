


const blogPosts = [
  {
    title: "Top 10 Freelancing Tips",
    desc: "Learn how to boost your freelancing career with these tips.",
    date: "Dec 10, 2025",
    image: "https://picsum.photos/400/250?random=8",
  },
  {
    title: "How to Choose the Right Freelancer",
    desc: "Step-by-step guide to select the perfect freelancer for your project.",
    date: "Dec 8, 2025",
    image: "https://picsum.photos/400/250?random=9",
  },
  {
    title: "Digital Marketing Strategies",
    desc: "Increase your business visibility online effectively.",
    date: "Dec 5, 2025",
    image: "https://picsum.photos/400/250?random=10",
  },
];

const LatestBlog = () => {
  return (
    <section className="py-20 bg-base-200 text-center">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12"
        >
          Latest Blog & News
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-base-100 shadow-lg rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
