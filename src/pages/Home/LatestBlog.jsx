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
    <section className="relative py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-cyan-600 to-purple-600 opacity-90 -z-10"></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          Latest Blog & News
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white/15 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl transition hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 text-left">
                <p className="text-sm text-gray-200 mb-2">{post.date}</p>
                <h3 className="font-semibold text-xl text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-100 text-sm">
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
