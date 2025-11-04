import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=bbd8d3&i=${id}&plot=full`
      );
      const data = await res.json();
      setMovie(data);
      setLoading(false);
    };
    fetchMovie();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!movie) return <p className="p-6">Movie not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        {movie.Title} ({movie.Year})
      </h1>
      <div className="md:flex gap-6">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          className="w-64 h-auto object-cover rounded mb-4 md:mb-0"
        />
        <div>
          <p>
            <b>Genre:</b> {movie.Genre}
          </p>
          <p>
            <b>Director:</b> {movie.Director}
          </p>
          <p>
            <b>Actors:</b> {movie.Actors}
          </p>
          <p>
            <b>Plot:</b> {movie.Plot}
          </p>
          <p>
            <b>IMDB Rating:</b> {movie.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
}
