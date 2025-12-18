const categories = [
  "Engineering",
  "Marketing",
  "Finance",
  "Teaching",
  "Management",
  "Data Science",
  "Design",
  "Development",
];

const BrowseCategories = ({ jobs, loading }) => {
  if (loading) {
    return <p className="text-center py-10">Loading categories...</p>;
  }

  const categoryCount = category =>
    jobs.filter(job => job.category === category).length;

  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 via-cyan-500 to-purple-600 ">
      <div className="container mx-auto px-4 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Browse Jobs by Category
        </h2>
        <p className="mb-10 opacity-90">
          ({jobs.length} Jobs Available)
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 transition cursor-pointer shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{cat}</h3>
              <p className="text-sm opacity-90">
                {categoryCount(cat)} Jobs Available
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
