

const freelancers = [
  {
    name: "John Doe",
    skill: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Jane Smith",
    skill: "Web Developer",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Michael Lee",
    skill: "Video Editor",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Emily Davis",
    skill: "Content Writer",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

const TopFreelancers = () => {
  return (
    <section className="py-20 bg-base-200 text-center">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12"
        >
          Top Freelancers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {freelancers.map((freelancer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-base-100 shadow-lg rounded-xl p-6 flex flex-col items-center"
            >
              <img
                src={freelancer.image}
                alt={freelancer.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="font-bold text-xl">{freelancer.name}</h3>
              <p className="text-gray-600">{freelancer.skill}</p>
              <button className="btn btn-outline btn-primary btn-sm mt-4">
                View Profile
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopFreelancers;
