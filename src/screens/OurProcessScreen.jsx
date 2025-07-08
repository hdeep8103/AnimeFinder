import React from "react";

const OurProcessScreen = () => {
  const processSteps = [
    {
      title: "Step 1: Planning & API Selection",
      desc: "We chose the Jikan API (MyAnimeList) for fetching rich and structured anime data to ensure consistent results for anime search and exploration.",
    },
    {
      title: "Step 2: UI/UX Design",
      desc: "We designed an immersive user experience with Tailwind CSS, ensuring that the interface feels modern, clean, and anime-themed with dark mode aesthetics.",
    },
    {
      title: "Step 3: HomeScreen Integration",
      desc: "Our HomeScreen features a welcome banner with intro text and a 'Get Started' button, followed by top anime listings using the Jikan API.",
    },
    {
      title: "Step 4: Anime Search Feature",
      desc: "In the Services screen, users can search their favorite anime using keywords. Results are fetched live from the Jikan API and displayed with transitions.",
    },
    {
      title: "Step 5: Routing & Navigation",
      desc: "We used React Router DOM for smooth navigation between Home, Services, About Us, and Our Process pages, all styled to match our anime theme.",
    },
    {
      title: "Step 6: Responsive Design & Animations",
      desc: "All components are responsive and animated with hover effects and transitions to enhance user interaction across devices.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/90 to-[#0e0e0e] text-white px-6 py-35">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow">
          ✨ Our Anime Finder Process
        </h1>

        {/* Intro Section */}
        <div className="border border-white rounded-3xl p-8 text-center shadow-lg mb-12 backdrop-blur-md bg-white/5">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Project Overview
          </h2>
          <p className="text-md text-white/80 leading-relaxed">
            Anime Finder is a student-built web application created using React,
            Tailwind CSS, and the Jikan API. It allows users to explore top
            anime titles, search by name, and view real-time data from
            MyAnimeList. The design is minimal, dark-themed, and fully
            responsive—offering users an engaging and fast anime discovery
            experience.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="border border-white p-6 rounded-3xl bg-white/5 backdrop-blur-md transition hover:scale-105 hover:shadow-xl hover:bg-white/10">
              <h3 className="text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-white/80">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Outro Quote */}
        <div className="text-center mt-16">
          <p className="italic text-white/60">
            "Built by passionate students, Anime Finder is more than a project —
            it's a tribute to anime fans and web developers alike."
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProcessScreen;
