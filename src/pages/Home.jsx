import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("batman");
  const [loading, setLoading] = useState(true);

  const getMovies = async (query) => {
    setLoading(true);
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=bbd8d3&s=${query}`
    );
    const data = await res.json();
    setMovies(data.Search || []);
    setLoading(false);
  };

  useEffect(() => {
    getMovies(search);
  }, []);

  return (
    <div className="p-6">
      <div className="flex gap-2 mb-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
          className="border p-2 rounded w-64"
        />
        <button
          onClick={() => getMovies(search)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <Link
              key={movie.imdbID}
              to={`/dashboard/movie/${movie.imdbID}`}
              className="bg-white rounded shadow hover:shadow-lg p-3"
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
                alt={movie.Title}
                className="w-full h-64 object-cover rounded"
              />
              <h2 className="mt-2 text-lg font-bold">{movie.Title}</h2>
              <p className="text-gray-500 text-sm">{movie.Year}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
