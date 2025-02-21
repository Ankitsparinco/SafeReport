"use client";

const teamMembers = [
  { name: "Ankit Yadav", phone: "909 688 7892", image: "/safdar ali khan.jpg" },
  { name: "Aayush Sharma", phone: "987 654 3210", image: "/repo.jpg" },
  { name: "Roshan Nag", phone: "956 789 0123", image: "/dudhwa.jpg" },
];

export default function TeamSection() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-start p-6">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">Contact with Us..!</h1>
        <hr className="w-24 mx-auto border-2 border-white mt-4" />
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-2xl overflow-hidden transform transition-transform hover:scale-105 ${
              index % 2 === 0 ? "bg-yellow-200" : "bg-pink-200" // Alternate between light yellow and light pink
            }`}
          >
            {/* Member Image */}
            <div className="flex justify-center pt-8">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white"
                loading="lazy" // Lazy loading for better performance
              />
            </div>

            {/* Member Details */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 mt-2">Admin and User</p>
              <div className="mt-4 text-gray-800 text-lg">
                <p>
                  Phone:{" "}
                  <a
                    href={`tel:${member.phone}`}
                    className="text-blue-600 hover:underline"
                  >
                    {member.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}