import React, { useEffect, useState } from "react";

// Loader
const Loader = () => (
  <div className="flex items-center justify-center h-screen text-white">
    <div className="w-12 h-12 border-4 border-white border-dashed rounded-full animate-spin"></div>
  </div>
);

const HomeScreen = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Top Anime from Jikan API
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await fetch("https://api.jikan.moe/v4/top/anime?limit=8");
        const data = await res.json();
        setAnimeList(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch anime:", err);
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="text-white px-4 pt-20 pb-10">
      {/* Welcome Banner */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg animate-fade-in">
          Welcome to Anime FInder!
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8 text-white/90">
          This student project merges the world of culinary recipes with a touch
          of anime! Explore top anime picks with beautiful card animations while
          enjoying a seamless web experience.
        </p>
        <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-full text-lg font-semibold">
          Get Started
        </button>
      </section>

      {/* Top Anime Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10 animate-bounce">
          🌟 Top Trending Anime
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {animeList.map((anime) => (
            <div
              key={anime.mal_id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:shadow-xl transition transform hover:scale-105">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{anime.title}</h3>
                <p className="text-sm text-white/80 mb-2">
                  Episodes: {anime.episodes ?? "N/A"} | Score: {anime.score}
                </p>
                <a
                  href={anime.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 px-4 py-1 border border-white text-white hover:bg-white hover:text-black rounded-full transition">
                  View on MAL
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
