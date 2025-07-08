import React, { useState } from "react";

const ServicesScreen = () => {
  const [query, setQuery] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setAnimeList([]);

    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${query}&limit=12`
      );
      const data = await res.json();

      if (data.data && data.data.length > 0) {
        setAnimeList(data.data);
      } else {
        setError("No anime found. Try a different name.");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching anime data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-16 bg-gradient-to-b from-black/90 to-[#1a1a1a] text-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-10 drop-shadow-md">
          🔍 Search Your Favorite Anime
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="e.g. Naruto, One Piece, Demon Slayer..."
            className="flex-1 px-4 py-3 rounded-xl border border-white text-white bg-transparent placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-white text-black px-6 py-3 rounded-xl border border-white hover:bg-transparent hover:text-white transition-all font-semibold">
            Search
          </button>
        </div>

        {/* Loading or Error */}
        {loading && (
          <p className="text-center text-white/70 font-medium">
            Fetching anime...
          </p>
        )}
        {error && (
          <p className="text-center text-red-400 font-medium">{error}</p>
        )}

        {/* Anime Results */}
        {animeList.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {animeList.map((anime) => (
              <div
                key={anime.mal_id}
                className="bg-white/10 backdrop-blur-lg text-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition hover:scale-105">
                <img
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">{anime.title}</h3>
                  <p className="text-sm text-white/80 mb-2">
                    Episodes: {anime.episodes ?? "?"} | Score:{" "}
                    {anime.score ?? "?"}
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
        )}
      </div>
    </div>
  );
};

export default ServicesScreen;
