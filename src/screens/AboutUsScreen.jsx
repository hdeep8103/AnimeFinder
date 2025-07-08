import React from "react";

const teamMembers = [
  {
    name: "Palak Bhatia",
    className: "BCA Final Year",
    RollNumber: "2224921",
    branch: "Computer Application",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Amanjeet Kaur",
    className: "BCA Final Year",
    RollNumber: "2224873",
    branch: "Computer Application",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Harmandeep Singh",
    className: "BCA Final Year",
    RollNumber: "2224895",
    branch: "Computer Application",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Baljit Singh",
    className: "BCA Final Year",
    RollNumber: "2224886",
    branch: "Computer Application",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
];

const AboutUsScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black/90 to-[#111] text-white px-6 py-35">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow">
          About Our Project
        </h1>

        {/* Project Overview */}
        <div className="border border-white text-white p-8 rounded-3xl shadow-lg mb-12 text-center bg-white/5 backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-md leading-relaxed text-white/80">
            Anime Finder is a student-built web application developed as part of
            our BCA Final Year project. It allows users to search and explore
            trending and classic anime using the Jikan API (MyAnimeList).
            Designed using React JS, Tailwind CSS, and modern development tools,
            our goal was to deliver a visually rich, responsive, and
            anime-themed experience for users of all ages.
          </p>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-3xl text-center shadow-lg border border-white hover:scale-105 hover:bg-white/10 transition duration-300 backdrop-blur-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white"
              />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-sm text-white/70">{member.className}</p>
              <p className="text-sm text-white/70">{member.branch}</p>
              <p className="text-sm text-white/70">
                Roll No: {member.RollNumber}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-16">
          <p className="italic text-white/60">
            "Anime Finder – crafted with code, passion, and teamwork as part of
            our final year academic journey."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
